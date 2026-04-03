import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data/siteData';
import {
  ArrowUpRightIcon,
  BriefcaseIcon,
  FilterIcon,
  LayersIcon,
  ServerIcon,
  SparkIcon,
} from '../components/Icons';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'fullstack', name: 'Full Stack' },
];

const projectIcons = {
  briefcase: BriefcaseIcon,
  layers: LayersIcon,
  server: ServerIcon,
  spark: SparkIcon,
};

const MyProjects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projects;
    }

    return projects.filter((project) => project.category === filter);
  }, [filter]);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section className="section pb-20">
      <div className="shell">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="chip mb-4">
              <LayersIcon className="mr-2 h-3.5 w-3.5" />
              Project Case Studies
            </p>
            <h1 className="section-title">Real projects with clear product goals and polished presentation.</h1>
          </div>
          <p className="section-copy">
            Placeholder entries are gone. This section now highlights real projects with verified live links and repo-backed details.
          </p>
        </div>

        <div className="glass-panel mb-8 p-4">
          <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
            <FilterIcon className="h-4 w-4" />
            Filter By Category
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setFilter(category.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  filter === category.id
                    ? 'bg-white text-slate-950'
                    : 'bg-white/6 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass-panel overflow-hidden"
            >
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-[260px] overflow-hidden p-6 sm:p-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/15 to-transparent" />
                  <span className="inline-flex rounded-full bg-slate-950/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
                    {project.category}
                  </span>
                  <div className="mt-8 inline-flex rounded-2xl bg-slate-950/18 p-3 text-slate-950">
                    {(() => {
                      const Icon = projectIcons[project.icon];
                      return Icon ? <Icon className="h-6 w-6" /> : null;
                    })()}
                  </div>
                  <h2 className="mt-6 max-w-sm text-3xl font-bold text-slate-950">{project.title}</h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-900/80">{project.summary}</p>
                </div>

                <div className="space-y-6 p-6 sm:p-8">
                  <div>
                    <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {project.metrics?.map((metric) => (
                      <div key={metric.label} className="glass-panel-soft px-4 py-4">
                        <p className="text-2xl font-semibold text-white">{metric.value}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Pages Included</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.pages?.map((page) => (
                        <div key={page} className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm text-slate-300">
                          {page}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
                  >
                    <SparkIcon className="h-4 w-4" />
                    Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                    Live
                  </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/10 bg-slate-950/90 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
            >
              <div className="relative h-56 overflow-hidden p-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.accent} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/15 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-5 top-5 rounded-full bg-slate-950/35 px-3 py-2 text-sm font-semibold text-slate-950"
                >
                  Close
                </button>
                <span className="inline-flex rounded-full bg-slate-950/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
                  {selectedProject.category}
                </span>
                <div className="mt-5 inline-flex rounded-2xl bg-slate-950/18 p-3 text-slate-950">
                  {(() => {
                    const Icon = projectIcons[selectedProject.icon];
                    return Icon ? <Icon className="h-6 w-6" /> : null;
                  })()}
                </div>
                <h2 className="mt-6 text-3xl font-bold text-slate-950">{selectedProject.title}</h2>
              </div>

              <div className="space-y-8 p-8">
                <p className="text-sm leading-7 text-slate-300">{selectedProject.description}</p>

                <div>
                  <h3 className="mb-4 text-lg font-semibold text-white">Key Features</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedProject.features.map((feature) => (
                      <div key={feature} className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm text-slate-300">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold text-white">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-white/7 px-3 py-2 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950"
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                    View Repository
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-center text-sm font-semibold text-white"
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                    Open Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyProjects;
