import { useState } from 'react';
import { useLang } from '../i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

// Start and end of each dated role, in years (month / 12), for the schedule bar.
// Roles without dates (like the current one) are listed but not drawn.
const RANGES = {
  pm: [2022 + 10 / 12, 2024 + 5 / 12],
  site: [2020 + 3 / 12, 2021 + 7 / 12],
  civil: [2019 + 1 / 12, 2020 + 1 / 12],
  structural: [2015 + 9 / 12, 2016 + 11 / 12],
};
const FROM = 2015;
const TO = 2025;
const YEARS = Array.from({ length: TO - FROM + 1 }, (_, i) => FROM + i);
const pct = (y) => ((y - FROM) / (TO + 1 - FROM)) * 100;

export default function Experience() {
  const { t } = useLang();
  const e = t.experience;
  const [openId, setOpenId] = useState(e.items[0].id);

  return (
    <section id="experience" className="section section-tint" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader id="experience-title" eyebrow={e.eyebrow} title={e.title} text={e.hint} />

        <div className="schedule" role="group" aria-label={e.title}>
          <div className="schedule-years" aria-hidden="true">
            {YEARS.map((y) => (
              <span key={y}>{y}</span>
            ))}
          </div>
          <div className="schedule-track">
            {e.items
              .filter((item) => RANGES[item.id])
              .map((item) => {
                const [start, end] = RANGES[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`schedule-bar${openId === item.id ? ' is-selected' : ''}`}
                    style={{ insetInlineStart: `${pct(start)}%`, width: `${pct(end) - pct(start)}%` }}
                    onClick={() => setOpenId(item.id)}
                    title={`${item.role} · ${item.dates}`}
                  >
                    <span className="visually-hidden">
                      {item.role}, {item.dates}
                    </span>
                  </button>
                );
              })}
          </div>
        </div>

        <ol className="timeline">
          {e.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id} className={`timeline-item${isOpen ? ' is-open' : ''}${item.current ? ' is-current' : ''}`}>
                <span className="timeline-dot" aria-hidden="true" />
                <button
                  type="button"
                  className="timeline-head"
                  aria-expanded={isOpen}
                  aria-controls={`role-${item.id}`}
                  onClick={() => setOpenId(isOpen ? '' : item.id)}
                >
                  <span className="timeline-dates">{item.dates}</span>
                  <span className="timeline-role">{item.role}</span>
                  <span className="timeline-meta">
                    {item.company ? <span className="timeline-company">{item.company}</span> : <span className="placeholder-text">{e.companyPlaceholder}</span>}
                    <span aria-hidden="true"> · </span>
                    {item.context}
                  </span>
                  <i className="bi bi-chevron-down timeline-chevron" aria-hidden="true" />
                </button>
                <div id={`role-${item.id}`} className="timeline-body" hidden={!isOpen}>
                  <ul>
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
