import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profileImage from '../assets/sajid.png';
import Aboutme from './Aboutme';
import { profile, projects, socialLinks } from '../data/siteData';
import {
  ArrowUpRightIcon,
  CheckIcon,
  CodeIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  RocketIcon,
  SparkIcon,
} from '../components/Icons';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const socialIconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
};

const Home = () => {
  const featuredProject = projects[0];

  return (
    <div>
      <section className="section pt-10 sm:pt-16">
        <div className="shell">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          >
            <div>
              <motion.p variants={item} className="chip mb-5">
                <SparkIcon className="mr-2 h-3.5 w-3.5" />
                Available For Work
              </motion.p>
              <motion.h1 variants={item} className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Designing bold, smooth, and clean web experiences with better visual rhythm.
              </motion.h1>
              <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {profile.tagline} I care about the details that make a site feel elegant,
                responsive, and memorable.
              </motion.p>

              <motion.div variants={item} className="mt-6 accent-line max-w-xl" />

              <motion.div variants={item} className="mt-6 grid gap-3 sm:grid-cols-2">
                {profile.highlights.slice(0, 2).map((point) => (
                  <div key={point} className="glass-panel-soft flex items-center gap-3 px-4 py-3">
                    <span className="icon-badge h-9 w-9 rounded-xl">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <p className="text-sm text-slate-200">{point}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-400 via-orange-300 to-amber-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  View Projects
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <RocketIcon className="h-4 w-4" />
                  Let&apos;s Talk
                </Link>
              </motion.div>

              <motion.div variants={item} className="mt-10 grid gap-3 sm:grid-cols-3">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="glass-panel-soft px-5 py-4">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={item} className="relative">
              <motion.div
                animate={{ rotate: [0, 4, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-rose-300/20 via-transparent to-teal-300/20 blur-3xl"
              />
              <div className="glass-panel relative overflow-hidden p-4 sm:p-6">
                <div className="absolute inset-x-6 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                  <div className="overflow-hidden rounded-[28px] bg-slate-900/70">
                    <img
                      src={profileImage}
                      alt={profile.name}
                      className="h-[420px] w-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                      <div className="icon-badge mb-4">
                        <CodeIcon className="h-5 w-5" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Name</p>
                      <h2 className="mt-2 text-2xl font-bold text-white">{profile.name}</h2>
                      <p className="mt-2 text-sm text-slate-300">{profile.title}</p>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                      <div className="icon-badge mb-4">
                        <SparkIcon className="h-5 w-5" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Focus</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {profile.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-1 text-amber-200">
                              <CheckIcon className="h-4 w-4" />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((social) => {
                        const Icon = socialIconMap[social.icon];
                        return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300 transition hover:bg-white/8 hover:text-white"
                        >
                          {Icon ? <Icon className="h-4 w-4" /> : null}
                          {social.name}
                        </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Aboutme />

      <section className="section">
        <div className="shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="chip mb-4">
                <RocketIcon className="mr-2 h-3.5 w-3.5" />
                Featured Project
              </p>
              <h2 className="section-title">A real project spotlight from my recent work.</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-amber-200 transition hover:text-white">
              See full case study
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.45 }}
            className="glass-panel overflow-hidden"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[240px] overflow-hidden p-6 sm:p-8">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredProject.accent} opacity-65`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/15 to-transparent" />
                <span className="inline-flex rounded-full bg-slate-950/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
                  {featuredProject.category}
                </span>
                <div className="mt-8 max-w-sm">
                  <h3 className="text-3xl font-bold text-slate-950">{featuredProject.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-900/80">
                    Live healthcare platform focused on trust, services, appointments, and patient onboarding.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm leading-7 text-slate-300">{featuredProject.summary}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {featuredProject.metrics?.map((metric) => (
                    <div key={metric.label} className="glass-panel-soft px-4 py-4">
                      <p className="text-2xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/7 px-3 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="section pb-20">
        <div className="shell">
          <div className="glass-panel overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="chip mb-4">
                  <SparkIcon className="mr-2 h-3.5 w-3.5" />
                  Let&apos;s Build
                </p>
                <h2 className="section-title">Need a portfolio, business site, or product UI that feels sharper?</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  I can help turn a basic layout into something more premium, smoother, and more
                  practical for real users.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  <RocketIcon className="h-4 w-4" />
                  Start a Conversation
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MailIcon className="h-4 w-4" />
                  Email Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
