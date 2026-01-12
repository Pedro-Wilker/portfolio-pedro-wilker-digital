import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Languages, Award, Code, Database, Globe, Server, Smartphone, Terminal } from 'lucide-react';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      titleKey: 'skills.backend',
      skills: [
        { name: 'Java', icon: Code },
        { name: 'Spring Boot', icon: Server },
        { name: 'Node.js', icon: Terminal },
        { name: 'Python', icon: Code },
        { name: 'PostgreSQL', icon: Database },
        { name: 'MySQL', icon: Database },
      ],
    },
    {
      titleKey: 'skills.frontend',
      skills: [
        { name: 'Angular', icon: Globe },
        { name: 'React', icon: Globe },
        { name: 'Next.js', icon: Globe },
        { name: 'TypeScript', icon: Code },
        { name: 'Vite', icon: Terminal },
        { name: 'HTML5', icon: Code },
        { name: 'CSS3', icon: Smartphone },
      ],
    },
    {
      titleKey: 'skills.devops',
      skills: [
        { name: 'Docker', icon: Server },
        { name: 'Git', icon: Terminal },
        { name: 'GitLab', icon: Terminal },
        { name: 'Linux', icon: Terminal },
      ],
    },
  ];

  const certifications = [
    'Networking Basics: Cisco',
    'Desenvolvimento Web: Jorge Santana',
    'Algoritmos e Lógica de Programação: Nelio Alves',
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">{t(category.titleKey)}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="glass p-4 rounded-2xl text-center hover:shadow-glow transition-all cursor-default"
                  >
                    <skill.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <p className="text-sm font-medium text-foreground">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Languages className="w-6 h-6 text-primary" />
                {t('skills.languages')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🇧🇷</span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{t('skills.portuguese')}</p>
                    <div className="h-2 bg-secondary rounded-full mt-2"><div className="h-full w-full bg-gradient-primary rounded-full" /></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🇺🇸</span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{t('skills.english')}</p>
                    <div className="h-2 bg-secondary rounded-full mt-2"><div className="h-full w-3/4 bg-gradient-primary rounded-full" /></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                {t('skills.certifications')}
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    {cert}
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
