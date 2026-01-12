import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('education.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass p-8 md:p-12 rounded-3xl hover:shadow-glow transition-shadow relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {t('education.degree')}
                  </h3>
                  <p className="text-xl text-primary font-medium mb-2">
                    {t('education.university')}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {t('education.date')}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-4 py-2 bg-accent/20 text-accent rounded-full font-semibold flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {t('education.gpa')}
                    </span>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-xl mb-6">
                    <p className="text-primary font-medium flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      {t('education.highlight')}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center gap-2 text-foreground">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Disciplinas / Subjects
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
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
