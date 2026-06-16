import portalImage from "../screenshots/portal-de-viagem.png";
import cineImage from "../screenshots/cinelist.png";
import iphoneImage from "../screenshots/iphone.png";

export const projects = [
  {
    id: 1,
    title: "Portal de Viagem",
    description:
      "Aplicação desenvolvida com Next.js para apresentar destinos turísticos, utilizando navegação entre páginas, rotas dinâmicas e design responsivo.",
    techs: ["Next.js", "React", "TypeScript", "CSS Modules"],
    repo: "https://github.com/CintiaLima-83/Portal-de-viagem",
    demo: "https://portal-de-viagem.vercel.app/",
    image: portalImage,
  },
  {
    id: 2,
    title: "CineList",
    description:
      "Aplicação para busca e visualização de filmes utilizando a API do TMDB, com pesquisa em tempo real e interface moderna.",
    techs: ["Next.js", "React", "API REST", "TMDB"],
    repo: "https://github.com/CintiaLima-83/nextjs-cinelist",
    demo: "https://nextjs-cinelist.vercel.app/",
    image: cineImage,
  },
  {
    id: 3,
    title: "iPhone 17 Pro",
    description:
      "Landing page inspirada no design da Apple, desenvolvida com React e TypeScript, focada em responsividade, animações e experiência visual.",
    techs: ["React", "TypeScript", "Vite", "CSS Modules"],
    repo: "https://github.com/CintiaLima-83/iphone-17",
    demo: "https://iphone-17-iota.vercel.app/",
    image: iphoneImage,
  },
];