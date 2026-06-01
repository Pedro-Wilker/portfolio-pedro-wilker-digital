import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-28 bg-secondary/20">
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
            03 — Education
          </p>
          <div className="w-12 h-0.5 bg-gradient-primary rounded-full mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
            {t('education.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl border border-border/60 hover:border-primary/20 hover:shadow-glow transition-all duration-300 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-0.5 bg-gradient-primary w-full" />

            {/* Ambient decoration */}
            <div className="relative p-8 md:p-12">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-primary opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

              <div className="relative flex flex-col md:flex-row items-start gap-8">

                {/* Icon */}
                <div className="w-18 h-18 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1 space-y-5">
                  {/* Degree & university */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-1">
                      {t('education.degree')}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-2">
                      {t('education.university')}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {t('education.date')}
                    </p>
                  </div>

                  {/* GPA badge */}
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-sm">
                      <Award className="w-4 h-4" />
                      {t('education.gpa')}
                    </span>
                  </div>

                  {/* Highlight box */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-primary font-medium text-sm flex items-start gap-2">
                      <Award className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {t('education.highlight')}
                    </p>
                  </div>

                  {/* Subjects */}
                  <div className="pt-1 space-y-2">
                    <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Disciplinas / Subjects
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('education.subjects')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;