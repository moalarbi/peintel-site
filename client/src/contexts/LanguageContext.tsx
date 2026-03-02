import React, { createContext, useContext, useState, useEffect } from 'react';
import frMessages from '@/messages/fr.json';
import enMessages from '@/messages/en.json';
import arMessages from '@/messages/ar.json';

type Language = 'fr' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  messages: typeof frMessages;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const messages: Record<Language, typeof frMessages> = {
  fr: frMessages,
  en: enMessages,
  ar: arMessages,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get language from URL or localStorage
    const path = window.location.pathname;
    const pathLang = path.split('/')[1] as Language;
    
    if (pathLang && ['fr', 'en', 'ar'].includes(pathLang)) {
      setLanguageState(pathLang);
      localStorage.setItem('language', pathLang);
    } else {
      const saved = localStorage.getItem('language') as Language | null;
      if (saved && ['fr', 'en', 'ar'].includes(saved)) {
        setLanguageState(saved);
      }
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Navigate to the new language path
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    
    if (['fr', 'en', 'ar'].includes(pathParts[0])) {
      pathParts[0] = lang;
    } else {
      pathParts.unshift(lang);
    }
    
    window.location.href = '/' + pathParts.join('/');
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const currentMessages = messages[language];

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, messages: currentMessages, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
