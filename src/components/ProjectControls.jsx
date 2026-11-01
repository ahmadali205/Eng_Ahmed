import { useLang, asset } from '../i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

// Illustrative S-curves (cumulative %), not real project data.
const W = 520;
const H = 300;
const PAD = { l: 44, r: 16, t: 16, b: 34 };
const planned = [0, 2, 6, 12, 21, 32, 45, 58, 70, 80, 88, 94, 98, 100];
const actual = [0, 1, 4, 9, 17, 27, 38, 50, 61];
const x = (i) => PAD.l + (i / (planned.length - 1)) * (W - PAD.l - PAD.r);
const y = (v) => PAD.t + (1 - v / 100) * (H - PAD.t - PAD.b);
const path = (arr) => arr.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');

function SCurve({ labels }) {
  const dd = actual.length - 1;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="scurve" role="img" aria-label={labels.chartCaption}>
      {[0, 25, 50, 75, 100].map((v) => (
        <g key={v}>
          <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} className="sc-grid" />
          <text x={PAD.l - 8} y={y(v) + 4} className="sc-axis" textAnchor="end">
            {v}%
          </text>
        </g>
      ))}
      <path d={path(planned)} className="sc-planned" />
      <path d={`${path(actual)} L${x(dd)},${y(0)} L${x(0)},${y(0)} Z`} className="sc-area" />
      <path d={path(actual)} className="sc-actual" />
      <line x1={x(dd)} x2={x(dd)} y1={PAD.t} y2={H - PAD.b} className="sc-datadate" />
      <circle cx={x(dd)} cy={y(actual[dd])} r="5" className="sc-dot" />
      <text x={x(dd) + 6} y={H - PAD.b + 22} className="sc-axis">
        {labels.dataDate}
      </text>
    </svg>
  );
}

export default function ProjectControls() {
  const { t, dir, lang } = useLang();
  const c = t.controls;
  return (
    <section id="controls" className="section section-navy" aria-labelledby="controls-title">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <SectionHeader id="controls-title" eyebrow={c.eyebrow} title={c.title} text={c.text} light />
            <figure className="scurve-card">
              {/* Charts read left-to-right in both languages, like P6 */}
              <div dir="ltr">
                <SCurve labels={c} />
              </div>
              <figcaption dir={dir}>
                <span className="legend-line is-planned" /> {c.planned}
                <span className="legend-line is-actual" /> {c.actual}
                <small>{c.chartCaption}</small>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-6">
            <ul className="controls-list">
              {c.items.map((item) => (
                <li key={item.title}>
                  <span className="icon-tile is-dark"><i className={`bi ${item.icon}`} aria-hidden="true" /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="tool-cta">
              <span className="icon-tile is-dark"><i className="bi bi-speedometer2" aria-hidden="true" /></span>
              <div>
                <h3>{c.toolTitle}</h3>
                <p>{c.toolText}</p>
                <a className="btn-gold" href={`${asset('tools/project-health-check/')}#${lang}`}>
                  {c.toolCta} <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
