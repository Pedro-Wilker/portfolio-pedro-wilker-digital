import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useLanguage();

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Pedro-Wilker',
      username: '@Pedro-Wilker',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pedro-wilker/',
      username: 'Pedro Wilker',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:contato@pedrowilker.dev',
      username: 'contato@pedrowilker.dev',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-gradient">
            {t('contact.subtitle')}
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            {t('contact.description')}
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
            <MapPin className="w-5 h-5" />
            <span>Salvador, Bahia - Brasil</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl text-center hover:shadow-glow transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <link.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-foreground mb-1">{link.label}</h4>
                <p className="text-sm text-muted-foreground">{link.username}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
