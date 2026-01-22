'use client';
import React from 'react';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills, className, index }: { title: string; skills: string[]; className?: string; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`p-6 rounded-2xl bg-zinc-50 border border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800 transition-all hover:border-[#059669]/50 hover:shadow-lg hover:shadow-[#059669]/5 ${className}`}
  >
    <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, idx) => (
        <li key={idx} className="flex items-center text-zinc-600 dark:text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#059669] mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

export const Skills = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="section-blob bg-[#059669] -bottom-20 -right-20 opacity-10"></div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10 text-zinc-900 dark:text-zinc-100 flex items-center"
      >
        <span className="w-8 h-1 bg-[#059669] mr-4 rounded-full"></span>
        Specialized Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        <SkillCard 
          index={0}
          title="Web Development" 
          skills={portfolioData.skills.web} 
          className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-emerald-50/30 dark:from-zinc-900 dark:to-emerald-900/10"
        />
        <SkillCard index={1} title="Mobile App" skills={portfolioData.skills.mobile} />
        <SkillCard index={2} title="Internet of Things" skills={portfolioData.skills.IoT} />
        <SkillCard index={3} title="Artificial Intelligence" skills={portfolioData.skills.ai} />
        <SkillCard index={4} title="Game Development" skills={portfolioData.skills.game} />
        <SkillCard index={5} title="Databases" skills={portfolioData.skills.databases} />
        <SkillCard index={6} title="Tools & DevOps" skills={portfolioData.skills.tools} />
        <SkillCard index={7} title="Soft Skills" skills={portfolioData.skills.soft} />
      </div>
    </section>
  );
};