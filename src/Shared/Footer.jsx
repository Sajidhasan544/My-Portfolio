import React from 'react';
import { Link } from 'react-router-dom';
import { profile, socialLinks } from '../data/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 py-8">
      <div className="shell">
        <div className="glass-panel grid gap-8 px-6 py-8 md:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <p className="chip mb-4">Portfolio</p>
            <h3 className="mb-3 text-2xl font-bold text-white">{profile.name}</h3>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Clean visuals, smooth interactions, and practical frontend-backend work
              are the core of how I build.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Explore
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/projects" className="hover:text-white">Projects</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Connect
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <a href={`mailto:${profile.email}`} className="block hover:text-white">
                {profile.email}
              </a>
              <p>{profile.location}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-white/20 hover:bg-white/6 hover:text-white"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 px-2 pt-5 text-xs text-slate-500 sm:flex-row">
          <p>{currentYear} {profile.name}. Crafted with React and Tailwind CSS.</p>
          <p>Designed to be responsive, smooth, and easy to explore.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
