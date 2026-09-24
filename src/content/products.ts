import type { Locale } from "../site";

type Words = {
  tagline: string;
  problem: string;
  what: string[];
  privacy: string;
  faq: { q: string; a: string }[];
};

export type Product = {
  slug: string;
  name: string;
  repo: string;
  licence: string;
  platforms: string[];
  storeId?: string;
  winget?: string;
  cask?: string;
  scoop?: string;
  shot?: {
    src: string;
    srcEs?: string;
    width: number;
    height: number;
    en: string;
    es: string;
  };
  accent: string;
  en: Words;
  es: Words;
};

export const PRODUCTS: Product[] = [
  {
    slug: "tisty",
    name: "Tisty",
    repo: "https://github.com/rgdevment/Tisty",
    licence: "AGPL-3.0",
    platforms: ["Windows", "macOS"],
    storeId: "9PGVWXD8X93N",
    winget: "rgdevment.Tisty",
    cask: "tisty",
    shot: {
      src: "/tisty-social.png",
      srcEs: "/tisty-social-es.png",
      width: 1280,
      height: 640,
      en: "Tisty: notes, documents and tasks, with the day's list beside the documents kept on disk",
      es: "Tisty: notas, documentos y tareas, con la lista del dia junto a los documentos guardados en disco",
    },
    accent: "#6F4BD8",
    en: {
      tagline: "Notes, documents and tasks, in files you can read without it.",
      problem:
        "Your notes live inside somebody else's application. The day it shuts down, or the subscription lapses, you find out what you actually own.",
      what: [
        "Notes, documents and tasks kept as plain files on your own disk.",
        "No account and no server: nothing is synchronised unless you put the folder somewhere that synchronises.",
        "An MCP door your assistant can knock on, so a model can read and write what you keep, with your permission.",
      ],
      privacy:
        "Local-first by design. The files are yours and readable without Tisty running.",
      faq: [
        {
          q: "What happens to my notes if Tisty disappears?",
          a: "Nothing. They are plain files on your disk and any editor opens them.",
        },
        {
          q: "What is the MCP door for?",
          a: "It lets an assistant read and write your notes and tasks through the Model Context Protocol, on your machine and with your permission.",
        },
      ],
    },
    es: {
      tagline: "Notas, documentos y tareas, en archivos que puedes leer sin él.",
      problem:
        "Tus notas viven dentro de la aplicación de otro. El día que cierre, o que se acabe la suscripción, descubres qué es tuyo de verdad.",
      what: [
        "Notas, documentos y tareas guardados como archivos corrientes en tu propio disco.",
        "Sin cuenta y sin servidor: no se sincroniza nada salvo que tú pongas la carpeta en un sitio que sincronice.",
        "Una puerta MCP a la que tu asistente puede llamar, para que un modelo lea y escriba lo que guardas, con tu permiso.",
      ],
      privacy:
        "Local por diseño. Los archivos son tuyos y se leen sin que Tisty esté abierto.",
      faq: [
        {
          q: "¿Qué pasa con mis notas si Tisty desaparece?",
          a: "Nada. Son archivos corrientes en tu disco y los abre cualquier editor.",
        },
        {
          q: "¿Para qué sirve la puerta MCP?",
          a: "Permite que un asistente lea y escriba tus notas y tareas por el Model Context Protocol, en tu equipo y con tu permiso.",
        },
      ],
    },
  },
  {
    slug: "linkunbound",
    name: "LinkUnbound",
    repo: "https://github.com/rgdevment/LinkUnbound",
    licence: "GPL-3.0-only",
    platforms: ["Windows", "macOS"],
    storeId: "9N9F7C8Q43KC",
    cask: "linkunbound",
    shot: {
      src: "/linkunbound-social.png",
      srcEs: "/linkunbound-social-es.png",
      width: 1280,
      height: 640,
      en: "LinkUnbound: the picker beside a link, listing the installed browsers with the profile each one opens",
      es: "LinkUnbound: el selector junto a un enlace, con los navegadores instalados y el perfil en que abre cada uno",
    },
    accent: "#2F62D8",
    en: {
      tagline: "Choose which browser opens every link.",
      problem:
        "A link from Teams opens in Edge. One from Slack lands wherever Windows decided last. You keep three browsers and four profiles, and nobody asks you which one you meant.",
      what: [
        "It makes itself the default browser, so every link clicked outside a browser passes through it first.",
        "If a rule covers the link it opens straight away. If not, a small picker appears beside the cursor and you choose, with the mouse or the keys 1 to 9.",
        "A rule can match the site, a particular browser profile, or the application the link came from, so everything Teams opens can go to one browser while the rest goes to another.",
        "Microsoft SafeLinks are unwrapped before any rule is matched, so a rule sees the real address instead of the redirect.",
      ],
      privacy:
        "No account, no ads, no telemetry, no server. Your rules and the links you open never leave the machine.",
      faq: [
        {
          q: "Why do Teams and Outlook still open Edge?",
          a: "Both carry a setting of their own that hands links to your default browser, and that is the first thing to change: in Teams under Settings, Files and links; in classic Outlook under File, Options, Advanced. After that their links reach LinkUnbound like anybody else's. What is left is a channel of Microsoft's own that hands some links straight to Edge, which Windows 11 does not let another application stand in the middle of.",
        },
        {
          q: "Does it work with browser profiles?",
          a: "Yes. Installed browsers and their Chromium profiles are detected on their own, and a rule can send a link to one profile rather than just to the browser.",
        },
        {
          q: "What does it cost?",
          a: "Nothing, and there is no paid tier. It is released under the GPL-3.0, so you can read it, change it and share it.",
        },
      ],
    },
    es: {
      tagline: "Elige con qué navegador se abre cada enlace.",
      problem:
        "Un enlace de Teams se abre en Edge. Uno de Slack, donde Windows decidiera la última vez. Tienes tres navegadores y cuatro perfiles, y a ti no te pregunta nadie.",
      what: [
        "Se pone como navegador predeterminado, así que cada enlace que abres fuera de un navegador pasa antes por él.",
        "Si tienes una regla que lo cubre, se abre directamente. Si no, aparece un selector pequeño junto al cursor y eliges tú, con el ratón o con las teclas 1 a 9.",
        "Una regla puede ir por el sitio, por un perfil concreto del navegador, o por la aplicación de la que viene el enlace, así que todo lo que abre Teams puede ir a un navegador mientras el resto va a otro.",
        "Los SafeLinks de Microsoft se desenvuelven antes de comparar ninguna regla, así que la regla ve la dirección real y no el redirector.",
      ],
      privacy:
        "Sin cuenta, sin publicidad, sin telemetría, sin servidor. Tus reglas y los enlaces que abres no salen de este equipo.",
      faq: [
        {
          q: "¿Por qué Teams y Outlook siguen abriendo Edge?",
          a: "Los dos tienen un ajuste propio que entrega los enlaces a tu navegador predeterminado, y es lo primero que conviene cambiar: en Teams, en Configuración, Archivos y enlaces; en el Outlook clásico, en Archivo, Opciones, Avanzado. Con eso hecho, sus enlaces llegan a LinkUnbound como los de cualquier otra aplicación. Lo que queda es un canal propio de Microsoft que entrega algunos enlaces directamente a Edge, y Windows 11 no deja que otra aplicación se ponga en medio.",
        },
        {
          q: "¿Funciona con los perfiles del navegador?",
          a: "Sí. Detecta solo los navegadores instalados y sus perfiles de Chromium, y una regla puede mandar el enlace a un perfil concreto, no solo al navegador.",
        },
        {
          q: "¿Cuánto cuesta?",
          a: "Nada, y no hay versión de pago. Se publica bajo la GPL-3.0, así que puedes leerlo, cambiarlo y compartirlo.",
        },
      ],
    },
  },
  {
    slug: "copypaste",
    name: "CopyPaste",
    repo: "https://github.com/rgdevment/CopyPaste",
    licence: "GPL-3.0",
    platforms: ["Windows", "macOS"],
    storeId: "9NBJRZF3K856",
    cask: "copypaste",
    scoop: "copypaste",
    shot: {
      src: "/copypaste-social.png",
      width: 1280,
      height: 640,
      en: "CopyPaste: the clipboard panel with its search box and a history of text, images and files",
      es: "CopyPaste: el panel del portapapeles con su buscador y un historial de textos, imagenes y archivos",
    },
    accent: "#1E7A52",
    en: {
      tagline: "Everything you copied, still there.",
      problem:
        "You copied an address ten minutes ago and then copied something else. It is gone, and the only way back is to go and find it again.",
      what: [
        "It keeps a history of what you copy, searchable, on your own disk.",
        "Passwords and API keys are left out: clipboard content from password managers is ignored.",
        "Copying the same text again without styles no longer discards the formatting already stored.",
        "History, images and settings can be exported and imported as a backup file.",
      ],
      privacy:
        "Everything is stored locally under your user profile. No mandatory cloud, no tracking.",
      faq: [
        {
          q: "Does it store passwords?",
          a: "No. Clipboard content coming from password managers such as 1Password or Bitwarden is ignored.",
        },
        {
          q: "Where is my clipboard history kept?",
          a: "Locally, under your user profile. It is never uploaded anywhere.",
        },
      ],
    },
    es: {
      tagline: "Todo lo que copiaste, ahí sigue.",
      problem:
        "Copiaste una dirección hace diez minutos y luego copiaste otra cosa. Ya no está, y la única forma de recuperarla es ir a buscarla otra vez.",
      what: [
        "Guarda en tu propio disco el historial de lo que copias, y puedes buscar dentro.",
        "Las contraseñas y las claves de API se quedan fuera: lo que viene de un gestor de contraseñas se ignora.",
        "Volver a copiar el mismo texto sin estilos ya no descarta el formato que había guardado.",
        "El historial, las imágenes y los ajustes se pueden exportar e importar como copia de seguridad.",
      ],
      privacy:
        "Todo se guarda localmente en tu perfil de usuario. Sin nube obligatoria y sin rastreo.",
      faq: [
        {
          q: "¿Guarda las contraseñas?",
          a: "No. Lo que llega al portapapeles desde un gestor de contraseñas como 1Password o Bitwarden se ignora.",
        },
        {
          q: "¿Dónde queda el historial?",
          a: "En tu equipo, dentro de tu perfil de usuario. No se sube a ninguna parte.",
        },
      ],
    },
  },
];

export function words(product: Product, locale: Locale): Words {
  return locale === "es" ? product.es : product.en;
}

export function storeUrl(product: Product): string | null {
  return product.storeId ? `https://apps.microsoft.com/detail/${product.storeId}` : null;
}
