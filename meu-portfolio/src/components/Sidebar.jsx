import styles from "./Sidebar.module.css";
import foto from "../screenshots/foto-perfil.jpg";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src={foto}
        alt="Cíntia Lima"
        className={styles.avatar}
      />

      <h1 className={styles.name}>
        Cíntia Lima
      </h1>

      <p className={styles.role}>
        Estudante de Ciência da Computação e desenvolvedora Full Stack em formação.
      </p>

      <div className={styles.divider}></div>

      <p className={styles.bio}>
        Apaixonada por tecnologia, desenvolvimento web e experiências digitais modernas.
      </p>

      <div className={styles.links}>
        <a
          href="mailto:limacintia82@gmail.com"
          className={styles.link}
        >
          Email
        </a>

        <a
          href="https://github.com/CintiaLima-83"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
      </div>
    </aside>
  );
}