import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

import { projects } from "../data/projects";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.content}>
      <section
        id="about"
        className={styles.section}
      >
        <h2 className={styles.heading}>
          Sobre Mim
        </h2>

        <p className={styles.about}>
          Desenvolvedora Front-End em formação pela EBAC,
          com experiência em React, Next.js,
          TypeScript e desenvolvimento de interfaces modernas,
          responsivas e acessíveis.
        </p>
      </section>

      <section
        id="projects"
        className={styles.section}
      >
        <h2 className={styles.heading}>
          Projetos
        </h2>

        <div className={styles.projects}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      <section
        id="skills"
        className={styles.section}
      >
        <Skills />
      </section>

      <section
        id="contact"
        className={styles.section}
      >
        <Contact />
      </section>
    </main>
  );
}