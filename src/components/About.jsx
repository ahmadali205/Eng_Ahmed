import { useLang, asset } from '../i18n.jsx';
import { yearsOfExperience, workPhoto } from '../content/profile.js';
import SectionHeader from './SectionHeader.jsx';

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-7">
            <SectionHeader id="about-title" eyebrow={a.eyebrow} title={a.title} />
            <div className="prose">
              {a.summary.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <aside className="about-card">
              {workPhoto && (
                <img className="about-photo" src={asset(workPhoto)} alt={a.workPhotoAlt} width="960" height="960" loading="lazy" />
              )}
              <div className="about-years">
                <strong>{yearsOfExperience}</strong>
                <span>{a.yearsLabel}</span>
              </div>
              <h3>{a.strengthsTitle}</h3>
              <ul className="check-list">
                {a.strengths.map((s) => (
                  <li key={s}>
                    <i className="bi bi-check2" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
