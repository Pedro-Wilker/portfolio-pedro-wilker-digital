import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      titleKey: 'experience.qintess.title',
      companyKey: 'experience.qintess.company',
      locationKey: 'experience.qintess.location',
      dateKey: 'experience.qintess.date',
      descKeys: [
        'experience.qintess.desc1',
        'experience.qintess.desc2',
        'experience.qintess.desc3',
        'experience.qintess.desc4',
      ],
      tech: ['React', 'Angular', 'Node.js', 'Python', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'Vite', 'GitLab'],
      current: true,
    },
    {
      titleKey: 'experience.smart4.title',
      companyKey: 'experience.smart4.company',
      locationKey: 'experience.smart4.location',
      dateKey: 'experience.smart4.date',
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
      titleKey: 'experience.freelancer.title',
      companyKey: 'experience.freelancer.company',
      locationKey: 'experience.freelancer.location',
      dateKey: 'experience.freelancer.date',
      descKeys: [
        'experience.freelancer.desc1',
        'experience.freelancer.desc2',
        'experience.freelancer.desc3',
      ],
      tech: ['Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'TypeScript', 'GitLab'],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              
              {/* Timeline Dot */}
              <div className={`absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full ${
                exp.current ? 'bg-gradient-primary animate-pulse' : 'bg-primary'
              }`} />

              <div className="glass p-6 md:p-8 rounded-2xl hover:shadow-glow transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {t(exp.titleKey)}
                    </h3>
                    <p className="text-primary font-medium flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4" />
                      {t(exp.companyKey)}
                    </p>
                  </div>
                  {exp.current && (
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                      {t('experience.present')}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {t(exp.locationKey)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {t(exp.dateKey)}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.descKeys.map((descKey, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {t(descKey)}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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
