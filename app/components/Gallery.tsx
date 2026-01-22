'use client';
import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

type Project = typeof portfolioData.projects[0];

export const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative py-20">
      <div className="section-blob bg-[#0284c7] bottom-0 left-0 opacity-10"></div>
      <div className="section-blob bg-[#d97706] top-0 right-0 opacity-10"></div>

      {/* Achievements Section */}
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10 text-zinc-900 dark:text-zinc-100 flex items-center"
      >
        <span className="w-8 h-1 bg-[#d97706] mr-4 rounded-full"></span>
        Achievements
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 relative z-10">
        {portfolioData.achievements.map((ach, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-white border border-zinc-200 shadow-sm hover:border-[#d97706]/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all dark:bg-zinc-900 dark:border-zinc-800"
          >
             <div className="text-sm text-[#d97706] mb-2 uppercase tracking-wider font-semibold">{ach.result}</div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{ach.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">{ach.event}</p>
            <p className="text-zinc-500 text-xs leading-relaxed">{ach.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Projects Section */}
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10 text-zinc-900 dark:text-zinc-100 flex items-center"
      >
        <span className="w-8 h-1 bg-[#0284c7] mr-4 rounded-full"></span>
        Featured Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {portfolioData.projects.map((project, index) => (
          <motion.div 
            key={index} 
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer rounded-xl overflow-hidden border border-zinc-200 bg-white hover:border-[#0284c7]/50 hover:shadow-xl hover:shadow-sky-500/5 transition-all dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
               <img 
                 src={project.thumbnail} 
                 alt={project.title} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-medium">Click to view details</span>
               </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                 <span className="text-xs font-semibold text-[#0284c7] uppercase tracking-wide">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[#0284c7] transition-colors">{project.title}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" 
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-48 bg-gradient-to-r from-sky-500 to-indigo-600 relative">
                <img src={selectedProject.thumbnail} alt="" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
              </div>
              
              <div className="p-8 -mt-12 bg-white dark:bg-zinc-900 rounded-t-3xl relative">
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-300 text-xs font-bold mb-4 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">{selectedProject.title}</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-widest">Description</h4>
                      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-widest">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-xs font-semibold border border-zinc-200 dark:border-zinc-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-sky-50 dark:bg-sky-900/10 rounded-2xl border border-sky-100 dark:border-sky-900/30">
                      <h4 className="text-xs font-bold text-sky-600 dark:text-sky-400 mb-1 uppercase tracking-widest">Outcome</h4>
                      <p className="text-zinc-700 dark:text-zinc-300 italic">{selectedProject.outcome}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                      <button 
                          onClick={() => setSelectedProject(null)}
                          className="px-8 py-3 bg-[#0284c7] text-white rounded-xl hover:bg-sky-700 transition-all shadow-lg shadow-sky-500/20 text-sm font-bold"
                      >
                          Close Details
                      </button>
                  </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
