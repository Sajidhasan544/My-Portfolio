import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/sajid.png';
import { profile, skillGroups, timeline } from '../data/siteData';
import {
  BriefcaseIcon,
  CheckIcon,
  LayersIcon,
  PaletteIcon,
  ServerIcon,
  SparkIcon,
} from '../components/Icons';

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const skillIcons = {
  palette: PaletteIcon,
  server: ServerIcon,
  layers: LayersIcon,
};

const Aboutme = () => {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="chip mb-4">
              <SparkIcon className="mr-2 h-3.5 w-3.5" />
              About Me
            </p>
            <h2 className="section-title">Building clean products with a calm, modern feel.</h2>
          </div>
          <p className="section-copy">
            I enjoy turning ideas into interfaces that look premium, work smoothly on every screen,
            and stay maintainable as the project grows.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            variants={cardMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="glass-panel p-6 sm:p-8"
          >
            <div className="relative mx-auto max-w-sm">
              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-rose-300/30 via-transparent to-teal-300/20 blur-2xl"
              />
              <img
                src={profileImage}
                alt={profile.name}
                className="relative h-[360px] w-full rounded-[32px] object-cover object-top"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-center">
                  <p className="text-xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={cardMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8">
              <div className="icon-badge mb-4">
                <BriefcaseIcon className="h-5 w-5" />
              </div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Who I am</p>
              <h3 className="mt-3 text-2xl font-bold text-white">{profile.title} based in {profile.location}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{profile.intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {profile.highlights.map((item) => (
                  <div key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
                    <span className="inline-flex items-center gap-2">
                      <CheckIcon className="h-3.5 w-3.5 text-amber-200" />
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="glass-panel p-6">
                <p className="mb-5 text-sm uppercase tracking-[0.24em] text-slate-400">Skills</p>
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.title} className="rounded-2xl border border-white/8 bg-slate-950/30 p-4">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="icon-badge h-9 w-9 rounded-xl">
                          {(() => {
                            const Icon = skillIcons[group.icon];
                            return Icon ? <Icon className="h-4 w-4" /> : null;
                          })()}
                        </span>
                        <h4 className="text-sm font-semibold text-white">{group.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6">
                <div className="icon-badge mb-4">
                  <LayersIcon className="h-5 w-5" />
                </div>
                <p className="mb-5 text-sm uppercase tracking-[0.24em] text-slate-400">Journey</p>
                <div className="space-y-4">
                  {timeline.map((item) => (
                    <div key={item.period} className="border-l border-white/12 pl-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-amber-200">{item.period}</p>
                      <h4 className="mt-2 text-sm font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
