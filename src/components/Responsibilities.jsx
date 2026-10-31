import { useLang } from '../i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Responsibilities() {
  const { t } = useLang();
  const r = t.responsibilities;
  return (
    <section id="responsibilities" className="section" aria-labelledby="resp-title">
      <div className="container">
        <SectionHeader id="resp-title" eyebrow={r.eyebrow} title={r.title} />
        <div className="row g-4">
          {r.groups.map((g) => (
            <div className="col-md-6" key={g.title}>
              <article className="resp-card">
                <div className="resp-head">
                  <span className="icon-tile"><i className={`bi ${g.icon}`} aria-hidden="true" /></span>
                  <h3>{g.title}</h3>
                </div>
                <ul>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
