import { Code2, Database, Globe, Server } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Server,   value: '3+',    label: 'Years Experience'       },
    { icon: Database, value: '260K+', label: 'Monthly Transactions'   },
    { icon: Globe,    value: '60+',   label: 'Municipalities'         },
    { icon: Code2,    value: '417',   label: 'Cities Automated'       },
  ];

  return (
    <section id="about" className="py-28 relative">
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
            01 — About
          </p>
          <div className="w-12 h-0.5 bg-gradient-primary rounded-full mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">{t('about.description')}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('about.highlight1')}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('about.highlight2')}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('about.highlight3')}</p>

            {/* Availability badge */}
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Open to Full Stack &amp; Backend opportunities
              </span>
            </div>
          </motion.div>

          {/* ── Right: stats grid ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="glass p-7 rounded-2xl hover:shadow-glow transition-all cursor-default border border-border/60 hover:border-primary/25"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-4xl font-bold font-display text-gradient leading-none mb-2">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;