import styles from "../styles/About.module.css";

import { Box, Grid } from "@mui/material";

const About = () => {
  return (
    <div className={styles.all}>
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
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ marginLeft: "35%", lineHeight: 0.4 }}>
              <br />
              <br />
              <br />
              {/* <br />
              <br /> */}
              {/* <br /> */}
              {/* <br /> */}
              <h2 style={{ color: "#167c9e" }}>University of Central Asia</h2>
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
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export { About };
