import { useLang } from '../i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Expertise() {
  const { t } = useLang();
  const x = t.expertise;
  return (
    <section id="expertise" className="section section-navy" aria-labelledby="expertise-title">
      <div className="container">
        <SectionHeader id="expertise-title" eyebrow={x.eyebrow} title={x.title} light />
        <div className="expertise-grid">
          {x.items.map((item) => (
            <article className="expertise-item" key={item.title}>
              <i className={`bi ${item.icon}`} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
