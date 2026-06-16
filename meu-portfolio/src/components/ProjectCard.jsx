import styles from "./ProjectCard.module.css"

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <img className={styles.preview} src={project.image} alt={`${project.title} preview`} />
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>
        <div className={styles.techs}>
          {project.techs.map((tech) => (
            <span key={tech} className={styles.tech}>{tech}</span>
          ))}
        </div>
        <div className={styles.actions}>
          <a className={styles.link} href={project.repo} target="_blank" rel="noreferrer">
            Ver repositório
          </a>
          {project.demo && (
            <a className={styles.link} href={project.demo} target="_blank" rel="noreferrer">
              Ver demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
