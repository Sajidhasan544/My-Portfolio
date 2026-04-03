import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { contactCards, profile, socialLinks } from '../data/siteData';
import {
  ArrowUpRightIcon,
  FacebookIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SparkIcon,
  GithubIcon,
  LinkedinIcon,
} from '../components/Icons';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const contactIconMap = {
  mail: MailIcon,
  phone: PhoneIcon,
  map: MapPinIcon,
  spark: SparkIcon,
};

const socialIconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const messagePreview = useMemo(() => {
    const params = new URLSearchParams({
      subject: formData.subject || 'Portfolio Inquiry',
      body: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    });

    return `mailto:${profile.email}?${params.toString()}`;
  }, [formData.email, formData.message, formData.name, formData.subject]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    window.localStorage.setItem('portfolio-contact-draft', JSON.stringify(payload));
    window.location.href = messagePreview;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData(initialState);
    }, 500);
  };

  return (
    <section className="section pb-20">
      <div className="shell">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="chip mb-4">
              <MailIcon className="mr-2 h-3.5 w-3.5" />
              Contact
            </p>
            <h1 className="section-title">Let&apos;s make your portfolio or website feel more premium.</h1>
          </div>
          <p className="section-copy">
            Share your idea, redesign need, or collaboration plan. The form opens your email client
            and also keeps a local draft in the browser for convenience.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card, index) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="glass-panel h-full p-5"
              >
                <div className="icon-badge mb-4">
                  {(() => {
                    const Icon = contactIconMap[card.icon];
                    return Icon ? <Icon className="h-5 w-5" /> : null;
                  })()}
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{card.title}</p>
                <p className="mt-3 text-sm leading-6 text-white">{card.value}</p>
              </motion.div>
            );

            return card.href ? (
              <a key={card.title} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={card.title}>{content}</div>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel p-6 sm:p-8">
            <div className="icon-badge mb-4">
              <SparkIcon className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-white">Send a message</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Fill this out and your device will open an email draft addressed to me. That makes
              the section actually usable even without a backend setup.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-slate-300">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-white/25"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm text-slate-300">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-white/25"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block text-sm text-slate-300">
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-white/25"
                  placeholder="What do you need help with?"
                />
              </label>

              <label className="block text-sm text-slate-300">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-white/25"
                  placeholder="Tell me about your project, goals, and what you want improved."
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <MailIcon className="h-4 w-4" />
                  {isSubmitting ? 'Preparing draft...' : 'Open Email Draft'}
                </button>
                <a
                  href={messagePreview}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <ArrowUpRightIcon className="h-4 w-4" />
                  Preview Draft
                </a>
              </div>

              {submitStatus === 'success' && (
                <p className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  Your message draft was prepared and a local backup copy was saved in the browser.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass-panel p-6 sm:p-8">
              <div className="icon-badge mb-4">
                <SparkIcon className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Why work with me</p>
              <h2 className="mt-3 text-2xl font-bold text-white">Focused on clarity, speed, and details that feel intentional.</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>I can improve rough portfolio projects into something cleaner, smoother, and easier to trust visually.</p>
                <p>I care about spacing, typography, section flow, responsive behavior, and interactions that do not feel heavy.</p>
                <p>If you already have a project, I can refine both how it looks and how it behaves.</p>
              </div>
            </div>

            <div className="glass-panel p-6 sm:p-8">
              <div className="icon-badge mb-4">
                <ArrowUpRightIcon className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Social</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-center transition hover:bg-white/10"
                  >
                    <div className="mb-2 flex justify-center">
                      {(() => {
                        const Icon = socialIconMap[social.icon];
                        return Icon ? <Icon className="h-5 w-5 text-amber-100" /> : null;
                      })()}
                    </div>
                    <p className="text-sm font-semibold text-white">{social.name}</p>
                    <p className="mt-1 text-xs text-slate-400">{social.handle}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 sm:p-8">
              <div className="icon-badge mb-4">
                <MapPinIcon className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Direct Contact</p>
              <a href={`mailto:${profile.email}`} className="mt-4 block text-lg font-semibold text-white hover:text-amber-200">
                {profile.email}
              </a>
              <p className="mt-3 text-sm text-slate-400">{profile.location}</p>
              <p className="mt-2 text-sm text-slate-400">{profile.availability}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
