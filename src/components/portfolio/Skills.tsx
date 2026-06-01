import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Languages, Award, Code, Database, Globe, Server, Smartphone, Terminal, Cpu } from 'lucide-react';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      titleKey: 'skills.backend',
      labelNum: '—',
      skills: [
        { name: 'Java',        icon: Code     },
        { name: 'Spring Boot', icon: Server   },
        { name: 'Node.js',     icon: Terminal },
        { name: 'Python',      icon: Code     },
        { name: 'FastAPI',     icon: Cpu      },
        { name: 'Kafka',       icon: Server   },
        { name: 'RabbitMQ',   icon: Server   },
        { name: 'PostgreSQL',  icon: Database },
        { name: 'MySQL',       icon: Database },
        { name: 'Redis',       icon: Database },
      ],
    },
    {
      titleKey: 'skills.frontend',
      skills: [
        { name: 'React',        icon: Globe      },
        { name: 'Next.js',      icon: Globe      },
        { name: 'Angular',      icon: Globe      },
        { name: 'React Native', icon: Smartphone },
        { name: 'TypeScript',   icon: Code       },
        { name: 'Vite',         icon: Terminal   },
        { name: 'HTML5',        icon: Code       },
        { name: 'CSS3',         icon: Smartphone },
      ],
    },
    {
      titleKey: 'skills.devops',
      skills: [
        { name: 'Docker',          icon: Server   },
        { name: 'Git',             icon: Terminal },
        { name: 'GitLab CI/CD',    icon: Terminal },
        { name: 'GitHub Actions',  icon: Terminal },
        { name: 'Linux',           icon: Terminal },
        { name: 'ZK Framework',    icon: Globe    },
      ],
    },
  ];

  const certifications = [
    { name: 'Networking Basics',                    issuer: 'Cisco' },
    { name: 'Desenvolvimento Web Completo',         issuer: 'Udemy' },
    { name: 'Algoritmos e Lógica de Programação',   issuer: 'Udemy' },
  ];

  const languages = [
    { flag: '🇧🇷', nameKey: 'skills.portuguese', levelLabel: 'Native',       pct: 100 },
    { flag: '🇺🇸', nameKey: 'skills.english',    levelLabel: 'Intermediate', pct: 72  },
    { flag: '🇪🇸', nameKey: 'Español',           levelLabel: 'Basic',        pct: 30  },
  ];

  return (
    <section id="skills" className="py-28">
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
            05 — Skills
          </p>
          <div className="w-12 h-0.5 bg-gradient-primary rounded-full mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
            {t('skills.title')}
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-14">

          {/* ── Skill categories ── */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
              viewport={{ once: true }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-sm font-mono font-semibold text-muted-foreground tracking-widest uppercase">
                  {t(category.titleKey)}
                </h3>
                <div className="flex-1 h-px bg-border/60" />
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: skillIndex * 0.04 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    className="glass flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/60 hover:border-primary/25 hover:shadow-glow transition-all cursor-default group"
                  >
                    <skill.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* ── Languages + Certifications ── */}
          <div className="grid md:grid-cols-2 gap-7 pt-4">

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-border/60 hover:border-primary/20 transition-colors"
            >
              <h3 className="text-lg font-bold font-display mb-7 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Languages className="w-4 h-4 text-primary" />
                </div>
                {t('skills.languages')}
              </h3>

              <div className="space-y-6">
                {languages.map(({ flag, nameKey, levelLabel, pct }) => (
                  <div key={nameKey}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground flex items-center gap-2">
                        <span className="text-lg">{flag}</span>
                        {nameKey.startsWith('skills.') ? t(nameKey) : nameKey}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{levelLabel}</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-border/60 hover:border-primary/20 transition-colors"
            >
              <h3 className="text-lg font-bold font-display mb-7 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                {t('skills.certifications')}
              </h3>

              <ul className="space-y-1">
                {certifications.map(({ name, issuer }, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;