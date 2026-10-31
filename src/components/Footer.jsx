import { useLang } from '../i18n.jsx';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}
        </span>
        <a href="#top">
          <i className="bi bi-arrow-up" aria-hidden="true" /> {t.footer.top}
        </a>
      </div>
    </footer>
  );
}
