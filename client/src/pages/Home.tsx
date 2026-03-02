import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PlaceholderMedia } from '@/components/PlaceholderMedia';
import { QuoteModal } from '@/components/QuoteModal';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const { messages, dir } = useLanguage();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>();

  const openQuoteModal = (service?: string) => {
    setPreselectedService(service);
    setQuoteModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950" dir={dir}>
      <Header onQuoteClick={() => openQuoteModal()} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-950">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {messages.hero.headline}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {messages.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => openQuoteModal()} className="btn-primary">
                    {messages.hero.cta1}
                  </button>
                  <a href="#services" className="btn-outline">
                    {messages.hero.cta2}
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <PlaceholderMedia aspectRatio="hero-desktop" label="Hero Image" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {messages.benefits.title}
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {messages.benefits.items.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {messages.about.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">{messages.about.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {messages.services.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">{messages.services.subtitle}</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {messages.services.items.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="service-card overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <PlaceholderMedia aspectRatio="service-card" label={service.name} />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{service.shortDescription}</p>
                    <div className="flex gap-3">
                      <button className="flex-1 btn-outline text-sm">{messages.serviceDetail.cta}</button>
                      <button
                        onClick={() => openQuoteModal(service.name)}
                        className="flex-1 btn-primary text-sm"
                      >
                        {messages.quote.submit}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {messages.beforeAfter.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">{messages.beforeAfter.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <PlaceholderMedia aspectRatio="before-after" label="Before/After" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ul className="space-y-4">
                  {messages.beforeAfter.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {messages.process.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">{messages.process.subtitle}</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {messages.process.steps.map((step, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-blue-600 dark:bg-blue-900 text-white">
          <div className="container">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              {messages.stats.items.map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <p className="text-blue-100">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Preview Section */}
        <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {messages.projects.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">{messages.projects.subtitle}</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <motion.div key={index} variants={itemVariants} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <PlaceholderMedia aspectRatio="projects" label={`Project ${index + 1}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Project {index + 1}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Professional renovation project showcasing our expertise</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                    Learn more <ArrowRight size={16} />
                  </a>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a href="#" className="btn-primary">
                {messages.projects.viewAll}
              </a>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{messages.cta.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{messages.cta.description}</p>
              <button onClick={() => openQuoteModal()} className="btn-primary">
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
        preselectedService={preselectedService}
      />
    </div>
  );
}
