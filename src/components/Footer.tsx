import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.all}>
      <p>Let's Connect</p>
      <img
        style={{
          width: "20%",
          height: "20%",
          marginLeft: "5%",
          display: "inline",
        }}
        src="../../public/pfp.png"
      />
    </div>
  );
};

export { Footer };
