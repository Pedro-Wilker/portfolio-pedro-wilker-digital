import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const socials = [
    { icon: Github,   href: 'https://github.com/Pedro-Wilker',           label: 'GitHub'   },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pedro-wilker/', label: 'LinkedIn' },
    { icon: Mail,     href: 'mailto:contato.pedrowilker@gmail.com',       label: 'Email'    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* ── Background: grid + ambient blobs ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* ── Left: copy ── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t('hero.greeting')}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold font-display leading-[0.95] tracking-tight mb-5"
            >
              Pedro{' '}
              <span className="text-gradient block lg:inline">Wilker</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium mb-5 tracking-tight"
            >
              {t('hero.role')}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base text-muted-foreground max-w-lg leading-relaxed mb-3"
            >
              {t('hero.description')}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center justify-center lg:justify-start gap-1.5 text-muted-foreground/70 text-sm mb-8"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Salvador, Bahia — Brasil
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity rounded-full px-7 font-semibold"
                asChild
              >
                <a href="#projects">{t('hero.cta')}</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-7 font-semibold" asChild>
                <a href="#contact">{t('hero.contact')}</a>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-25 animate-pulse-slow scale-110" />

            {/* Photo */}
            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px]">
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src={profileImage}
                    alt="Pedro Wilker"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating accent dots */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center"
            >
              <div className="w-3 h-3 rounded-full bg-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 w-7 h-7 rounded-full bg-accent/30 border border-accent/40"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;