import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PlaceholderMedia } from '@/components/PlaceholderMedia';
import { QuoteModal } from '@/components/QuoteModal';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
}

const projects: Project[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  description: 'Professional renovation project showcasing our expertise and attention to detail',
  category: ['interior', 'exterior', 'flooring'][i % 3],
}));

export default function Projects() {
  const { messages, dir } = useLanguage();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-950">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {messages.projects.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {messages.projects.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-lg mb-4 relative">
                    <PlaceholderMedia aspectRatio="projects" label={project.title} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <button className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
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
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{messages.cta.description}</p>
              <button onClick={() => setQuoteModalOpen(true)} className="btn-primary">
                {messages.cta.button}
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" dir={dir}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-slate-900">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <PlaceholderMedia aspectRatio="projects" label={selectedProject.title} />
              <div className="mt-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProject.description}</p>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setQuoteModalOpen(true);
                  }}
                  className="btn-primary w-full"
                >
                  {messages.header.cta}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
