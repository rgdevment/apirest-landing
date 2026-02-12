export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const siteData = {
  es: {
    meta: {
      title: 'apirest.cl | Infraestructura Libre y Soberana',
      desc: 'APIs públicas y herramientas Open Source desde Chile.',
    },
    hero: {
      status: 'Sistemas Operativos',
      title:
        "Software por convicción, <br/> <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'>no por suscripción.</span>",
      subtitle:
        "Mantenemos servicios esenciales y herramientas de productividad para desarrolladores. <strong class='text-gray-900'>Sin tracking. Sin barreras. Sin costo.</strong>",
      ctaMain: 'Ver Servicios',
      ctaGithub: 'GitHub Profile',
    },
    directory: {
      title: 'Directorio de Recursos',
      subtitle: 'APIs y Aplicaciones mantenidas activamente.',
    },
    services: [
      {
        title: 'Retrieve Countries',
        description:
          'Fuente de verdad normalizada para geodata. Banderas, códigos ISO, monedas y datos regionales. Datos limpios para poblar selectores y validaciones.',
        url: 'https://github.com/rgdevment/retrieve-countries',
        type: 'API',
        status: 'online',
        icon: 'M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-1.9a9 9 0 0 1 9.9-9.9M3.6 13.9a9 9 0 0 0 9.9 9.9',
      },
      {
        title: 'CopyPaste',
        description:
          'Gestor de portapapeles de escritorio para Windows (WinUI 3). Historial seguro, búsqueda rápida y almacenamiento local. Sin nubes obligatorias ni telemetría invasiva. Disponible en Microsoft Store.',
        url: 'https://apps.microsoft.com/detail/9nbjrzf3k856',
        githubUrl: 'https://github.com/rgdevment/CopyPaste',
        type: 'APP',
        status: 'beta',
        icon: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
      },
    ],
    mission: {
      title: 'Nuestra Misión',
      text1:
        'En un ecosistema saturado de servicios de pago por uso y recolección de datos, <strong>apirest.cl</strong> nace como un bastión de resistencia.',
      text2:
        "Nuestra motivación es simple: <span class='text-gray-900 font-semibold'>Democratizar la infraestructura.</span> Creemos que acceder a indicadores económicos básicos o herramientas de productividad no debería requerir una tarjeta de crédito ni ceder tu privacidad.",
      text3:
        'Mantenemos esto porque lo usamos. Lo compartimos porque creemos en el valor colectivo del código abierto.',
    },
    values: [
      {
        title: 'Soberanía Digital',
        desc: 'No dependemos de créditos gratuitos de nubes ajenas. Mantenemos nuestros servicios en infraestructura propia local, garantizando independencia y persistencia real.',
      },
      {
        title: 'Código como Compromiso',
        desc: "Todo es Open Source. No hay 'cajas negras' ni planes premium ocultos. La transparencia es la única forma de generar confianza en herramientas de desarrollo.",
      },
      {
        title: 'Privacidad por Diseño',
        desc: 'Nuestras herramientas no te rastrean. CopyPaste guarda tus datos en tu disco, no en nuestra nube. Creemos en software que respeta al usuario, no que lo explota.',
      },
      {
        title: 'Utilidad sobre Marketing',
        desc: 'Desarrollamos lo que nosotros mismos necesitamos para trabajar. Si es útil para nosotros, lo liberamos para que sea útil para la comunidad.',
      },
    ],
  },
  en: {
    meta: {
      title: 'apirest.cl | Free & Sovereign Infrastructure',
      desc: 'Public APIs and Open Source tools from Chile.',
    },
    hero: {
      status: 'Systems Operational',
      title:
        "Software by conviction, <br/> <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'>not subscription.</span>",
      subtitle:
        "We maintain essential services and productivity tools for developers. <strong class='text-gray-900'>No tracking. No barriers. No cost.</strong>",
      ctaMain: 'View Services',
      ctaGithub: 'GitHub Profile',
    },
    directory: {
      title: 'Resource Directory',
      subtitle: 'Actively maintained APIs and Applications.',
    },
    services: [
      {
        title: 'Retrieve Countries',
        description:
          'Normalized source of truth for geodata. Flags, ISO codes, currencies, and regional data. Clean data to populate selectors and validations.',
        url: 'https://github.com/rgdevment/retrieve-countries',
        type: 'API',
        status: 'online',
        icon: 'M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-1.9a9 9 0 0 1 9.9-9.9M3.6 13.9a9 9 0 0 0 9.9 9.9',
      },
      {
        title: 'CopyPaste',
        description:
          'Desktop clipboard manager for Windows (WinUI 3). Secure history, fast search, and local storage. No mandatory clouds or invasive telemetry. Available on Microsoft Store.',
        url: 'https://apps.microsoft.com/detail/9nbjrzf3k856',
        githubUrl: 'https://github.com/rgdevment/CopyPaste',
        type: 'APP',
        status: 'beta',
        icon: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
      },
    ],
    mission: {
      title: 'Our Mission',
      text1:
        'In an ecosystem saturated with pay-per-use services and data harvesting, <strong>apirest.cl</strong> is born as a bastion of resistance.',
      text2:
        "Our motivation is simple: <span class='text-gray-900 font-semibold'>Democratize infrastructure.</span> We believe accessing basic economic indicators or productivity tools shouldn't require a credit card or surrendering your privacy.",
      text3:
        'We maintain this because we use it. We share it because we believe in the collective value of open source.',
    },
    values: [
      {
        title: 'Digital Sovereignty',
        desc: "We don't depend on free credits from third-party clouds. We maintain our services on our own local infrastructure, guaranteeing independence and real persistence.",
      },
      {
        title: 'Code as Commitment',
        desc: "Everything is Open Source. No 'black boxes' or hidden premium plans. Transparency is the only way to build trust in developer tools.",
      },
      {
        title: 'Privacy by Design',
        desc: "Our tools don't track you. CopyPaste saves your data on your disk, not in our cloud. We believe in software that respects the user, not exploits them.",
      },
      {
        title: 'Utility over Marketing',
        desc: "We develop what we need to work. If it's useful for us, we release it so it can be useful for the community.",
      },
    ],
  },
};
