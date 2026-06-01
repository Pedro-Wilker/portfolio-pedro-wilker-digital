import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      titleKey:   'experience.qintess.title',
      companyKey: 'experience.qintess.company',
      locationKey:'experience.qintess.location',
      dateKey:    'experience.qintess.date',
      descKeys: [
        'experience.qintess.desc1',
        'experience.qintess.desc2',
        'experience.qintess.desc3',
        'experience.qintess.desc4',
      ],
      tech: ['React', 'Angular', 'Node.js', 'Python', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'Vite', 'GitLab'],
      current: true,
      accentClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    },
    {
      titleKey:   'experience.smart4.title',
      companyKey: 'experience.smart4.company',
      locationKey:'experience.smart4.location',
      dateKey:    'experience.smart4.date',
      descKeys: [
        'experience.smart4.desc1',
        'experience.smart4.desc2',
        'experience.smart4.desc3',
        'experience.smart4.desc4',
      ],
      tech: ['Java', 'Spring Boot', 'Angular', 'ZK', 'Python', 'TypeScript', 'MySQL'],
      current: false,
    },
    {
      titleKey:   'experience.freelancer.title',
      companyKey: 'experience.freelancer.company',
      locationKey:'experience.freelancer.location',
      dateKey:    'experience.freelancer.date',
      descKeys: [
        'experience.freelancer.desc1',
        'experience.freelancer.desc2',
        'experience.freelancer.desc3',
      ],
      tech: ['Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'TypeScript'],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-28 bg-secondary/20">
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
            02 — Experience
          </p>
          <div className="w-12 h-0.5 bg-gradient-primary rounded-full mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
            {t('experience.title')}
          </h2>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl border border-border/60 hover:border-primary/20 hover:shadow-glow transition-all duration-300 overflow-hidden">

                {/* Card top accent line for current role */}
                {exp.current && (
                  <div className="h-0.5 bg-gradient-primary w-full" />
                )}

                <div className="p-7 md:p-9">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mb-2">
                        {t(exp.titleKey)}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="flex items-center gap-1.5 text-primary font-semibold">
                          <Briefcase className="w-3.5 h-3.5" />
                          {t(exp.companyKey)}
                        </span>
                        <span className="text-border">·</span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {t(exp.locationKey)}
                        </span>
                        <span className="text-border">·</span>
                        <span className="flex items-center gap-1 text-muted-foreground font-mono text-xs">
                          <Calendar className="w-3 h-3" />
                          {t(exp.dateKey)}
                        </span>
                      </div>
                    </div>

                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {t('experience.present')}
                      </span>
                    )}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-7">
                    {exp.descKeys.map((descKey, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {t(descKey)}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/8 hover:bg-primary/15 border border-primary/15 hover:border-primary/30 text-primary rounded-full text-xs font-mono font-medium transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;