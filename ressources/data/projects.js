export const projects = [
  {
    id: "project1",
    name: "M.E.R.N-Marketplace",
    type: "web-app",
    description: [
      "Marketplace Website created with M.E.R.N Stack ( MongoDB, Express, React, NodeJs ) with payment system with Stripe",
      "To understand and assimilate the M.E.R.N stack, use react pattern (custom hook, context, HOC, compound component, etc ...)",
    ],
    images: [
      "ressources/projects/Capture d’écran 2021-02-19 à 02.08.11.png",
      "ressources/projects/Capture d’écran 2021-02-19 à 02.08.39.png",
      "ressources/projects/Capture d’écran 2021-02-19 à 02.09.34.png",
    ],
    functionalities: [
      "Sign up / Sign in user",
      "Select items",
      "Cart with dynamic price",
      "Address and delivery type information",
      "Redirection on the stripe platform",
    ],
    technicalStack: {
      client: [
        "React v17.0.1",
        "Redux: v4.0.0",
        "Bootstrap v4.5.3",
        "Payment plateform - Stripe / React Stripe v1",
      ],
      server: ["Node.js", "Express.js", "MongoDb", "Stripe.js"],
    },
    links: {
      github: "https://github.com/Arnaud-Adon/M.E.R.N-Marketplace",
      app: "",
    },
  },
  {
    id: "project2",
    name: "nextJs-site-immobilier",
    type: "web-app",
    description: [
      "Site d'achat de biens immobiliers développé avec Next.js qui est un Framework React. Pour avoir la possibilité de faire des pages statiques ou du rendu côté serveur afin d'améliorer le référencement. Les données utilisées pour le site proviennent d'une API publique externe hébergée sur Heroku pour une formation",
    ],
    images: [
      "ressources/projects/Capture d’écran 2021-03-17 à 16.20.47.png",
      "ressources/projects/Capture d’écran 2021-03-17 à 16.21.08.png",
      "ressources/projects/Capture d’écran 2021-03-17 à 16.21.45.png",
    ],
    functionalities: [
      "Sign in user",
      "List of properties with their description",
      "Possibility to filter them with requirements or pages",
    ],
    technicalStack: {
      client: ["Next JS v10.0.5", "MDBReact v5.0.1", "JS Cookie v2.2.1"],
      server: ["NodeJS v14.11.0"],
    },
    links: {
      github: "https://github.com/Arnaud-Adon/nextJs-site-immobilier",
      app: "https://next-js-site-immobilier-d9e3ohjxp.vercel.app/",
    },
  },
  {
    id: "project3",
    name: "job-location-app",
    type: "mobile-app",
    description: [
      "Une application mobile permettant de localiser sur une carte différents emplois au alentour de la position de l'appareil.",
    ],
    images: [
      "ressources/projects/Simulator Screen Shot - iPhone 12 Pro Max - 2021-06-16 at 17.50.46.png",
      "ressources/projects/Simulator Screen Shot - iPhone 12 Pro Max - 2021-06-16 at 17.51.49.png",
      "ressources/projects/Simulator Screen Shot - iPhone 12 Pro Max - 2021-06-16 at 17.52.22.png",
      "ressources/projects/Simulator Screen Shot - iPhone 12 Pro Max - 2021-06-16 at 17.52.34.png",
      "ressources/projects/Simulator Screen Shot - iPhone 12 Pro Max - 2021-06-16 at 17.52.49.png",
    ],
    functionalities: [
      "Authentification with Facebook account is required to log in",
      "Jobs are listed as swipe card to drag",
      "Favorite jobs list are saved when the application is close",
    ],
    technicalStack: {
      client: [
        "Expo",
        "React Native",
        "Redux",
        "Redux-persist",
        "AsyncStorage",
        "axios",
      ],
      server: [],
    },
    links: {
      github: "https://github.com/Arnaud-Adon/job-location-app",
      app: "",
    },
  },
  {
    id: "project4",
    name: "Versus-fighting-improvement-app",
    type: "mobile-app",
    description: [
      "Une application mobile permettant de localiser sur une carte différents emplois au alentour de la position de l'appareil.",
    ],
    images: [
      "ressources/projects/Capture d’écran 2021-05-13 à 01.10.19.png",
      "ressources/projects/Capture d’écran 2021-05-13 à 01.10.34.png",
      "ressources/projects/Capture d’écran 2021-05-13 à 01.10.52.png",
      "ressources/projects/Capture d’écran 2021-05-13 à 01.09.54.png",
      "ressources/projects/Capture d’écran 2021-09-20 à 22.53.02.png",
      "ressources/projects/Capture d’écran 2021-09-23 à 22.57.10.png",
    ],
    functionalities: [
      "Authentification with Facebook account is required to log in",
      "Jobs are listed as swipe card to drag",
      "Favorite jobs list are saved when the application is close",
    ],
    technicalStack: {
      client: [
        "Expo",
        "React Native",
        "Redux",
        "Redux-saga",
        "AsyncStorage",
        "axios",
        "Jest - Testing library",
        "CI - CircleCI",
      ],
      server: [
        "Node.js",
        "Express.js",
        "Base de donnée : Cluster MongoDb Atlas sous AWS",
        "Mongoose",
        "Passport.js",
        "Hébergement sur Heroku",
        "Jest - Testing library - Supertest",
        "CI/CD - CircleCI",
      ],
    },
    links: {
      github: "https://github.com/Arnaud-Adon/job-location-app",
      app: "",
    },
  },
  {
    id: "project5",
    name: "snake-javascript-project",
    type: "mobile-app",
    description: ["Jeu du serpent construit avec du javascript vanilla"],
    images: ["ressources/projects/Capture d’écran 2021-09-27 à 04.06.26.png"],
    functionalities: [
      "Creation du terrain de jeu avec un canvas",
      "Gestion du serpent avec l'écoute de certaines touches",
      "Gestion des colisions du sertent avec les extremités et son corps",
    ],
    technicalStack: {
      client: [],
      server: [],
    },
    links: {
      github: "https://github.com/Arnaud-Adon/Snake-javascript-project",
      app: "",
    },
  },
];
