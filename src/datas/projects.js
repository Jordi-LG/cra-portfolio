import gardien from "src/assets/images/gardien.png";
import mariochallenge from "src/assets/images/mariochallenge.png";
import portfolio from "src/assets/images/logoWorks.png";
import gwith from "src/assets/images/gwith.png";

export default [
  {
    id: 1,
    title: "Un gardin près de chez soi",
    describe:
      "Site de recherches et de mises en relation pour la garde de son animal domestique. Projet final The Hacking Project",
    urlGitHub: "https://github.com/Jordi-LG/Ungardienpresdechezsoi",
    url: "https://ungardienpresdechezsoi.herokuapp.com/",
    trello: "https://trello.com/b/ZgBYAvBN/ungardienpretdechezsoi",
    tags: ["Ruby", "Javascript", "Ruby On Rails", "Bootstrap", "PostgreSQL"],
    img: gardien,
  },
  {
    id: 2,
    title: "Exercice Mario",
    describe: "Un challenge O'Clock visuellement adapté en Vue.js",
    urlGitHub: "https://github.com/Jordi-LG/challengeMario",
    url: "https://challenge-mario.glitch.me/",
    trello: "",
    tags: ["Javascript", "Vue.js", "Bootstrap"],
    img: mariochallenge,
  },
  {
    id: 3,
    title: "Portfolio",
    describe: "Mon portfolio réalisé en React/Redux",
    urlGitHub: "https://github.com/Jordi-LG/jordi-lg.github.io",
    url: "https://jordi-lg.github.io/",
    trello: "",
    tags: ["Javascript", "React", "Redux"],
    img: portfolio,
  },
  {
    id: 4,
    title: "GWITH - Game Where I'm The Hero",
    describe:
      "Application web pour jouer et créer des histoires. Partie front, connecté à une API réalisé avec Symfony",
    urlGitHub: "https://github.com/O-clock-Hyperion/projet-game-front",
    url: "http://ec2-34-207-67-75.compute-1.amazonaws.com/",
    trello: "",
    tags: ["Javascript", "React", "Redux", "Tailwind"],
    img: gwith,
  },
  // {
  //   title: 'The Kitten Project',
  //   describe: 'Un site pour acheter plein de mignonnes photos de chatons !',
  //   urlGitHub: 'https://github.com/Jordi-LG/thekittenproject',
  //   url: 'https://thekittenproject.herokuapp.com/',
  //   trello: '',
  //   tags: ['Ruby', 'Javascript', 'Ruby On Rails', 'Bootstrap'],
  // },
];
