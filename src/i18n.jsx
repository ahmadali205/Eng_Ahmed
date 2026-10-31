import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import bootstrapLtr from 'bootstrap/dist/css/bootstrap.min.css?url';
import bootstrapRtl from 'bootstrap/dist/css/bootstrap.rtl.min.css?url';
import { content } from './content/profile.js';

const STORAGE_KEY = 'portfolio-lang';
const LanguageContext = createContext(null);

function readSavedLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'ar' || saved === 'en' ? saved : 'en';
  } catch {
    return 'en';
  }
}

// Swaps Bootstrap's LTR stylesheet for its official RTL build.
function useBootstrapDirection(dir) {
  useEffect(() => {
    let link = document.getElementById('bootstrap-css');
    if (!link) {
      link = document.createElement('link');
      link.id = 'bootstrap-css';
      link.rel = 'stylesheet';
      document.head.prepend(link);
    }
    link.href = dir === 'rtl' ? bootstrapRtl : bootstrapLtr;
  }, [dir]);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readSavedLang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  useBootstrapDirection(dir);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    document.title =
      lang === 'ar'
        ? 'أحمد علي | مهندس مدني · تخطيط وضبط تكاليف'
        : 'Ahmed Ali | Civil Engineer · Planning & Cost Control';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable: language still works for this visit */
    }
  }, [lang, dir]);

  const value = useMemo(
    () => ({ lang, dir, t: content[lang], toggle: () => setLang((l) => (l === 'en' ? 'ar' : 'en')) }),
    [lang, dir],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

// Turns a path from public/ into a URL that works under any base path.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
