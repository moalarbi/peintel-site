import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const { language, messages, dir } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white" dir={dir}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{messages.footer.brand}</h3>
            <p className="text-gray-400">{messages.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`/${language}#services`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {messages.footer.links.services}
                </a>
              </li>
              <li>
                <a
                  href={`/${language}#projects`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {messages.footer.links.projects}
                </a>
              </li>
              <li>
                <a
                  href={`/${language}/contact`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {messages.footer.links.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">{messages.footer.social}</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">{messages.contact.phone}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{messages.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
