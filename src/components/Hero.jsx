import { useLang, asset } from '../i18n.jsx';
import { cv, photo, yearsOfExperience } from '../content/profile.js';

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <header className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">
            <i className="bi bi-geo-alt" aria-hidden="true" /> {h.location}
          </p>
          <h1>{h.name}</h1>
          <ul className="hero-titles">
            {h.titles.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
          <p className="hero-statement">{h.statement}</p>
          <p className="hero-intro">{h.intro}</p>
          <div className="hero-actions">
            {cv.available ? (
              <a className="btn-gold" href={asset(cv.file)} download>
                <i className="bi bi-download" aria-hidden="true" /> {h.downloadCv}
              </a>
            ) : (
              <a className="btn-gold" href="#cv">
                <i className="bi bi-download" aria-hidden="true" /> {h.downloadCv}
              </a>
            )}
            <a className="btn-outline-light-custom" href="#contact">
              <i className="bi bi-chat-text" aria-hidden="true" /> {h.contactMe}
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            {photo ? (
              <img src={asset(photo)} alt={h.name} width="480" height="600" />
            ) : (
              <div className="portrait-placeholder" role="img" aria-label={h.photoPlaceholder}>
                <i className="bi bi-person" aria-hidden="true" />
                <span>{h.photoPlaceholder}</span>
              </div>
            )}
          </div>
          <div className="portrait-badge">
            <strong>{yearsOfExperience}</strong>
            <span>{t.about.yearsLabel}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
