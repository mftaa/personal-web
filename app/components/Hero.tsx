'use client';
import React from 'react';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] py-20 gap-10 overflow-hidden">
      <div className="section-blob bg-primary -top-20 -left-20"></div>
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex flex-col items-start space-y-6 z-10"
      >
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Hello, I'm <span className="text-primary">{portfolioData.personal.name}</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium text-zinc-700 dark:text-zinc-300">
          {portfolioData.personal.role}
        </h2>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {portfolioData.personal.subHeadline}
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href={portfolioData.personal.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
          >
            GitHub
          </a>
          <a
            href={portfolioData.personal.contact.email}
            className="px-6 py-3 rounded-full border-2 border-zinc-200 text-zinc-900 font-medium hover:border-primary hover:text-primary transition-colors dark:border-zinc-800 dark:text-zinc-100 dark:hover:border-primary dark:hover:text-primary"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full blur-2xl transform translate-x-4 translate-y-4 "></div>
          <img
            src={portfolioData.personal.avatar}
            alt={portfolioData.personal.name}
            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-zinc-900 shadow-md"
          />
        </div>
      </motion.div>
    </section>
  );
};
