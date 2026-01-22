'use client';
import React from 'react';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';

export const Timeline = () => {
  return (
    <section className="relative py-20 border-t border-zinc-100 dark:border-zinc-800 overflow-hidden">
      <div className="section-blob bg-[#e11d48] top-1/2 -left-40 opacity-10"></div>
      
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 text-zinc-900 dark:text-zinc-100 flex items-center"
      >
        <span className="w-8 h-1 bg-[#e11d48] mr-4 rounded-full"></span>
        Experience & Organizations
      </motion.h2>
      
      <div className="space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-200 pl-4 border-l-2 border-[#e11d48]">Professional</h3>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 sm:pl-32 py-2 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-zinc-200 dark:before:bg-zinc-800 sm:before:ml-[8.5rem] self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#e11d48] after:border-4 after:box-content after:border-white dark:after:border-zinc-900 after:rounded-full sm:after:ml-[8.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <span className="sm:absolute left-0 top-1 text-sm font-medium text-zinc-500 sm:w-32 mb-2 sm:mb-0">{exp.period}</span>
                  <div className="flex-1 bg-white/50 dark:bg-white/5 p-4 rounded-xl border border-transparent hover:border-rose-500/20 transition-colors">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h4>
                    <p className="text-[#e11d48] font-medium">{exp.company}</p>
                    <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-200 pl-4 border-l-2 border-[#e11d48]">Organization</h3>
          <div className="space-y-8">
             {portfolioData.organizations.map((org, index) => (
              <div key={index} className="relative pl-8 sm:pl-32 py-2 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-zinc-200 dark:before:bg-zinc-800 sm:before:ml-[8.5rem] self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#e11d48] after:border-4 after:box-content after:border-white dark:after:border-zinc-900 after:rounded-full sm:after:ml-[8.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <span className="sm:absolute left-0 top-1 text-sm font-medium text-zinc-500 sm:w-32 mb-2 sm:mb-0">{org.period}</span>
                  <div className="flex-1 bg-white/50 dark:bg-white/5 p-4 rounded-xl border border-transparent hover:border-rose-500/20 transition-colors">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{org.role}</h4>
                    <p className="text-[#e11d48] font-medium">{org.name}</p>
                    <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{org.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
