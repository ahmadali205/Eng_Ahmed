import { useLang, asset } from '../i18n.jsx';
import { cv } from '../content/profile.js';

export default function CvSection() {
  const { t } = useLang();
  const c = t.cv;
  return (
    <section id="cv" className="section section-cv" aria-labelledby="cv-title">
      <div className="container">
        <div className="cv-panel">
          <span className="cv-icon"><i className="bi bi-file-earmark-pdf" aria-hidden="true" /></span>
          <div className="cv-copy">
            <span className="eyebrow">{c.eyebrow}</span>
            <h2 id="cv-title">{c.title}</h2>
            <p>{c.text}</p>
          </div>
          {cv.available ? (
            <a className="btn-gold" href={asset(cv.file)} download>
              <i className="bi bi-download" aria-hidden="true" /> {c.button}
            </a>
          ) : (
            <div className="cv-missing" role="note">
              <strong>
                <i className="bi bi-exclamation-circle" aria-hidden="true" /> {c.missingTitle}
              </strong>
              <p>{c.missingText}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
