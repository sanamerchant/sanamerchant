import styles from "../styles/About.module.css";
import { Box, Grid, Button, Link } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <div id="Projects" className={styles.all}>
      <Box className={styles.about_box}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={styles.left_text}>
              <h1 style={{ color: "#167c9e" }}>Hi, I'm Sana Merchant!</h1>
              <p style={{ fontSize: "20px" }}>
                I'm passionate about the harnessing technology's transformative
                potential.
              </p>
              <p style={{ fontSize: "20px" }}>
                I'm a sophomore studying Computer Science at Brown University.
                Blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah
              </p>
              <p style={{ fontSize: "20px" }}>
                I'm a sophomore studying Computer Science at Brown University.
                Blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah
              </p>
              <br />
              <ScrollLink to="projects" smooth={true} duration={500}>
                <Button
                  style={{
                    backgroundColor: "#167c9e",
                    color: "white",
                    fontSize: "15px",
                    padding: "2%",
                  }}
                  className={styles.button}
                >
                  Projects
                </Button>
              </ScrollLink>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ marginLeft: "35%", lineHeight: 0.4 }}>
              <br />
              <br />
              <br />

              <div className={styles.timeline}>
                <div className={styles.container_left}>
                  <div className={styles.content}>
                    <h2>2017</h2>
                    <p>Lorem ipsum..</p>
                  </div>
                </div>
                <div className={styles.container_right}>
                  <div className={styles.content}>
                    <h2>2016</h2>
                    <p>Lorem ipsum..</p>
                  </div>
                </div>
              </div>
              {/* <h2 style={{ color: "#167c9e" }}>University of Central Asia</h2>
              <p>Data Analyst</p>
              <p>June - October 2023</p>
              <br />
              <h2 style={{ color: "#167c9e" }}>Arvasit Technolabs</h2>
              <p>Software Engineer Intern</p>
              <p>May - June 2023</p>
              <br />
              <h2 style={{ color: "#167c9e" }}>Hack @ Brown</h2>
              <p>Front End Developer</p>
              <p>September 2023 - Present</p>
              <br />
              <h2 style={{ color: "#167c9e" }}>Full Stack at Brown</h2>
              <p>Website Developer</p>
              <p>September 2023 - Present</p>
              <p style={{ marginTop: "15%" }}>
                Click{" "}
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/12OlUldnCOzIZxElj3o6gjMR6wqIgVFir/view?usp=sharing"
                >
                  <b>here</b>
                </a>{" "}
                to view my resume
              </p> */}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export { About };
