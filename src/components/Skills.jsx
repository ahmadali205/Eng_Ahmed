import { useLang } from '../i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

const AREA_KEYS = ['plan', 'cost', 'design', 'report'];

export default function Skills() {
  const { t } = useLang();
  const s = t.skills;
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader id="skills-title" eyebrow={s.eyebrow} title={s.title} text={s.note} />
        <div className="area-legend" aria-hidden="true">
          {AREA_KEYS.map((k) => (
            <span key={k} className={`area-chip area-${k}`}>
              <i /> {s.areas[k]}
            </span>
          ))}
        </div>
        {s.groups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3 className="skill-group-title">{group.title}</h3>
            <div className="row g-3">
              {group.items.map((item) => (
                <div className="col-sm-6 col-lg-4" key={item.name}>
                  <article className="skill-card">
                    <span className="icon-tile"><i className={`bi ${item.icon}`} aria-hidden="true" /></span>
                    <div className="skill-text">
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
                      <ul className="skill-areas" aria-label={s.note}>
                        {AREA_KEYS.map((k) => (
                          <li key={k} className={`area-${k}${item.areas.includes(k) ? ' is-on' : ''}`}>
                            <span className="visually-hidden">
                              {item.areas.includes(k) ? s.areas[k] : ''}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
