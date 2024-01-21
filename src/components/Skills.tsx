import styles from "../styles/Skills.module.css";
import { Button } from "@mui/material";

const Skills = () => {
  return (
    <div className={styles.all}>
      <h1
        style={{
          margin: "0",
          paddingBottom: "2%",
          color: "#167c9e",
          fontSize: "30px",
        }}
      >
        Skills
      </h1>
      <div style={{ paddingBottom: "1%" }}>
        <Button
          style={{
            backgroundColor: "white",
            color: "#167c9e",
            borderRadius: "10%",
            borderWidth: "1px",
            borderColor: "#167c9e",
            borderStyle: "solid",
            fontSize: "15px",
            // padding: "2%",
            fontFamily: "Outfit",
            marginRight: "1%",
            // width: "20%",
          }}
          className={styles.button}
        >
          Python
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "#167c9e",
            borderRadius: "10%",
            borderWidth: "1px",
            borderColor: "#167c9e",
            borderStyle: "solid",
            fontSize: "15px",
            // padding: "2%",
            fontFamily: "Outfit",
            marginRight: "1%",
            // width: "20%",
          }}
          className={styles.button}
        >
          Java
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "#167c9e",
            borderRadius: "10%",
            borderWidth: "1px",
            borderColor: "#167c9e",
            borderStyle: "solid",
            fontSize: "15px",
            // padding: "2%",
            fontFamily: "Outfit",
            marginRight: "1%",
            // width: "20%",
          }}
          className={styles.button}
        >
          C
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "#167c9e",
            borderRadius: "10%",
            borderWidth: "1px",
            borderColor: "#167c9e",
            borderStyle: "solid",
            fontSize: "15px",
            // padding: "2%",
            fontFamily: "Outfit",
            marginRight: "1%",
            // width: "20%",
          }}
          className={styles.button}
        >
          HTML
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "#167c9e",
            borderRadius: "10%",
            borderWidth: "1px",
            borderColor: "#167c9e",
            borderStyle: "solid",
            fontSize: "15px",
            // padding: "2%",
            fontFamily: "Outfit",
            marginRight: "1%",

            // width: "20%",
          }}
          className={styles.button}
        >
          CSS
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "#167c9e",
            borderRadius: "10%",
            borderWidth: "1px",
            borderColor: "#167c9e",
            borderStyle: "solid",
            fontSize: "15px",
            // padding: "2%",
            fontFamily: "Outfit",
            marginRight: "1%",

            // width: "20%",
          }}
          className={styles.button}
        >
          JavaScript
        </Button>
      </div>
      <div>
        <Button
          style={{
            backgroundColor: "white",
            color: "#167c9e",
            borderRadius: "10%",
            borderWidth: "1px",
            borderColor: "#167c9e",
            borderStyle: "solid",
            fontSize: "15px",
            // padding: "2%",
            fontFamily: "Outfit",
            marginRight: "1%",

            // width: "20%",
          }}
          className={styles.button}
        >
          TypeScript
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "#167c9e",
            borderRadius: "10%",
            borderWidth: "1px",
            borderColor: "#167c9e",
            borderStyle: "solid",
            fontSize: "15px",
            // padding: "2%",
            fontFamily: "Outfit",
            marginRight: "1%",

            // width: "20%",
          }}
          className={styles.button}
        >
          React
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "#167c9e",
            borderRadius: "10%",
            borderWidth: "1px",
            borderColor: "#167c9e",
            borderStyle: "solid",
            fontSize: "15px",
            // padding: "2%",
            fontFamily: "Outfit",
            marginRight: "1%",

            // width: "20%",
          }}
          className={styles.button}
        >
          Next.js
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "#167c9e",
            borderRadius: "10%",
            borderWidth: "1px",
            borderColor: "#167c9e",
            borderStyle: "solid",
            fontSize: "15px",
            // padding: "2%",
            fontFamily: "Outfit",
            marginRight: "1%",

            // width: "20%",
          }}
          className={styles.button}
        >
          Node JS
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "#167c9e",
            borderRadius: "10%",
            borderWidth: "1px",
            borderColor: "#167c9e",
            borderStyle: "solid",
            fontSize: "15px",
            // padding: "2%",
            fontFamily: "Outfit",
            marginRight: "1%",

            // width: "20%",
          }}
          className={styles.button}
        >
          Jupyter Notebook
        </Button>
      </div>
    </div>
  );
};

export { Skills };
