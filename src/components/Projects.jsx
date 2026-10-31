import { useCallback, useEffect, useRef, useState } from 'react';
import { useLang, asset } from '../i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

const thumb = (path) => path.replace(/\.jpg$/, '-sm.jpg');

function Lightbox({ images, index, onClose, onMove, labels, title }) {
  const closeRef = useRef(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(document.dir === 'rtl' ? -1 : 1);
      if (e.key === 'ArrowLeft') onMove(document.dir === 'rtl' ? 1 : -1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onMove]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={asset(images[index])} alt={`${title} ${index + 1}/${images.length}`} />
        <figcaption>
          {title} · {index + 1} / {images.length}
        </figcaption>
      </figure>
      <button ref={closeRef} type="button" className="lb-btn lb-close" onClick={onClose} aria-label={labels.close}>
        <i className="bi bi-x-lg" aria-hidden="true" />
      </button>
      <button type="button" className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); onMove(-1); }} aria-label={labels.prev}>
        <i className="bi bi-chevron-left" aria-hidden="true" />
      </button>
      <button type="button" className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); onMove(1); }} aria-label={labels.next}>
        <i className="bi bi-chevron-right" aria-hidden="true" />
      </button>
    </div>
  );
}

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const [viewer, setViewer] = useState(null); // { project, index }

  const close = useCallback(() => setViewer(null), []);
  const move = useCallback(
    (step) =>
      setViewer((v) => v && { ...v, index: (v.index + step + v.project.images.length) % v.project.images.length }),
    [],
  );

  return (
    <section id="projects" className="section section-tint" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader id="projects-title" eyebrow={p.eyebrow} title={p.title} />
        <div className="row g-4">
          {p.items.map((project, i) => {
            const hasImages = project.images.length > 0;
            return (
              <div className={i === 0 ? 'col-12' : 'col-md-6 col-lg-4'} key={project.id}>
                <article className={`project-card${i === 0 ? ' is-featured' : ''}`}>
                  <div className="project-media">
                    {hasImages ? (
                      <button
                        type="button"
                        className="project-media-btn"
                        onClick={() => setViewer({ project, index: 0 })}
                        aria-label={`${p.gallery}: ${project.name}`}
                      >
                        <img src={asset(thumb(project.images[0]))} alt={project.name} loading="lazy" width="800" height="450" />
                        <span className="project-count">
                          <i className="bi bi-images" aria-hidden="true" /> {project.images.length}
                        </span>
                      </button>
                    ) : (
                      <div className="project-placeholder">
                        <i className="bi bi-image" aria-hidden="true" />
                        <span>{p.imagePlaceholder}</span>
                      </div>
                    )}
                  </div>
                  <div className="project-body">
                    <p className="project-location">
                      <i className="bi bi-geo-alt" aria-hidden="true" /> {project.location}
                    </p>
                    <h3>{project.name}</h3>
                    <p className="project-role">
                      <span>{p.roleLabel}:</span> {project.role}
                    </p>
                    <p className="project-text">{project.text}</p>
                    {hasImages && project.images.length > 1 && (
                      <div className="project-thumbs">
                        {project.images.slice(1).map((img, j) => (
                          <button
                            type="button"
                            key={img}
                            onClick={() => setViewer({ project, index: j + 1 })}
                            aria-label={`${project.name} ${j + 2}`}
                          >
                            <img src={asset(thumb(img))} alt="" loading="lazy" width="160" height="90" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
      {viewer && (
        <Lightbox
          images={viewer.project.images}
          index={viewer.index}
          title={viewer.project.name}
          onClose={close}
          onMove={move}
          labels={p}
        />
      )}
    </section>
  );
}
