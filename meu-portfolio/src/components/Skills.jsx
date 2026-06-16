import styles from "./Skills.module.css";

import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import typescript from "../assets/icons/typescript.png";
import react from "../assets/icons/react.png";
import nextjs from "../assets/icons/nextjs.png";
import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";

const skills = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
];

export default function Skills() {
  return (
    <section>
      <h2 className={styles.title}>
        Habilidades
      </h2>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={styles.card}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className={styles.icon}
            />

            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}