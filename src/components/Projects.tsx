import styles from "../styles/Projects.module.css";
import { Box, Grid } from "@mui/material";
import projImage from "../images/git.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className={styles.all}>
        <h1 style={{ marginBottom: "2%", color: "#167c9e" }}>Projects</h1>
        <div className={styles.outline}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="200px" src={projImage} alt="Project Picture" />
                <h2>Graph Algorithm Based Travel Planner</h2>
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
                <img height="200px" src={projImage} alt="Project Picture" />
                <h2>Decision Tree</h2>
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
                <img height="200px" src={projImage} alt="Project Picture" />
                <h2>NLP for “Fake News” Classification</h2>
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
                <img height="200px" src={projImage} alt="Project Picture" />
                <h2>Shell</h2>
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
                <img height="200px" src={projImage} alt="Project Picture" />
                <h2>Seam Carver</h2>
                <p>
                  Employed dynamic programming to create an image resizing
                  program that reduces the width of a given image. Stored pixel
                  importance values in 2D array to minimize data loss.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="200px" src={projImage} alt="Project Picture" />
                <h2>Search Engine Implementation</h2>
                <p>
                  Implemented an Indexer to parse XML documents and determine
                  authority. Programmed a Ranking Function to produce search
                  results based on Term Frequency and Inverse Document
                  Frequency.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="200px" src={projImage} alt="Project Picture" />
                <h2>Database</h2>
                <p>
                  Developed a multithreaded server database, enabling concurrent
                  client connections. Implemented fine grained locking for
                  multithread management and data protection.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="200px" src={projImage} alt="Project Picture" />
                <h2>Interpreter</h2>
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
