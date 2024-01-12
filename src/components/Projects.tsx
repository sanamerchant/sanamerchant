import styles from "../styles/Projects.module.css";
import { Box, Grid, Button } from "@mui/material";
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
                  Applied SVM, kNN, Naive Bayes, Decision Tree, Adaboost, &
                  Bagging, achieving 89.58% accuracy to classify articles as
                  real/fake news.
                  <ul
                    style={{
                      display: "flex",
                      lineHeight: "1.2",
                      listStyleType: "circle",
                      color: "#167c9e",
                      paddingLeft: "20px",
                    }}
                  >
                    <li style={{ marginRight: "6%" }}>Python</li>
                    <li>Scikit-Learn</li>
                  </ul>
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={shellImage} alt="Shell Project" />
                <h2 className={styles.project_title}>Shell</h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Implemented a custom Unix shell using C with features such as
                  command parsing, employing foreground and background
                  processing, handling signals, and file redirection.
                  <br />
                  <ul
                    style={{
                      display: "flex",
                      lineHeight: "1.2",
                      listStyleType: "circle",
                      color: "#167c9e",
                      paddingLeft: "20px",
                    }}
                  >
                    <li style={{ marginRight: "6%" }}>C</li>
                  </ul>
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
                  Created an Indexer to parse XML documents and programmed a
                  Ranking Function to produce search results based on Term
                  Frequency and Inverse Document Frequency.
                  <br />
                  <ul
                    style={{
                      display: "flex",
                      lineHeight: "1.2",
                      listStyleType: "circle",
                      color: "#167c9e",
                      paddingLeft: "20px",
                    }}
                  >
                    <li style={{ marginRight: "6%" }}>Python</li>
                  </ul>
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
                  Implemented Djikstra and Breadth First, computing results
                  based user priorities: cost, time, & directness.
                  <br />
                  <ul
                    style={{
                      display: "flex",
                      lineHeight: "1.2",
                      listStyleType: "circle",
                      color: "#167c9e",
                      paddingLeft: "20px",
                    }}
                  >
                    <li style={{ marginRight: "6%" }}>Java</li>
                  </ul>
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={seamImage} alt="Seam Carver Project" />
                <h2 className={styles.project_title}>Seam Carver</h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Employed dynamic programming to create an image resizing
                  program that reduces the width of a given image. Stored pixel
                  importance values in 2D array to minimize data loss.
                  <br />
                  <ul
                    style={{
                      display: "flex",
                      lineHeight: "1.2",
                      listStyleType: "circle",
                      color: "#167c9e",
                      paddingLeft: "20px",
                    }}
                  >
                    <li style={{ marginRight: "6%" }}>Java</li>
                  </ul>
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
                  Developed Decision Tree algorithm with prediction accuracy
                  {" >"}82%.
                  <br />
                  <br />
                  <ul
                    style={{
                      display: "flex",
                      lineHeight: "1.2",
                      listStyleType: "circle",
                      color: "#167c9e",
                      paddingLeft: "20px",
                    }}
                  >
                    <li style={{ marginRight: "6%" }}>Java</li>
                  </ul>
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={dbImage} alt="Database Project" />
                <h2 className={styles.project_title}>Database</h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Developed a multithreaded server database, enabling concurrent
                  client connections. Implemented fine grained locking for
                  thread management and data protection.
                  <br />
                  <ul
                    style={{
                      display: "flex",
                      lineHeight: "1.2",
                      listStyleType: "circle",
                      color: "#167c9e",
                      paddingLeft: "20px",
                    }}
                  >
                    <li style={{ marginRight: "6%" }}>C</li>
                  </ul>
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
                  Created an interpreter to read, parse, and process user input.
                  Utilized extensive pattern matching and error checking.
                  <br />
                  <ul
                    style={{
                      display: "flex",
                      lineHeight: "1.2",
                      listStyleType: "circle",
                      color: "#167c9e",
                      paddingLeft: "20px",
                    }}
                  >
                    <li style={{ marginRight: "6%" }}>Racket</li>
                  </ul>
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
