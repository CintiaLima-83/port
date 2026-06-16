import styles from "./Navigation.module.css";

import {
  FolderOpen,
  User,
  Layers3,
  Mail
} from "lucide-react";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <a href="#projects">
        <FolderOpen size={24} />
        <span>Projetos</span>
      </a>

      <a href="#about">
        <User size={24} />
        <span>Sobre</span>
      </a>

      <a href="#skills">
        <Layers3 size={24} />
        <span>Habilidades</span>
      </a>

      <a href="#contact">
        <Mail size={24} />
        <span>Contato</span>
      </a>
    </nav>
  );
}