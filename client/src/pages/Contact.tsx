import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuoteModal } from '@/components/QuoteModal';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '33774555311';

export default function Contact() {
  const { messages, dir } = useLanguage();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(messages.contact.description);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950" dir={dir}>
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-950">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {messages.contact.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {messages.contact.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{messages.contact.phone}</p>
                <button
                  onClick={handleWhatsAppClick}
                  className="btn-primary w-full"
                >
                  {messages.contact.whatsapp}
                </button>
              </motion.div>

              {/* Quote Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{messages.quote.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {messages.cta.description}
                </p>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="btn-primary w-full"
                >
                  {messages.header.cta}
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {messages.cta.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {messages.cta.description}
              </p>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="btn-primary"
              >
                {messages.cta.button}
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
