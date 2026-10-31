import { useEffect, useState } from 'react';
import { useLang } from '../i18n.jsx';

const SECTIONS = ['about', 'experience', 'expertise', 'skills', 'projects', 'controls', 'contact'];

export default function NavBar() {
  const { t, toggle, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`site-nav${scrolled ? ' is-scrolled' : ''}`} aria-label="Main">
      <div className="container nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">AA</span>
          <span className="brand-name">{t.hero.name}</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true" />
          <span className="visually-hidden">{t.nav.menu}</span>
        </button>

        <div id="nav-links" className={`nav-links${open ? ' is-open' : ''}`}>
          <ul>
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={() => setOpen(false)}>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="lang-switch"
            onClick={toggle}
            aria-label={t.meta.langSwitchAria}
            lang={lang === 'en' ? 'ar' : 'en'}
          >
            <i className="bi bi-translate" aria-hidden="true" />
            {t.meta.langLabel}
          </button>
        </div>
      </div>
    </nav>
  );
}
