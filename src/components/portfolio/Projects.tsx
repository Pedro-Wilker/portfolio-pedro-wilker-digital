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
      titleKey:       'projects.artonbyte.title',
      descriptionKey: 'projects.artonbyte.description',
      screenshot:     artonbyteScreenshot,
      logo:           artonbyteLogo,
      url:            'https://artonbyte.com.br/',
      tech: [
        { name: 'TypeScript', percentage: 95.6 },
        { name: 'CSS',        percentage: 3.2  },
      ],
      gradient: 'from-violet-500 to-purple-600',
      accentFrom: 'rgba(139,92,246,0.15)',
      accentTo:   'rgba(124,58,237,0.05)',
    },
    {
      titleKey:       'projects.casamento.title',
      descriptionKey: 'projects.casamento.description',
      screenshot:     casamentoScreenshot,
      url:            'https://casamentopedroelara.com.br/',
      tech: [
        { name: 'CSS',        percentage: 47.8 },
        { name: 'JavaScript', percentage: 32.2 },
        { name: 'HTML',       percentage: 20.0 },
      ],
      gradient: 'from-rose-400 to-pink-500',
      accentFrom: 'rgba(251,113,133,0.15)',
      accentTo:   'rgba(236,72,153,0.05)',
    },
  ];

  return (
    <section id="projects" className="py-28 bg-secondary/20">
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
            04 — Projects
          </p>
          <div className="w-12 h-0.5 bg-gradient-primary rounded-full mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
            {t('projects.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="glass rounded-3xl overflow-hidden border border-border/60 hover:border-primary/20 hover:shadow-glow transition-all duration-500 flex flex-col h-full"
              >
                {/* Screenshot with overlay on hover */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.screenshot}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />

                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
                  />

                  {/* Bottom fade for readability */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/60 to-transparent" />

                  {/* Logo badge */}
                  {project.logo && (
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl overflow-hidden shadow-lg border border-white/10">
                      <img
                        src={project.logo}
                        alt={`${t(project.titleKey)} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Live badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white/80 text-[10px] font-mono font-medium tracking-wider">LIVE</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {t(project.descriptionKey)}
                  </p>

                  {/* Language bars */}
                  <div className="space-y-3 mb-7">
                    <p className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase mb-3">
                      Language Breakdown
                    </p>
                    {project.tech.map((tech, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-foreground font-mono">{tech.name}</span>
                          <span className="text-muted-foreground">{tech.percentage}%</span>
                        </div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.percentage}%` }}
                            transition={{ duration: 1.1, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${project.gradient} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA — pushed to bottom */}
                  <div className="mt-auto">
                    <Button
                      asChild
                      className="w-full bg-gradient-primary hover:opacity-90 rounded-xl font-semibold"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        {t('projects.viewProject')}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
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

export default Projects;