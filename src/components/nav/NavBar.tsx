import styles from "../../styles/NavBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.back}>
      <p className={styles.section}>About</p>
      <p className={styles.section}>Experience</p>
      <p className={styles.section}>Projects</p>
    </div>
  );
};

export { NavBar };
