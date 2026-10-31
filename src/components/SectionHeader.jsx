export default function SectionHeader({ eyebrow, title, text, light = false, id }) {
  return (
    <header className={`section-header${light ? ' is-light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {text && <p className="section-lead">{text}</p>}
    </header>
  );
}
