import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contato</h2>

      <p>Email:</p>

      <a href="mailto:limacintia82@gmail.com">
        limacintia82@gmail.com
      </a>
    </section>
  );
}