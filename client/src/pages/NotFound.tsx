import React from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">Page not found</p>
        <button
          onClick={() => navigate('/fr')}
          className="btn-primary"
        >
          Go back home
        </button>
      </motion.div>
    </div>
  );
}
