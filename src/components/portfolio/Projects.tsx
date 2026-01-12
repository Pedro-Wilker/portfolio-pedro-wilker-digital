import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import artonbyteScreenshot from '@/assets/artonbyte-screenshot.png';
import artonbyteLogo from '@/assets/artonbyte-logo.jpg';
import casamentoScreenshot from '@/assets/casamento-screenshot.png';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: 'projects.artonbyte.title',
      descriptionKey: 'projects.artonbyte.description',
      screenshot: artonbyteScreenshot,
      logo: artonbyteLogo,
      url: 'https://artonbyte.com.br/',
      tech: [
        { name: 'TypeScript', percentage: 95.6 },
        { name: 'CSS', percentage: 3.2 },
      ],
      color: 'from-violet-500 to-purple-600',
    },
    {
      titleKey: 'projects.casamento.title',
      descriptionKey: 'projects.casamento.description',
      screenshot: casamentoScreenshot,
      url: 'https://casamentopedroelara.com.br/',
      tech: [
        { name: 'CSS', percentage: 47.8 },
        { name: 'JavaScript', percentage: 32.2 },
        { name: 'HTML', percentage: 20.0 },
      ],
      color: 'from-rose-400 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass rounded-3xl overflow-hidden hover:shadow-glow transition-all duration-500">
                {/* Screenshot */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.screenshot}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                  
                  {/* Logo if exists */}
                  {project.logo && (
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={project.logo}
                        alt={`${t(project.titleKey)} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t(project.descriptionKey)}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-3 mb-6">
                    {project.tech.map((tech, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-foreground">{tech.name}</span>
                          <span className="text-muted-foreground">{tech.percentage}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.percentage}%` }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${project.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-gradient-primary hover:opacity-90">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      {t('projects.viewProject')}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
