import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt-BR' | 'en-US';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  'pt-BR': {
    // Navigation
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.education': 'Formação',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Desenvolvedor Full Stack',
    'hero.description': 'Bacharel em Ciência da Computação com experiência na construção de sistemas web escaláveis, pipelines de automação de dados e soluções empresariais para setores públicos e privados.',
    'hero.cta': 'Ver Projetos',
    'hero.contact': 'Entre em Contato',
    
    // About
    'about.title': 'Sobre Mim',
    'about.description': 'Sou um Desenvolvedor Full Stack com mais de 3 anos de experiência trabalhando em sistemas empresariais e governamentais focados em processamento de dados, automação e plataformas transacionais de alto volume.',
    'about.highlight1': 'Trabalhei em projetos que lidam com conjuntos de dados em larga escala, APIs RESTful, dashboards e sistemas de gestão utilizados por dezenas de municípios e instituições públicas.',
    'about.highlight2': 'Isso inclui soluções que processam mais de 74.000 transações mensais para o sistema da Carteira de Identidade Nacional (CIN).',
    'about.highlight3': 'Minha experiência combina arquitetura backend, design de APIs e desenvolvimento frontend moderno, sempre focado em performance, confiabilidade e manutenibilidade.',
    
    // Experience
    'experience.title': 'Experiência Profissional',
    'experience.present': 'Presente',
    'experience.qintess.title': 'Analista de Desenvolvimento Junior',
    'experience.qintess.company': 'Qintess',
    'experience.qintess.location': 'Salvador - Presencial',
    'experience.qintess.date': 'Jul 2025 - Presente',
    'experience.qintess.desc1': 'Desenvolvimento de aplicações web para automação e tratamento de dados institucionais.',
    'experience.qintess.desc2': 'Criação de sistema em Angular + Node.js que automatizou o cadastro de dados dos 417 municípios da Bahia referentes ao SAC.',
    'experience.qintess.desc3': 'Identificação de divergências de aprox. 140% entre dados manuais (Excel) e registros reais.',
    'experience.qintess.desc4': 'Implementação de soluções que processam mais de 74 mil atendimentos por mês da CIN.',
    
    'experience.smart4.title': 'Desenvolvedor Full Stack Junior',
    'experience.smart4.company': 'Smart4 Sistemas',
    'experience.smart4.location': 'Salvador - Remoto',
    'experience.smart4.date': 'Fev 2023 - Jul 2025',
    'experience.smart4.desc1': 'Desenvolvimento e manutenção de sistemas web e mobile voltados à gestão pública.',
    'experience.smart4.desc2': 'Implementação de módulos de licitações, tributos, RH e serviços à população, utilizados em mais de 60 municípios.',
    'experience.smart4.desc3': 'Desenvolvimento de aplicações completas com Java, Spring Boot, Angular, ZK, Python, TypeScript e MySQL.',
    'experience.smart4.desc4': 'Contribuição para a digitalização de processos municipais e redução de tempo em atividades administrativas.',
    
    'experience.freelancer.title': 'Desenvolvedor Full Stack',
    'experience.freelancer.company': 'Freelancer',
    'experience.freelancer.location': 'Salvador - Remoto',
    'experience.freelancer.date': 'Fev 2024 - Jan 2025',
    'experience.freelancer.desc1': 'Desenvolvimento de soluções personalizadas e escaláveis.',
    'experience.freelancer.desc2': 'Camaleão dos Sabores: criação de app e sistema web para gestão de restaurantes.',
    'experience.freelancer.desc3': 'TensOportunidades: plataforma web para conexão entre prestadores de serviços e clientes.',
    
    // Education
    'education.title': 'Formação Acadêmica',
    'education.degree': 'Bacharelado em Ciência da Computação',
    'education.university': 'Centro Universitário Jorge Amado - UNIJORGE',
    'education.date': 'Jul 2020 - Dez 2024',
    'education.gpa': 'GPA: 8.5/10',
    'education.highlight': 'Melhor curso entre todas as instituições de ensino Privadas do estado da Bahia',
    'education.subjects': 'Geometria Analítica, Álgebra Linear, Matemática Discreta, SO, Estrutura de Dados, Redes de Computadores, BD, Estatística Aplicada, Teoria dos Grafos, POO, Modelagem Computacional, Arquitetura de Computadores.',
    
    // Projects
    'projects.title': 'Projetos',
    'projects.viewProject': 'Ver Projeto',
    'projects.artonbyte.title': 'Art on Byte',
    'projects.artonbyte.description': 'Website moderno e responsivo desenvolvido para uma empresa de tecnologia, com design elegante e experiência de usuário otimizada.',
    'projects.casamento.title': 'Casamento Pedro e Lara',
    'projects.casamento.description': 'Website de casamento elegante e interativo com RSVP, galeria de fotos e informações do evento.',
    
    // Skills
    'skills.title': 'Habilidades',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.devops': 'DevOps & Ferramentas',
    'skills.languages': 'Idiomas',
    'skills.certifications': 'Certificações',
    'skills.portuguese': 'Português - Nativo',
    'skills.english': 'Inglês - Intermediário',
    
    // Contact
    'contact.title': 'Contato',
    'contact.subtitle': 'Vamos trabalhar juntos!',
    'contact.description': 'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!',
  },
  'en-US': {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.role': 'Full Stack Developer',
    'hero.description': 'Computer Science graduate with experience building scalable web systems, data automation pipelines and enterprise solutions for public and private sectors.',
    'hero.cta': 'View Projects',
    'hero.contact': 'Get in Touch',
    
    // About
    'about.title': 'About Me',
    'about.description': 'I am a Full Stack Developer with 3+ years of experience working on enterprise and government systems focused on data processing, automation and high-volume transactional platforms.',
    'about.highlight1': 'I have worked on projects that handle large-scale datasets, RESTful APIs, dashboards and management systems used by dozens of municipalities and public institutions.',
    'about.highlight2': 'This includes solutions processing more than 74,000 monthly transactions for the National ID system (CIN).',
    'about.highlight3': 'My background combines backend architecture, API design, and modern frontend development, always focused on performance, reliability and maintainability.',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.present': 'Present',
    'experience.qintess.title': 'Junior Development Analyst',
    'experience.qintess.company': 'Qintess',
    'experience.qintess.location': 'Salvador - On-site',
    'experience.qintess.date': 'Jul 2025 - Present',
    'experience.qintess.desc1': 'Development of web applications for automation and institutional data processing.',
    'experience.qintess.desc2': 'Creation of Angular + Node.js system that automated data registration for 417 municipalities in Bahia regarding SAC.',
    'experience.qintess.desc3': 'Identification of approx. 140% divergence between manual data (Excel) and real records.',
    'experience.qintess.desc4': 'Implementation of solutions processing over 74 thousand CIN services per month.',
    
    'experience.smart4.title': 'Junior Full Stack Developer',
    'experience.smart4.company': 'Smart4 Sistemas',
    'experience.smart4.location': 'Salvador - Remote',
    'experience.smart4.date': 'Feb 2023 - Jul 2025',
    'experience.smart4.desc1': 'Development and maintenance of web and mobile systems for public management.',
    'experience.smart4.desc2': 'Implementation of bidding, tax, HR and population services modules, used in over 60 municipalities.',
    'experience.smart4.desc3': 'Development of complete applications with Java, Spring Boot, Angular, ZK, Python, TypeScript and MySQL.',
    'experience.smart4.desc4': 'Contribution to the digitization of municipal processes and reduction of time in administrative activities.',
    
    'experience.freelancer.title': 'Full Stack Developer',
    'experience.freelancer.company': 'Freelancer',
    'experience.freelancer.location': 'Salvador - Remote',
    'experience.freelancer.date': 'Feb 2024 - Jan 2025',
    'experience.freelancer.desc1': 'Development of customized and scalable solutions.',
    'experience.freelancer.desc2': 'Camaleão dos Sabores: creation of app and web system for restaurant management.',
    'experience.freelancer.desc3': 'TensOportunidades: web platform for connecting service providers and clients.',
    
    // Education
    'education.title': 'Education',
    'education.degree': 'Bachelor in Computer Science',
    'education.university': 'Centro Universitário Jorge Amado - UNIJORGE',
    'education.date': 'Jul 2020 - Dec 2024',
    'education.gpa': 'GPA: 8.5/10',
    'education.highlight': 'Best course among all Private educational institutions in the state of Bahia',
    'education.subjects': 'Analytical Geometry, Linear Algebra, Discrete Mathematics, OS, Data Structures, Computer Networks, Databases, Applied Statistics, Graph Theory, OOP, Computational Modeling, Computer Architecture.',
    
    // Projects
    'projects.title': 'Projects',
    'projects.viewProject': 'View Project',
    'projects.artonbyte.title': 'Art on Byte',
    'projects.artonbyte.description': 'Modern and responsive website developed for a technology company, with elegant design and optimized user experience.',
    'projects.casamento.title': 'Pedro & Lara Wedding',
    'projects.casamento.description': 'Elegant and interactive wedding website with RSVP, photo gallery and event information.',
    
    // Skills
    'skills.title': 'Skills',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.devops': 'DevOps & Tools',
    'skills.languages': 'Languages',
    'skills.certifications': 'Certifications',
    'skills.portuguese': 'Portuguese - Native',
    'skills.english': 'English - Intermediate',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Let's work together!",
    'contact.description': "I'm always open to new opportunities and interesting projects. Get in touch!",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
