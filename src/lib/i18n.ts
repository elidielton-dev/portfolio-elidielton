export type Locale = "pt" | "en";

const shared = {
  firstName: "Elidielton",
  fullName: "Elidielton Rodrigues",
  email: "elidieltonr@gmail.com",
  github: "https://github.com/elidielton-dev",
  linkedin: "https://www.linkedin.com/in/elidielton-rodrigues",
  hardSkills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Java",
    "HTML",
    "CSS",
    "PostgreSQL",
    "Python",
    "Git",
    "Docker",
    "Vercel",
  ],
};

export const content = {
  pt: {
    ...shared,
    location: "Custódia - PE",
    navAbout: "Sobre mim",
    navProjects: "Projetos",
    openGithub: "Abrir github",
    openLinkedin: "Abrir linkedin",
    languageLabel: "Português",
    languages: {
      pt: "Português",
      en: "English",
    },
    heroGreeting: "Olá, eu me chamo Elidielton Rodrigues",
    heroTitle: "Desenvolvedor\nFullstack",
    intro:
      "Sou um desenvolvedor que gosta de criar aplicações reais, complexas e desafiadoras. Desde backend seguros e escaláveis até interfaces modernas e intuitivas.",
    seeProjects: "Veja meus projetos",
    aboutCta: "Sobre mim",
    stats: [
      { key: "commits", label: "Commits", value: "421" },
      { key: "prs", label: "Pull Requests", value: "0" },
      { key: "coffee", label: "Copos de café", value: "210" },
    ],
    aboutTitle: "Um pouco sobre mim e minha trajetória na programação",
    about: [
      "Curso Análise e Desenvolvimento de Sistemas (3º período) na AESA — CESA e construo projetos web com TypeScript, React, Java e bancos relacionais. Comecei com HTML, CSS e JavaScript e venho evoluindo para stacks modernas fullstack.",
      "No GitHub publico apps como o NorFood (delivery/omnichannel), Abelha & Mel, Belíssima e Sertão Replay, além de sistemas em Java como o ControlMoney. Meu objetivo é criar produtos úteis, bem estruturados e com boa experiência para quem usa.",
    ],
    projectsTitle: "Meus projetos",
    projectLabel: "Projeto",
    code: "Código",
    demo: "Demo",
    hardSkillsTitle: "Hard Skills",
    softSkillsTitle: "Soft Skills",
    softSkills: [
      {
        key: "learn",
        title: "Aprendizado contínuo",
        description: "Estudo e prática constantes para evoluir na stack e entregar melhor.",
      },
      {
        key: "communication",
        title: "Comunicação",
        description: "Explico ideias com clareza para usuário, equipe e quem precisa da solução.",
      },
      {
        key: "proactivity",
        title: "Proatividade",
        description: "Antecipo problemas, proponho caminhos e sigo até fechar a demanda.",
      },
      {
        key: "team",
        title: "Trabalho em equipe",
        description: "Colaboro no dia a dia, divido contexto e ajudo o time a avançar.",
      },
      {
        key: "organization",
        title: "Organização",
        description: "Priorizo tarefas, mantenho o fluxo claro e cumpro o que foi combinado.",
      },
      {
        key: "support",
        title: "Suporte ao usuário",
        description: "Atendo com paciência, registro o chamado e busco resolver de verdade.",
      },
    ],
    contributionsTitle: "Contribuições",
    contributionsLoading: "Carregando…",
    contributionsCount: "{count} no último ano",
    contributionsStreak: "{count} dias de sequência",
    contributionsLess: "Menos",
    contributionsMore: "Mais",
    contributionsError: "Não foi possível carregar o gráfico agora. Veja no",
    contributionsOpen: "Abrir contribuições no GitHub",
    contributionsNone: "Nenhuma contribuição em {date}",
    contributionsOne: "1 contribuição em {date}",
    contributionsMany: "{count} contribuições em {date}",
    experienceTitle: "Minha experiência",
    projects: [
      {
        number: "01",
        title: "NorFood",
        description:
          "Plataforma de delivery e atendimento omnichannel com painel, loja, pedidos e integração WhatsApp. Stack TypeScript moderna com foco em operação real de restaurantes.",
        tech: ["TypeScript", "React", "Next.js", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com/elidielton-dev/NorFood",
        live: "https://norfood.vercel.app/",
        accent: "from-orange-500 via-rose-600 to-zinc-950",
      },
      {
        number: "02",
        title: "Abelha & Mel",
        description:
          "Confeitaria artesanal com catálogo, categorias e vitrine de pedidos. Interface em TypeScript focada em uma experiência doce, clara e fácil de usar.",
        tech: ["TypeScript", "Next.js", "Vercel", "React", "Tailwind CSS"],
        github: "https://github.com/elidielton-dev/abelha-e-mel-ops",
        live: "https://abelhaemel.vercel.app/",
        accent: "from-amber-400 via-yellow-600 to-zinc-950",
      },
      {
        number: "03",
        title: "Belíssima",
        description:
          "Loja de perfumes com catálogo, quiz rápido para descobrir a fragrância ideal e interface sofisticada em verde e dourado.",
        tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
        github: "https://github.com/elidielton-dev/product-opus-prime",
        live: "https://belissimaperfumaria.vercel.app/",
        accent: "from-emerald-700 via-amber-600 to-zinc-950",
      },
      {
        number: "04",
        title: "Sertão Replay",
        description:
          "Experiência web temática do Sertão, com deploy na Vercel. Projeto em JavaScript focado em apresentação e interação no navegador.",
        tech: ["JavaScript", "HTML", "CSS", "Vercel"],
        github: "https://github.com/elidielton-dev/Sertao-Replay",
        live: "https://sertao-replay-teste.vercel.app",
        accent: "from-sky-400 via-cyan-600 to-zinc-950",
      },
      {
        number: "05",
        title: "ControlMoney",
        description:
          "Aplicação Java para controle financeiro pessoal: receitas, despesas, extrato e cálculo de saldo de forma simples e eficiente.",
        tech: ["Java"],
        github: "https://github.com/elidielton-dev/ControlMoney",
        live: null,
        accent: "from-emerald-400 via-teal-600 to-zinc-950",
      },
      {
        number: "06",
        title: "Banco",
        description:
          "Projeto acadêmico em Java modelando operações bancárias, reforçando POO, regras de negócio e organização de código.",
        tech: ["Java", "POO"],
        github: "https://github.com/elidielton-dev/Banco",
        live: null,
        accent: "from-blue-400 via-indigo-600 to-zinc-950",
      },
      {
        number: "07",
        title: "prova-POO / ProjetoExtra",
        description:
          "Exercícios e projetos em Java focados em programação orientada a objetos, estruturas e práticas de desenvolvimento.",
        tech: ["Java", "POO"],
        github: "https://github.com/elidielton-dev/prova-POO",
        live: null,
        accent: "from-fuchsia-400 via-violet-600 to-zinc-950",
      },
    ],
    experiences: [
      {
        role: "Técnico de Help Desk",
        company: "Mundo Technology",
        period: "ATUALMENTE",
        description:
          "Atendimento e suporte técnico aos usuários, registro e resolução de chamados, instalação e configuração de softwares e equipamentos.",
      },
      {
        role: "Auxiliar de Logística",
        company: "Grupo Intan",
        period: "FEV 2025 - MAR 2026",
        description:
          "Emissão de notas fiscais e MDF-e, geração de relatórios e utilização do sistema Protheus.",
      },
      {
        role: "Auxiliar de TI",
        company: "Fox Winner",
        period: "DEZ 2020 - ABR 2021",
        description:
          "Suporte ao Microsoft 365, manutenção de computadores e instalação/configuração de softwares e sistemas.",
      },
      {
        role: "ADS — 3º período",
        company: "AESA — CESA",
        period: "CURSANDO",
        description:
          "Formação em Análise e Desenvolvimento de Sistemas, com disciplinas de banco de dados, estruturas de dados, redes e desenvolvimento web.",
      },
    ],
  },
  en: {
    ...shared,
    location: "Custódia - PE, Brazil",
    navAbout: "About me",
    navProjects: "Projects",
    openGithub: "Open github",
    openLinkedin: "Open linkedin",
    languageLabel: "English",
    languages: {
      pt: "Português",
      en: "English",
    },
    heroGreeting: "Hi, my name is Elidielton Rodrigues",
    heroTitle: "Fullstack\nDeveloper",
    intro:
      "I'm a developer who enjoys building real, complex and challenging applications. From secure, scalable backends to modern, intuitive interfaces.",
    seeProjects: "See my projects",
    aboutCta: "About me",
    stats: [
      { key: "commits", label: "Commits", value: "421" },
      { key: "prs", label: "Pull Requests", value: "0" },
      { key: "coffee", label: "Cups of coffee", value: "210" },
    ],
    aboutTitle: "A bit about me and my journey in programming",
    about: [
      "I'm studying Systems Analysis and Development (3rd semester) at AESA — CESA and building web projects with TypeScript, React, Java, and relational databases. I started with HTML, CSS, and JavaScript and keep growing into modern fullstack stacks.",
      "On GitHub I ship apps like NorFood (delivery/omnichannel), Abelha & Mel, Belíssima, and Sertão Replay, plus Java systems like ControlMoney. My goal is to create useful, well-structured products with a great experience for users.",
    ],
    projectsTitle: "My projects",
    projectLabel: "Project",
    code: "Code",
    demo: "Demo",
    hardSkillsTitle: "Hard Skills",
    softSkillsTitle: "Soft Skills",
    softSkills: [
      {
        key: "learn",
        title: "Continuous learning",
        description: "I keep studying and practicing to grow the stack and ship better work.",
      },
      {
        key: "communication",
        title: "Communication",
        description: "I explain ideas clearly to users, teammates, and anyone who needs the solution.",
      },
      {
        key: "proactivity",
        title: "Proactivity",
        description: "I anticipate issues, suggest paths, and follow through until the job is done.",
      },
      {
        key: "team",
        title: "Teamwork",
        description: "I collaborate daily, share context, and help the team move forward.",
      },
      {
        key: "organization",
        title: "Organization",
        description: "I prioritize tasks, keep the flow clear, and deliver what was agreed.",
      },
      {
        key: "support",
        title: "User support",
        description: "I listen patiently, track the request, and focus on actually solving it.",
      },
    ],
    contributionsTitle: "Contributions",
    contributionsLoading: "Loading…",
    contributionsCount: "{count} in the last year",
    contributionsStreak: "{count}-day streak",
    contributionsLess: "Less",
    contributionsMore: "More",
    contributionsError: "Could not load the chart right now. See it on",
    contributionsOpen: "Open contributions on GitHub",
    contributionsNone: "No contributions on {date}",
    contributionsOne: "1 contribution on {date}",
    contributionsMany: "{count} contributions on {date}",
    experienceTitle: "My experience",
    projects: [
      {
        number: "01",
        title: "NorFood",
        description:
          "Delivery and omnichannel support platform with dashboard, storefront, orders, and WhatsApp integration. Modern TypeScript stack focused on real restaurant operations.",
        tech: ["TypeScript", "React", "Next.js", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com/elidielton-dev/NorFood",
        live: "https://norfood.vercel.app/",
        accent: "from-orange-500 via-rose-600 to-zinc-950",
      },
      {
        number: "02",
        title: "Abelha & Mel",
        description:
          "Artisan confectionery with catalog, categories, and product showcase. TypeScript interface focused on a sweet, clear, and easy-to-use experience.",
        tech: ["TypeScript", "Next.js", "Vercel", "React", "Tailwind CSS"],
        github: "https://github.com/elidielton-dev/abelha-e-mel-ops",
        live: "https://abelhaemel.vercel.app/",
        accent: "from-amber-400 via-yellow-600 to-zinc-950",
      },
      {
        number: "03",
        title: "Belíssima",
        description:
          "Perfume store with catalog, a quick quiz to find the ideal fragrance, and a sophisticated green-and-gold interface.",
        tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
        github: "https://github.com/elidielton-dev/product-opus-prime",
        live: "https://belissimaperfumaria.vercel.app/",
        accent: "from-emerald-700 via-amber-600 to-zinc-950",
      },
      {
        number: "04",
        title: "Sertão Replay",
        description:
          "Thematic web experience inspired by the Sertão, deployed on Vercel. JavaScript project focused on presentation and browser interaction.",
        tech: ["JavaScript", "HTML", "CSS", "Vercel"],
        github: "https://github.com/elidielton-dev/Sertao-Replay",
        live: "https://sertao-replay-teste.vercel.app",
        accent: "from-sky-400 via-cyan-600 to-zinc-950",
      },
      {
        number: "05",
        title: "ControlMoney",
        description:
          "Java app for personal finance: income, expenses, statement, and balance calculation in a simple and efficient way.",
        tech: ["Java"],
        github: "https://github.com/elidielton-dev/ControlMoney",
        live: null,
        accent: "from-emerald-400 via-teal-600 to-zinc-950",
      },
      {
        number: "06",
        title: "Banco",
        description:
          "Academic Java project modeling banking operations, reinforcing OOP, business rules, and code organization.",
        tech: ["Java", "OOP"],
        github: "https://github.com/elidielton-dev/Banco",
        live: null,
        accent: "from-blue-400 via-indigo-600 to-zinc-950",
      },
      {
        number: "07",
        title: "prova-POO / ProjetoExtra",
        description:
          "Java exercises and projects focused on object-oriented programming, structures, and development practices.",
        tech: ["Java", "OOP"],
        github: "https://github.com/elidielton-dev/prova-POO",
        live: null,
        accent: "from-fuchsia-400 via-violet-600 to-zinc-950",
      },
    ],
    experiences: [
      {
        role: "Help Desk Technician",
        company: "Mundo Technology",
        period: "PRESENT",
        description:
          "User technical support, ticket tracking and resolution, software and equipment installation and setup.",
      },
      {
        role: "Logistics Assistant",
        company: "Grupo Intan",
        period: "FEB 2025 - MAR 2026",
        description:
          "Issuing invoices and MDF-e documents, generating reports, and using the Protheus system.",
      },
      {
        role: "IT Assistant",
        company: "Fox Winner",
        period: "DEC 2020 - APR 2021",
        description:
          "Microsoft 365 support, computer maintenance, and software/system installation and configuration.",
      },
      {
        role: "ADS — 3rd semester",
        company: "AESA — CESA",
        period: "IN PROGRESS",
        description:
          "Systems Analysis and Development degree, with courses in databases, data structures, networks, and web development.",
      },
    ],
  },
} as const;
