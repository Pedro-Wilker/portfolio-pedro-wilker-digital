import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useLanguage();

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Pedro-Wilker',
      username: '@Pedro-Wilker',
      description: 'Source code & projects',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pedro-wilker/',
      username: 'pedro-wilker',
      description: 'Professional network',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:contato@pedrowilker.dev',
      username: 'contato@pedrowilker.dev',
      description: 'Direct contact',
    },
  ];

  return (
    <section id="contact" className="py-28 bg-secondary/20">
      <div className="container mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            06 — Contact
          </p>
          <div className="w-12 h-0.5 bg-gradient-primary rounded-full mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">

          {/* ── Headline + copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-display text-gradient leading-tight mb-4">
              {t('contact.subtitle')}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t('contact.description')}
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              Salvador, Bahia — Brasil
            </div>
          </motion.div>

          {/* ── Contact cards ── */}
          <div className="grid sm:grid-cols-3 gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="glass p-6 rounded-2xl border border-border/60 hover:border-primary/25 hover:shadow-glow transition-all group flex flex-col items-start gap-4"
              >
                {/* Icon + arrow */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-11 h-11 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                    <link.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Text */}
                <div>
                  <h4 className="font-bold font-display text-foreground mb-0.5">{link.label}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{link.description}</p>
                  <p className="text-xs text-primary/80 font-mono truncate">{link.username}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;