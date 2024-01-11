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
                <img height="200px" src={nlpImage} alt="NLP Project" />
                <h2 className={styles.project_title}>
                  NLP for “Fake News” Classification
                </h2>
                <p>
                  Applied 6 ML algorithms (SVM, kNN, Naive Bayes, Decision Tree,
                  Adaboost, & Bagging) to classify articles as real/fake news.
                  Achieved 89.58% article classification accuracy by including
                  clickbait classification, training on 32,000 article titles
                  https://bit.ly/3rVGWdt.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="200px" src={shellImage} alt="Shell Project" />
                <h2 className={styles.project_title}>Shell</h2>
                <p>
                  Implemented a custom Unix shell using C, utlizing system calls
                  and process management. Developed features such as command
                  parsing, executing external commands, employing foreground and
                  background processing, handling signals, and file redirection.
                </p>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="200px" src={searchImage} alt="Search Project" />
                <h2 className={styles.project_title}>
                  Search Engine Implementation
                </h2>
                <p>
                  Implemented an Indexer to parse XML documents and determine
                  authority. Programmed a Ranking Function to produce search
                  results based on Term Frequency and Inverse Document
                  Frequency.
                </p>
                <br />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img
                  height="200px"
                  src={plannerImage}
                  alt="Travel Planner Project"
                />
                <h2 className={styles.project_title}>
                  Graph Algorithm Based Travel Planner
                </h2>
                <p>
                  Collaborated with a cross-functional team to develop a system
                  that enables users to strategically plan routes on 3
                  priorities. Implemented 2 search algorithms using Python,
                  Djikstra and Breadth First, computing results based cost,
                  time, & directness.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="200px" src={seamImage} alt="Seam Carver Project" />
                <h2 className={styles.project_title}>Seam Carver</h2>
                <p>
                  Employed dynamic programming to create an image resizing
                  program that reduces the width of a given image. Stored pixel
                  importance values in 2D array to minimize data loss.
                </p>
                <br />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img
                  height="200px"
                  src={treeImage}
                  alt="Decision Tree Project"
                />
                <h2 className={styles.project_title}>Decision Tree</h2>
                <p>
                  Designed & developed a Python-based Decision Tree algorithm
                  with a team of 2, achieving a prediction accuracy {">"}85%.
                  Facilitated agile practices such as standups to share
                  accomplishment, status, and stuck points.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="200px" src={dbImage} alt="Database Project" />
                <h2 className={styles.project_title}>Database</h2>
                <p>
                  Developed a multithreaded server database, enabling concurrent
                  client connections. Implemented fine grained locking for
                  multithread management and data protection.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <br />
                <br />
                <br />
                <img
                  width="500px"
                  src={interpreterImage}
                  alt="Interpreter Project"
                />
                <br />
                <br />
                <h2 className={styles.project_title}>Interpreter</h2>
                <p>
                  Created an interpreter to read, parse, and process user
                  input.Utilized extensive pattern matching and error checking.
                </p>
                <br />
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export { Projects };
