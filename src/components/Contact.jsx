import { useState } from 'react';
import { useLang } from '../i18n.jsx';
import { contact } from '../content/profile.js';
import SectionHeader from './SectionHeader.jsx';

function CopyButton({ value, labels }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    } catch {
      /* clipboard blocked: the value stays selectable on screen */
    }
  };
  return (
    <button type="button" className="copy-btn" onClick={copy}>
      <i className={`bi ${done ? 'bi-check2' : 'bi-copy'}`} aria-hidden="true" /> {done ? labels.copied : labels.copy}
    </button>
  );
}

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }
    const subject = `Portfolio enquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}${form.company ? `\n${form.company}` : ''}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('opened');
  };

  const rows = [
    { key: 'email', icon: 'bi-envelope', label: c.email, value: contact.email, href: `mailto:${contact.email}` },
    {
      key: 'whatsapp',
      icon: 'bi-whatsapp',
      label: c.whatsapp,
      value: contact.whatsappDisplay,
      href: `https://wa.me/${contact.whatsappNumber}`,
    },
    {
      key: 'linkedin',
      icon: 'bi-linkedin',
      label: c.linkedin,
      value: contact.linkedin || c.linkedinMissing,
      href: contact.linkedin || null,
      placeholder: !contact.linkedin,
    },
    { key: 'location', icon: 'bi-geo-alt', label: c.location, value: c.locationValue },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <SectionHeader id="contact-title" eyebrow={c.eyebrow} title={c.title} text={c.text} />
            <ul className="contact-list">
              {rows.map((row) => (
                <li key={row.key}>
                  <span className="icon-tile"><i className={`bi ${row.icon}`} aria-hidden="true" /></span>
                  <div className="contact-value">
                    <span>{row.label}</span>
                    {row.href ? (
                      <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" dir="ltr">
                        {row.value}
                      </a>
                    ) : (
                      <b className={row.placeholder ? 'placeholder-text' : ''}>{row.value}</b>
                    )}
                  </div>
                  {(row.key === 'email' || row.key === 'whatsapp') && <CopyButton value={row.value} labels={c} />}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-7">
            <form className="contact-form" onSubmit={submit} noValidate>
              <h3>{c.form.title}</h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="cf-name" className="form-label">{c.form.name}</label>
                  <input id="cf-name" className="form-control" value={form.name} onChange={update('name')} autoComplete="name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="cf-email" className="form-label">{c.form.email}</label>
                  <input id="cf-email" type="email" className="form-control" value={form.email} onChange={update('email')} autoComplete="email" required dir="ltr" />
                </div>
                <div className="col-12">
                  <label htmlFor="cf-company" className="form-label">{c.form.company}</label>
                  <input id="cf-company" className="form-control" value={form.company} onChange={update('company')} autoComplete="organization" />
                </div>
                <div className="col-12">
                  <label htmlFor="cf-message" className="form-label">{c.form.message}</label>
                  <textarea id="cf-message" className="form-control" rows="5" value={form.message} onChange={update('message')} required />
                </div>
              </div>
              <p className="form-note">
                <i className="bi bi-info-circle" aria-hidden="true" /> {c.form.note}
              </p>
              <div aria-live="polite">
                {status === 'error' && <p className="form-status is-error">{c.form.required}</p>}
                {status === 'opened' && <p className="form-status">{c.form.opened}</p>}
              </div>
              <button type="submit" className="btn-gold">
                <i className="bi bi-envelope-arrow-up" aria-hidden="true" /> {c.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
