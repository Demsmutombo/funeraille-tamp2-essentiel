// Données du mémorial - Formulaire Essentiel
// 
// Ce fichier contient toutes les données du site mémorial selon le questionnaire essentiel.
// Veuillez remplir chaque section avec les informations fournies dans le questionnaire rempli.
// 
// Sections à remplir selon le questionnaire essentiel :
// 1. Informations personnelles du défunt
// 2. Informations familiales
// 3. Biographie (1-2 paragraphes, environ 200-300 mots)
// 4. Informations sur les obsèques (veillée, cérémonie, sépulture)
// 5. Photos (maximum 15 photos)
// 6. Contact (nom, téléphone, email, WhatsApp)
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

  // 3. BIOGRAPHIE (1-2 paragraphes, environ 200-300 mots)
  biography: {
    fullBiography: `Henock Ngandu Kabadi était un passionné de football qui a marqué le football congolais de son talent et de sa détermination. Dès son jeune âge, né le 15 mai 1992 en République Démocratique du Congo, il a montré un talent exceptionnel pour le football. Au sein d'une famille de 7 enfants, dont il était le 5ème, Henock a développé une passion profonde pour ce sport qui allait marquer toute sa vie. Il a fréquenté l'École catholique Sainte-Marie Goretti, puis le Télé de la Victoire et l'Université Révérend Kim, tout en poursuivant sa passion pour le ballon rond.

Henock a été désigné meilleur joueur au sein du COÉ et a été sélectionné pour un stage de perfectionnement en France à l'âge de 14 ans. Son jeu a surpris les sélectionneurs, dont Claude Le Roy, entraîneur des Léopards de la RDC, qui l'a surnommé "Petit Zidane" en raison de son style de jeu remarquable. Bien que les circonstances de la vie l'aient finalement éloigné du football professionnel, Henock n'a jamais abandonné sa passion pour ce sport. Il a continué à vivre pour le football, partageant son amour du jeu avec tous ceux qui l'entouraient, notamment lors de sa résidence en Afrique du Sud, à Pretoria puis à Cape Town.

Henock était connu pour son grand cœur, sa détermination et sa persévérance. Il était un père aimant pour sa fille Karine Fumbi et un frère dévoué au sein de sa famille. Sa personnalité chaleureuse et son esprit d'équipe ont marqué tous ceux qui l'ont connu. Il incarnait des valeurs de passion, de famille, de détermination et de travail acharné, laissant une empreinte indélébile dans le cœur de tous ceux qui ont eu la chance de le côtoyer. Bien qu'il nous ait quittés le 2 septembre 2024, son souvenir vivra éternellement à travers ceux qu'il a touchés de sa générosité et de son amour pour le sport.`
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

  // 5. PHOTOS (maximum 15)
  photos: {
    total: 15, // Total des photos disponibles (maximum 15)
    categories: [
      "Photos de la vie du défunt",
      "Photos des obsèques",
      "Photos de famille"
    ],
    mainPhoto: "/assets/img/portfolio/henock/henock.jpg", // Photo principale à remplacer
    gallery: [
      // Photos de la vie du défunt (sélection des meilleures)
      { src: "/assets/img/portfolio/henock/henock.jpg", alt: "Henock Ngandu Kabadi", category: "Photos de la vie du défunt" },
      { src: "/assets/img/portfolio/henock/henock (2).jpg", alt: "Henock", category: "Photos de la vie du défunt" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0023.jpg", alt: "Henock", category: "Photos de la vie du défunt" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0024.jpg", alt: "Henock", category: "Photos de la vie du défunt" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0025.jpg", alt: "Henock", category: "Photos de la vie du défunt" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0026.jpg", alt: "Henock", category: "Photos de la vie du défunt" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0027.jpg", alt: "Henock", category: "Photos de la vie du défunt" },
      { src: "/assets/img/portfolio/henock/IMG-20240919-WA0038.jpg", alt: "Henock", category: "Photos de la vie du défunt" },
      { src: "/assets/img/portfolio/IMG_20240915_050449_957.jpg", alt: "Henock", category: "Photos de la vie du défunt" },
      
      // Photos des obsèques (sélection)
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0055.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0090.jpg", alt: "Obsèques - Morgue", category: "Photos des obsèques" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0020.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0024.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0127.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0132.jpg", alt: "Obsèques - Cimetière", category: "Photos des obsèques" }
    ]
  },

  // Sections non incluses dans l'offre Essentiel (structures vides pour éviter les erreurs)
  videos: {
    available: []
  },
  testimonials: [],
  spiritual: {
    favoriteQuotes: []
  },

  // 6. CONTACT
  contact: {
    name: "Israel Mutombo",
    phone: "+243 991 683 269",
    email: "imdigitallabs@gmail.com",
    whatsapp: "+243 991 683 269"
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

