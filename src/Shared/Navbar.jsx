import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { profile } from '../data/siteData';
import { MailIcon, SparkIcon } from '../components/Icons';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto mt-3 w-[min(1120px,calc(100%-1.5rem))] rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-white/12 bg-slate-950/72 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl'
            : 'border-white/8 bg-slate-950/42 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 sm:px-6">
          <Link to="/" className="min-w-0">
            <span className="block truncate text-base font-semibold tracking-[0.18em] text-white uppercase sm:text-lg">
              {profile.shortName}
            </span>
            <span className="hidden items-center gap-1 text-xs text-slate-400 sm:flex">
              <SparkIcon className="h-3.5 w-3.5" />
              Full Stack Portfolio
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/6 hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-400 via-orange-300 to-amber-200 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              <MailIcon className="h-4 w-4" />
              Hire Me
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full border border-white/10 p-2 text-white md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={mobileOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm transition ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-slate-300 hover:bg-white/6 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-400 via-orange-300 to-amber-200 px-4 py-3 text-center text-sm font-semibold text-slate-950"
              >
                <MailIcon className="h-4 w-4" />
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
