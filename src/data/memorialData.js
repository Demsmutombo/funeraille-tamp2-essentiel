// Données du mémorial - Formulaire Standard
// 
// Ce fichier contient toutes les données du site mémorial selon le questionnaire standard.
// Veuillez remplir chaque section avec les informations fournies dans le questionnaire rempli.
// 
// Sections à remplir selon le questionnaire standard :
// 1. Informations personnelles du défunt
// 2. Informations familiales
// 3. Biographie détaillée (3-4 paragraphes, environ 400-500 mots)
// 4. Informations sur les obsèques (veillée, cérémonie, sépulture)
// 5. Photos (maximum 50 photos)
// 6. Vidéos (maximum 4 vidéos)
// 7. Témoignages
// 8. Citations et versets (4 maximum)
// 9. Design (couleurs, style, logo, favicon, phrases d'accueil)
// 10. Contact (nom, téléphone, email, WhatsApp)
// 
// IMPORTANT : Ne modifiez pas la structure des données, remplissez uniquement les valeurs.
// Les champs entre crochets [ ] indiquent où placer les informations.

export const memorialData = {
  // 1. INFORMATIONS PERSONNELLES DU DÉFUNT
  personalInfo: {
    fullName: "Henock Ngandu Kabadi",
    firstName: "Henock",
    lastName: "Ngandu Kabadi",
    nickname: "Petit Zidane",
    birthDate: {
      day: 15,
      month: 5,
      year: 1992
    },
    deathDate: {
      day: 2,
      month: 9,
      year: 2024
    },
    birthPlace: "République Démocratique du Congo",
    deathPlace: "",
    residence: "Afrique du Sud (Pretoria, puis Cape Town)",
    profession: "Passionné de football",
    previousProfessions: [],
    company: "",
    education: {
      primary: "École catholique Sainte-Marie Goretti, Télé de la Victoire, Université Révérend Kim",
      secondary: "",
      university: ""
    }
  },

  // 2. INFORMATIONS FAMILIALES
  familyInfo: {
    parents: {
      father: {
        name: "Kabadi",
        deathDate: null
      },
      mother: {
        name: "Philo",
        deathDate: null
      }
    },
    spouse: {
      name: "",
      marriageDate: "",
      status: ""
    },
    children: [
      { name: "Karine Fumbi", age: null }
    ],
    siblings: {
      count: 7,
      position: "5ème d'une famille de 7 enfants (2 filles et 4 garçons)",
      names: []
    },
    grandchildren: {
      count: 0,
      names: []
    }
  },

  // 3. BIOGRAPHIE DÉTAILLÉE (3-4 paragraphes, environ 400-500 mots)
  biography: {
    childhood: {
      place: "",
      events: "",
      passions: ""
    },
    achievements: [
      // Réalisations principales
    ],
    hobbies: [],
    sports: [],
    travels: [],
    personality: {
      adjectives: [],
      values: []
    },
    fullBiography: `Henock Ngandu Kabadi était un passionné de football qui a marqué le football congolais de son talent et de sa détermination. Dès son jeune âge, né le 15 mai 1992 en République Démocratique du Congo, il a montré un talent exceptionnel pour le football. Au sein d'une famille de 7 enfants, dont il était le 5ème, Henock a développé une passion profonde pour ce sport qui allait marquer toute sa vie. Il a fréquenté l'École catholique Sainte-Marie Goretti, puis le Télé de la Victoire et l'Université Révérend Kim, tout en poursuivant sa passion pour le ballon rond.

Henock a été désigné meilleur joueur au sein du COÉ et a été sélectionné pour un stage de perfectionnement en France à l'âge de 14 ans. Son jeu a surpris les sélectionneurs, dont Claude Le Roy, entraîneur des Léopards de la RDC, qui l'a surnommé "Petit Zidane" en raison de son style de jeu remarquable. Bien que les circonstances de la vie l'aient finalement éloigné du football professionnel, Henock n'a jamais abandonné sa passion pour ce sport. Il a continué à vivre pour le football, partageant son amour du jeu avec tous ceux qui l'entouraient, notamment lors de sa résidence en Afrique du Sud, à Pretoria puis à Cape Town.

Henock était connu pour son grand cœur, sa détermination et sa persévérance. Il était un père aimant pour sa fille Karine Fumbi et un frère dévoué au sein de sa famille. Sa personnalité chaleureuse et son esprit d'équipe ont marqué tous ceux qui l'ont connu. Il incarnait des valeurs de passion, de famille, de détermination et de travail acharné, laissant une empreinte indélébile dans le cœur de tous ceux qui ont eu la chance de le côtoyer.

Sa passion pour le football et son esprit persévérant continueront d'inspirer tous ceux qui l'ont connu. Henock restera à jamais dans nos cœurs comme le "Petit Zidane" qui a marqué le football congolais par son talent et sa personnalité exceptionnelle. Bien qu'il nous ait quittés le 2 septembre 2024, son souvenir vivra éternellement à travers ceux qu'il a touchés de sa générosité et de son amour pour le sport.`
  },

  // 4. INFORMATIONS SUR LES OBSÈQUES
  funeralInfo: {
    wake: {
      date: {
        day: 8,
        month: 9,
        year: 2024
      },
      time: "18h00",
      location: "Domicile familial"
    },
    ceremony: {
      date: {
        day: 9,
        month: 9,
        year: 2024
      },
      time: "10h00",
      location: "Église",
      type: "Religieuse",
      church: "Église"
    },
    burial: {
      date: {
        day: 9,
        month: 9,
        year: 2024
      },
      time: "",
      cemetery: "Nécropole de l'Eternité",
      address: "Nécropole de l'Eternité de N'sele Bambou",
      googleMaps: true,
      googleMapsUrl: "https://www.google.com/maps/place/N%C3%A9cropole+de+l'Eternit%C3%A9+de+N'sele+Bambou/@-4.2012429,15.590191,15z/data=!4m6!3m5!1s0x1a6bb30071b64863:0x3402a0ca1c56ba02!8m2!3d-4.2012429!4d15.590191!16s%2Fg%2F11vxlqqb6v?entry=ttu",
      coordinates: {
        lat: -4.2012429,
        lng: 15.590191
      }
    }
  },

  // 5. PHOTOS (maximum 50)
  photos: {
    total: 50, // Total des photos disponibles (maximum 50)
    categories: [
      "Photos d'enfance et jeunesse",
      "Photos Henock",
      "Photos professionnelles",
      "Photos des obsèques (morgue)",
      "Photos des obsèques (cimetière)"
    ],
    mainPhoto: "/assets/img/portfolio/henock/henock.jpg",
    gallery: [
      // Photos personnelles de Henock
      { src: "/assets/img/portfolio/henock/henock.jpg", alt: "Henock Ngandu Kabadi", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/henock (2).jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0023.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0024.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0025.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0026.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0027.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0029.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0030.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0031.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0032.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0033.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0034.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0036.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0037.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0040.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0042.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/henock/IMG-20240919-WA0038.jpg", alt: "Henock", category: "Photos Henock" },
      
      // Photos de la morgue (obsèques)
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0055.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0056.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0057.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0064.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0086.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0090.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0092.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0093.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0094.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0096.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0097.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0102.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques (morgue)" },
      
      // Photos du cimetière (obsèques)
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0020.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0021.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0022.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0023.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0024.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0034.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0035.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0036.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0037.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0045.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0046.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0047.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0048.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0049.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0122.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0126.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0127.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0128.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0130.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0131.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0132.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques (cimetière)" },
      
      // Autres photos
      { src: "/assets/img/portfolio/IMG_20240915_050449_957.jpg", alt: "Henock", category: "Photos Henock" },
      { src: "/assets/img/portfolio/bain.PNG", alt: "Bain de consolation", category: "Photos des obsèques (morgue)" }
    ]
  },

  // 6. VIDÉOS (maximum 4)
  videos: {
    available: [
      {
        title: "Veillée mortuaire",
        url: "https://youtu.be/alXebRn-WJY",
        type: "wake"
      },
      {
        title: "Morgue",
        url: "https://youtu.be/22zi-VKROwc",
        type: "morgue"
      },
      {
        title: "Vidéo des funérailles - Cimetière",
        url: "https://youtu.be/239sjdqiMNc",
        type: "cemetery"
      },
      {
        title: "Vidéo hommage - Henock",
        url: "https://youtu.be/ChOY6AXYWdQ",
        type: "tribute"
      }
    ],
    youtubeLinks: [
      "https://youtu.be/alXebRn-WJY",
      "https://youtu.be/22zi-VKROwc",
      "https://youtu.be/239sjdqiMNc",
      "https://youtu.be/ChOY6AXYWdQ"
    ]
  },

  // 7. TÉMOIGNAGES
  testimonials: [
    {
      text: "Henock Ngandu Kabadi était bien plus qu'un passionné de football ; il incarnait la détermination, le talent et la persévérance. Dès son plus jeune âge, Henock a su captiver son entourage par son habileté avec le ballon et son esprit d'équipe. Son talent l'a rapidement hissé au sommet du football congolais, attirant l'attention de grands noms comme Claude Le Roy. Sélectionné pour un stage de perfectionnement en France à seulement 14 ans, il a fait preuve d'un potentiel exceptionnel.\n\nBien que les chemins de la vie l'aient finalement éloigné du terrain de football professionnel, Henock n'a jamais abandonné sa passion pour le sport qui avait tant marqué son enfance. Sa vie, partagée entre ses responsabilités familiales et ses rêves sportifs, a été une source d'inspiration pour ceux qui l'entouraient. En tant que père aimant de sa fille Karine et frère dévoué au sein de sa famille, Henock a toujours montré l'importance de la famille, du travail acharné et de l'amour pour ce que l'on fait.\n\nSon départ laisse un grand vide, mais son souvenir, marqué par ses accomplissements et sa personnalité chaleureuse, restera à jamais gravé dans nos cœurs. Henock, tu étais un véritable modèle, et ta mémoire continuera de briller à travers ceux que tu as touchés.",
      author: "Wazamani",
      relationship: "",
      image: "/assets/img/portfolio/temoignage/wazamani.jpg"
    },
    {
      text: "À Toi, Mon Frère\n\nDans le doux souffle du vent, je sens ton passage,\nTon rire, ton cœur, résonnent au-delà des âges.\nTon absence est un vide, un chagrin silencieux,\nMais je sais que tu brilles parmi les bienheureux.\n\nTon amour, ton sourire, demeurent éternels,\nComme les étoiles qui veillent dans le ciel.\nChaque instant partagé, gravé dans ma mémoire,\nUn trésor que je garde, une flamme d'espoir.\n\nMême si nos chemins se séparent ici-bas,\nJe sais qu'un jour, au-delà des tracas,\nNous nous retrouverons, dans la lumière infinie,\nDans les bras de Jésus, pour l'éternité réunis.\n\nAdieu pour un temps, mon frère bien-aimé,\nDans l'espoir de ce jour, je reste à espérer.\nEn Christ, nous nous reverrons, dans Sa gloire,\nEt là, sans fin, nous partagerons notre histoire.",
      author: "Israel Mutombo",
      relationship: "",
      image: "/assets/img/portfolio/temoignage/israel.jpg"
    }
  ],
  poems: [],
  specialTributes: [],

  // 8. CITATIONS ET VERSETS (4 maximum)
  spiritual: {
    religion: "Chrétien",
    favoriteVerses: [
      "Jean 14:27 - Je vous laisse la paix, je vous donne ma paix. Je ne vous la donne pas comme le monde la donne. Que votre cœur ne se trouble point, et ne s'alarme point.",
      "2 Corinthiens 5:8 - Nous sommes pleins de confiance, et nous aimons mieux quitter ce corps et demeurer auprès du Seigneur.",
      "Apocalypse 21:4 - Il essuiera toute larme de leurs yeux, et la mort ne sera plus, et il n'y aura plus ni deuil, ni cri, ni douleur, car les premières choses ont disparu."
    ],
    favoriteQuotes: [
      "Le football n'est pas seulement un sport, c'est une passion qui rassemble les cœurs et crée des souvenirs éternels."
    ],
    personalWords: "Le football n'est pas seulement un sport, c'est une passion qui rassemble les cœurs et crée des souvenirs éternels.",
    favoriteSongs: [],
    religiousHymns: []
  },

  // 9. DESIGN
  design: {
    favoriteColors: ["Or", "Blanc", "Noir"],
    colorsToAvoid: [],
    style: "Sobre et élégant",
    logo: "",
    favicon: "",
    backgroundImages: [],
    welcomePhrases: [
      "En mémoire de",
      "Frère bien-aimé",
      "Passionné de football",
      "Petit Zidane",
      "Pour toujours dans nos cœurs"
    ],
    animationStyle: "Douces et subtiles"
  },

  // 10. CONTACT
  contact: {
    siteContact: {
      name: "Israel Mutombo",
      relationship: "",
      phone: "+243 991 683 269",
      email: "imdigitallabs@gmail.com",
      whatsapp: "+243 991 683 269"
    },
    condolences: {
      showContact: true,
      phone: "+243 991 683 269",
      email: "israelmutombo9319@gmail.com",
      whatsapp: "+243 991 683 269",
      postalAddress: ""
    }
  },

  // 11. FONCTIONNALITÉS SUPPLÉMENTAIRES (pour référence)
  features: {
    advancedContactForm: true,
    socialMediaIntegration: true,
    blogSection: false,
    otherFeatures: []
  },

  // 12. INSPIRATIONS (pour référence)
  inspirations: {
    referenceSites: [],
    specificElements: []
  },

  // 13. DATES ET DÉLAIS (pour référence)
  timeline: {
    launchDate: "",
    upcomingEvents: []
  }
}

// Fonctions utilitaires pour formater les dates
export function formatDate(dateObj) {
  if (!dateObj) return ""
  const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ]
  return `${dateObj.day} ${months[dateObj.month - 1]} ${dateObj.year}`
}

export function formatDateShort(dateObj) {
  if (!dateObj) return ""
  return `${dateObj.day}/${dateObj.month}/${dateObj.year}`
}

export function getAge(birthDate, deathDate) {
  let age = deathDate.year - birthDate.year
  if (deathDate.month < birthDate.month || 
      (deathDate.month === birthDate.month && deathDate.day < birthDate.day)) {
    age--
  }
  return age
}

// Fonction pour calculer le nombre de jours depuis le décès
export function getDaysSinceDeath(deathDate) {
  const death = new Date(deathDate.year, deathDate.month - 1, deathDate.day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  death.setHours(0, 0, 0, 0)
  
  const diffTime = today - death
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  return diffDays
}

