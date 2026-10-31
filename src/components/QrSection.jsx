import { useState } from 'react';
import { useLang, asset } from '../i18n.jsx';
import { qr, siteUrl } from '../content/profile.js';

export default function QrSection() {
  const { t } = useLang();
  const q = t.qr;
  const [msg, setMsg] = useState('');

  const flash = (text) => {
    setMsg(text);
    setTimeout(() => setMsg(''), 2500);
  };

  const copy = async (fallbackText = q.copied) => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      flash(fallbackText);
    } catch {
      flash(siteUrl);
    }
  };

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: t.hero.name, text: q.text, url: siteUrl });
        return;
      } catch (err) {
        if (err?.name === 'AbortError') return;
      }
    }
    copy(q.shareFallback);
  };

  return (
    <section id="qr" className="section section-navy" aria-labelledby="qr-title">
      <div className="container">
        <div className="qr-panel">
          <div className="qr-code">
            <img src={asset(qr.svg)} alt={q.alt} width="320" height="320" />
          </div>
          <div className="qr-copy">
            <span className="eyebrow">{q.eyebrow}</span>
            <h2 id="qr-title">{q.title}</h2>
            <p>{q.text}</p>
            <p className="qr-url" dir="ltr">{siteUrl}</p>
            <div className="qr-actions">
              <a className="btn-gold" href={asset(qr.png)} download="Ahmed-Ali-Portfolio-QR.png">
                <i className="bi bi-download" aria-hidden="true" /> {q.png}
              </a>
              <a className="btn-outline-light-custom" href={asset(qr.svg)} download="Ahmed-Ali-Portfolio-QR.svg">
                <i className="bi bi-filetype-svg" aria-hidden="true" /> {q.svg}
              </a>
              <a className="btn-outline-light-custom" href={asset(qr.card)} download="Ahmed-Ali-QR-Card.pdf">
                <i className="bi bi-printer" aria-hidden="true" /> {q.card}
              </a>
              <button type="button" className="btn-outline-light-custom" onClick={share}>
                <i className="bi bi-share" aria-hidden="true" /> {q.share}
              </button>
              <button type="button" className="btn-outline-light-custom" onClick={() => copy()}>
                <i className="bi bi-link-45deg" aria-hidden="true" /> {q.copy}
              </button>
            </div>
            <p className="qr-status" aria-live="polite">{msg}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
