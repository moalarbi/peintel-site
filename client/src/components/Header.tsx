import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onQuoteClick: () => void;
  onNavClick?: (section: string) => void;
}

export function Header({ onQuoteClick, onNavClick }: HeaderProps) {
  const { language, setLanguage, messages, dir } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setMobileMenuOpen(false);
    onNavClick?.(section);
  };

  const languages: Array<'fr' | 'en' | 'ar'> = ['fr', 'en', 'ar'];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-md" dir={dir}>
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href={`/${language}`} className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            {messages.header.logo}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href={`/${language}#services`}
            onClick={() => handleNavClick('services')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
          >
            {messages.header.nav.services}
          </a>
          <a
            href={`/${language}#projects`}
            onClick={() => handleNavClick('projects')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
          >
            {messages.header.nav.projects}
          </a>
          <a
            href={`/${language}/contact`}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
          >
            {messages.header.nav.contact}
          </a>
        </nav>

        {/* Language Switcher & CTA */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex gap-2 border-r border-gray-200 dark:border-gray-700 pr-4">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 text-sm font-semibold rounded transition-colors ${
                  language === lang
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <button
            onClick={onQuoteClick}
            className="hidden md:block btn-primary text-sm"
          >
            {messages.header.cta}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="container py-4 flex flex-col gap-4">
            <a
              href={`/${language}#services`}
              onClick={() => handleNavClick('services')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {messages.header.nav.services}
            </a>
            <a
              href={`/${language}#projects`}
              onClick={() => handleNavClick('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {messages.header.nav.projects}
            </a>
            <a
              href={`/${language}/contact`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {messages.header.nav.contact}
            </a>
            <button
              onClick={onQuoteClick}
              className="btn-primary text-sm w-full"
            >
              {messages.header.cta}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
