import styles from "../styles/Projects.module.css";
import { Box, Grid } from "@mui/material";
import projImage from "../images/git.png";
import nlpImage from "../images/nlp.png";
import seamImage from "../images/seam.png";
import shellImage from "../images/shell.png";
import searchImage from "../images/search.png";
import plannerImage from "../images/planner.png";
import treeImage from "../images/tree.png";
import interpreterImage from "../images/interpreter.png";
import dbImage from "../images/db.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className={styles.all}>
        <h1 style={{ marginBottom: "2%", color: "#167c9e", fontSize: "30px" }}>
          Projects
        </h1>
        <div className={styles.outline}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={nlpImage} alt="NLP Project" />
                <h2 className={styles.project_title}>
                  NLP for “Fake News” Classification
                </h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Here's one really long sentence so that you can see what it
                  looks like when you're project description is one sentence.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={shellImage} alt="Shell Project" />
                <h2 className={styles.project_title}>Shell</h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Here's one really long sentence so that you can see what it
                  looks like when you're project description is one sentence.
                </p>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={searchImage} alt="Search Project" />
                <h2 className={styles.project_title}>
                  Search Engine Implementation
                </h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Here's one really long sentence so that you can see what it
                  looks like when you're project description is one sentence.
                </p>
                <br />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img
                  height="175px"
                  src={plannerImage}
                  alt="Travel Planner Project"
                />
                <h2 className={styles.project_title}>
                  Graph Algorithm Based Travel Planner
                </h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Here's one really long sentence so that you can see what it
                  looks like when you're project description is one sentence.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={seamImage} alt="Seam Carver Project" />
                <h2 className={styles.project_title}>Seam Carver</h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Here's one really long sentence so that you can see what it
                  looks like when you're project description is one sentence.
                </p>
                <br />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img
                  height="175px"
                  src={treeImage}
                  alt="Decision Tree Project"
                />
                <h2 className={styles.project_title}>Decision Tree</h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Here's one really long sentence so that you can see what it
                  looks like when you're project description is one sentence.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={dbImage} alt="Database Project" />
                <h2 className={styles.project_title}>Database</h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Here's one really long sentence so that you can see what it
                  looks like when you're project description is one sentence.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <br />
                <br />
                <img
                  width="500px"
                  src={interpreterImage}
                  alt="Interpreter Project"
                />
                <h2 className={styles.project_title}>Interpreter</h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Here's one really long sentence so that you can see what it
                  looks like when you're project description is one sentence.
                </p>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export { Projects };
