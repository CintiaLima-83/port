import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Navigation />
      <Home />
    </div>
  );
}