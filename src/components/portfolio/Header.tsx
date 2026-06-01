import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.about',      href: '#about' },
    { key: 'nav.experience', href: '#experience' },
    { key: 'nav.education',  href: '#education' },
    { key: 'nav.projects',   href: '#projects' },
    { key: 'nav.skills',     href: '#skills' },
    { key: 'nav.contact',    href: '#contact' },
  ];

  const toggleLanguage = () =>
    setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-card border-b border-border/60 py-3'
          : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 group"
        >
          <span className="text-xl font-bold font-display tracking-tight text-foreground">
            Pedro<span className="text-gradient">.</span>
          </span>
        </motion.a>

        {/* Desktop nav */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-7"
        >
          {navItems.map((item, i) => (
            <motion.a
              key={item.key}
              href={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t(item.key)}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-xs font-medium"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'pt-BR' ? 'EN' : 'PT'}
            </Button>

            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 border border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              {t('nav.contact')}
            </a>
          </div>
        </motion.nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-xs">
            <Globe className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2.5 border-b border-border/40 last:border-0"
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;