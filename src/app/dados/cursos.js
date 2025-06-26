// data/cursos.ts

export const cursos = [
  {
    id: "react",
    titulo: "React para Iniciantes",
    subtitulo: "Crie interfaces modernas com React",
    descricao: "Aprenda os fundamentos do React, incluindo JSX, componentes, estado e props.",
    professor: "João Silva",
    dificuldade: "iniciante",
    numeroVideos: 12, // Agora será calculado dinamicamente
    horas: 5,         // Agora será calculado dinamicamente
    valor: 97.00,
    aulas: [
      {
        topico: "1. Introdução ao React",
        videos: [
          { id: "react-1-1", titulo: "O que é React e por que usar?", duracao: 8, completo: true },
          { id: "react-1-2", titulo: "Instalando o ambiente com Vite", duracao: 10, completo: true }
        ]
      },
      {
        topico: "2. JSX e Componentes",
        videos: [
          { id: "react-2-1", titulo: "Entendendo o JSX na prática", duracao: 12, completo: true },
          { id: "react-2-2", titulo: "Criando componentes funcionais", duracao: 15, completo: true }
        ]
      },
      {
        topico: "3. Props e Estado",
        videos: [
          { id: "react-3-1", titulo: "Passando dados com Props", duracao: 14, completo: true },
          { id: "react-3-2", titulo: "Gerenciando Estado com useState", duracao: 18, completo: false }
        ]
      },
      {
        topico: "4. Eventos e Listas",
        videos: [
          { id: "react-4-1", titulo: "Manipulando eventos no React", duracao: 11, completo: false },
          { id: "react-4-2", titulo: "Renderizando listas com map()", duracao: 9, completo: false }
        ]
      },
      {
        topico: "5. Projeto Prático",
        videos: [
          { id: "react-5-1", titulo: "Construindo um contador interativo", duracao: 20, completo: false },
          { id: "react-5-2", titulo: "Melhorando a estrutura do projeto", duracao: 16, completo: false }
        ]
      },
      {
        topico: "6. Revisão e Encerramento",
        videos: [
          { id: "react-6-1", titulo: "Revisando os conceitos principais", duracao: 10, completo: false },
          { id: "react-6-2", titulo: "Próximos passos no aprendizado de React", duracao: 7, completo: false }
        ]
      }
    ]
  },
  {
    id: "nextjs",
    titulo: "Next.js Avançado",
    subtitulo: "SSR, SSG e rotas dinâmicas na prática",
    descricao: "Construa aplicações profissionais com Next.js e técnicas modernas de renderização.",
    professor: "Ana Pereira",
    dificuldade: "avançado",
    numeroVideos: 18,
    horas: 9,
    valor: 197.00,
    aulas: [
      {
        topico: "1. Fundamentos do Next.js",
        videos: [
          { id: "next-1-1", titulo: "Por que Next.js? Vantagens e arquitetura", duracao: 15, completo: true },
          { id: "next-1-2", titulo: "Criando um projeto com create-next-app", duracao: 10, completo: true }
        ]
      },
      {
        topico: "2. Páginas e Rotas",
        videos: [
          { id: "next-2-1", titulo: "Rotas baseadas em arquivos", duracao: 12, completo: false },
          { id: "next-2-2", titulo: "Rotas dinâmicas com parâmetros", duracao: 18, completo: false }
        ]
      },
      {
        topico: "3. SSR e SSG",
        videos: [
          { id: "next-3-1", titulo: "Server-Side Rendering na prática", duracao: 20, completo: false },
          { id: "next-3-2", titulo: "Static Site Generation com getStaticProps", duracao: 17, completo: false }
        ]
      },
      {
        topico: "4. API Routes e Fetching",
        videos: [
          { id: "next-4-1", titulo: "Criando rotas de API internas", duracao: 14, completo: false },
          { id: "next-4-2", titulo: "Consumindo dados com SWR", duracao: 16, completo: false }
        ]
      },
      {
        topico: "5. Projeto Completo",
        videos: [
          { id: "next-5-1", titulo: "Construindo um blog com CMS", duracao: 25, completo: false },
          { id: "next-5-2", titulo: "Deploy no Vercel com preview dinâmico", duracao: 13, completo: false }
        ]
      },
      {
        topico: "6. Performance e SEO",
        videos: [
          { id: "next-6-1", titulo: "Melhorando o carregamento com imagens otimizadas", duracao: 11, completo: false },
          { id: "next-6-2", titulo: "Técnicas de SEO no Next.js", duracao: 9, completo: false }
        ]
      }
    ]
  },
  {
    id: "tailwind",
    titulo: "Tailwind CSS Profissional",
    subtitulo: "Estilização rápida e responsiva",
    descricao: "Domine a criação de interfaces limpas e modernas com Tailwind CSS.",
    professor: "Carlos Eduardo",
    dificuldade: "intermediário",
    numeroVideos: 10,
    horas: 4,
    valor: 87.00,
    aulas: [
      {
        topico: "1. Introdução ao Tailwind",
        videos: [
          { id: "tailwind-1-1", titulo: "Configurando Tailwind no projeto", duracao: 7, completo: true },
          { id: "tailwind-1-2", titulo: "Como funciona a abordagem utility-first", duracao: 9, completo: true }
        ]
      },
      {
        topico: "2. Layouts com Flex e Grid",
        videos: [
          { id: "tailwind-2-1", titulo: "Dominando Flexbox com Tailwind", duracao: 11, completo: true },
          { id: "tailwind-2-2", titulo: "Layouts responsivos com Grid", duracao: 13, completo: true }
        ]
      },
      {
        topico: "3. Componentes Reutilizáveis",
        videos: [
          { id: "tailwind-3-1", titulo: "Criando botões, cards e modais", duracao: 14, completo: false },
          { id: "tailwind-3-2", titulo: "Trabalhando com estados e variantes", duracao: 10, completo: false }
        ]
      },
      {
        topico: "4. Estilização Avançada",
        videos: [
          { id: "tailwind-4-1", titulo: "Animações e transições", duracao: 12, completo: false },
          { id: "tailwind-4-2", titulo: "Dark Mode e personalização do tema", duracao: 8, completo: false }
        ]
      },
      {
        topico: "5. Projeto Final",
        videos: [
          { id: "tailwind-5-1", titulo: "Criando uma landing page com Tailwind", duracao: 18, completo: false },
          { id: "tailwind-5-2", titulo: "Deploy e boas práticas", duracao: 6, completo: false }
        ]
      }
    ]
  },
  {
    id: "typescript",
    titulo: "TypeScript do Zero ao Pro",
    subtitulo: "Tipagem para aplicações mais seguras",
    descricao: "Entenda como o TypeScript pode elevar a robustez do seu código JavaScript.",
    professor: "Fernanda Rocha",
    dificuldade: "intermediário",
    numeroVideos: 15,
    horas: 6,
    valor: 127.00,
    aulas: [
      {
        topico: "1. Fundamentos de TypeScript",
        videos: [
          { id: "ts-1-1", titulo: "O que é TypeScript e instalação", duracao: 9, completo: true },
          { id: "ts-1-2", titulo: "Diferenças entre TS e JS", duracao: 10, completo: true }
        ]
      },
      {
        topico: "2. Tipagem Básica",
        videos: [
          { id: "ts-2-1", titulo: "Tipos primitivos e inferência", duracao: 12, completo: true },
          { id: "ts-2-2", titulo: "Funções tipadas e parâmetros opcionais", duracao: 15, completo: false }
        ]
      },
      {
        topico: "3. Objetos e Interfaces",
        videos: [
          { id: "ts-3-1", titulo: "Criando interfaces e tipos customizados", duracao: 14, completo: false },
          { id: "ts-3-2", titulo: "Extendendo e combinando interfaces", duracao: 11, completo: false }
        ]
      },
      {
        topico: "4. Generics e Tipos Avançados",
        videos: [
          { id: "ts-4-1", titulo: "Trabalhando com generics", duracao: 16, completo: false },
          { id: "ts-4-2", titulo: "Tipos condicionais e utilitários", duracao: 13, completo: false }
        ]
      },
      {
        topico: "5. TypeScript com React",
        videos: [
          { id: "ts-5-1", titulo: "Tipando props e estados", duracao: 18, completo: false },
          { id: "ts-5-2", titulo: "Formulários com useRef e useReducer", duracao: 20, completo: false }
        ]
      },
      {
        topico: "6. Projeto Final",
        videos: [
          { id: "ts-6-1", titulo: "Aplicação em React com TypeScript", duracao: 22, completo: false },
          { id: "ts-6-2", titulo: "Organizando e tipando todo o código", duracao: 10, completo: false }
        ]
      }
    ]
  },
  {
    id: "uiux",
    titulo: "Design de Interfaces (UI/UX)",
    subtitulo: "Crie experiências memoráveis para usuários",
    descricao: "Aprenda os princípios de usabilidade, acessibilidade e design focado em pessoas.",
    professor: "Lucas Mendes",
    dificuldade: "iniciante",
    numeroVideos: 9,
    horas: 3.5,
    valor: 79.00,
    aulas: [
      {
        topico: "1. Fundamentos de UI/UX",
        videos: [
          { id: "uiux-1-1", titulo: "O que é UI e o que é UX?", duracao: 7, completo: true },
          { id: "uiux-1-2", titulo: "Diferença entre design e estética", duracao: 8, completo: true }
        ]
      },
      {
        topico: "2. Princípios de Usabilidade",
        videos: [
          { id: "uiux-2-1", titulo: "Design centrado no usuário", duracao: 10, completo: true },
          { id: "uiux-2-2", titulo: "Hierarquia visual e escaneabilidade", duracao: 9, completo: false }
        ]
      },
      {
        topico: "3. Acessibilidade e Inclusão",
        videos: [
          { id: "uiux-3-1", titulo: "Acessibilidade na web: o que considerar", duracao: 11, completo: false },
          { id: "uiux-3-2", titulo: "Ferramentas para validar acessibilidade", duracao: 13, completo: false }
        ]
      },
      {
        topico: "4. Design Prático",
        videos: [
          { id: "uiux-4-1", titulo: "Figma: construindo wireframes", duracao: 15, completo: false },
          { id: "uiux-4-2", titulo: "Protótipos navegáveis e testes", duracao: 12, completo: false }
        ]
      },
      {
        topico: "5. Projeto Final",
        videos: [
          { id: "uiux-5-1", titulo: "Criando uma interface para app de produtividade", duracao: 20, completo: false },
          { id: "uiux-5-2", titulo: "Feedback e ajustes baseados em testes", duracao: 10, completo: false }
        ]
      }
    ]
  },
  {
    id: "fullstack",
    titulo: "Desenvolvimento Fullstack",
    subtitulo: "Frontend + Backend em um só curso",
    descricao: "Construa aplicações completas usando React, Node, APIs REST e bancos de dados.",
    professor: "Marina Oliveira",
    dificuldade: "avançado",
    numeroVideos: 22,
    horas: 12,
    valor: 247.00,
    aulas: [
      {
        topico: "1. Arquitetura Fullstack",
        videos: [
          { id: "fullstack-1-1", titulo: "Frontend vs Backend: papéis e responsabilidades", duracao: 15, completo: true },
          { id: "fullstack-1-2", titulo: "Monólito vs Microserviços", duracao: 12, completo: true }
        ]
      },
      {
        topico: "2. Frontend com React",
        videos: [
          { id: "fullstack-2-1", titulo: "Criando a base do projeto", duracao: 18, completo: true },
          { id: "fullstack-2-2", titulo: "Autenticação de usuários", duracao: 20, completo: false }
        ]
      },
      {
        topico: "3. Backend com Node e Express",
        videos: [
          { id: "fullstack-3-1", titulo: "Criando API REST com Express", duracao: 25, completo: false },
          { id: "fullstack-3-2", titulo: "CRUD com banco de dados (Mongo ou PostgreSQL)", duracao: 30, completo: false }
        ]
      },
      {
        topico: "4. Integração Total",
        videos: [
          { id: "fullstack-4-1", titulo: "Conectando frontend e backend via API", duracao: 20, completo: false },
          { id: "fullstack-4-2", titulo: "Validação de dados e erros", duracao: 17, completo: false }
        ]
      },
      {
        topico: "5. Projeto Completo",
        videos: [
          { id: "fullstack-5-1", titulo: "Criando uma aplicação de tarefas (to-do app)", duracao: 35, completo: false },
          { id: "fullstack-5-2", titulo: "Deploy com Docker e hospedagem na Vercel + Render", duracao: 28, completo: false }
        ]
      },
      {
        topico: "6. Testes e Escalabilidade",
        videos: [
          { id: "fullstack-6-1", titulo: "Testes com Jest e Supertest", duracao: 19, completo: false },
          { id: "fullstack-6-2", titulo: "Boas práticas para escalar sua aplicação", duracao: 14, completo: false }
        ]
      }
    ]
  }
];