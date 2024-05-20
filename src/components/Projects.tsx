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
                <p
                  style={{
                    textAlign: "left",
                    padding: "15px",
                  }}
                >
                  Applied 6 ML algorithms (SVM, kNN, Naive Bayes, Decision Tree,
                  Adaboost, & Bagging), achieving 89.58% article classification
                  accuracy to classify articles as real/fake news
                  <div>
                    <Button
                      style={{
                        marginTop: "3%",
                        backgroundColor: "white",
                        color: "#167c9e",
                        borderRadius: "10%",
                        borderWidth: "1px",
                        borderColor: "#167c9e",
                        borderStyle: "solid",
                        fontSize: "12px",
                        // padding: "2%",
                        fontFamily: "Outfit",
                        marginRight: "2%",
                        // width: "20%",
                      }}
                      className={styles.button}
                    >
                      Python
                    </Button>
                    <Button
                      style={{
                        marginTop: "3%",
                        backgroundColor: "white",
                        color: "#167c9e",
                        borderRadius: "10%",
                        borderWidth: "1px",
                        borderColor: "#167c9e",
                        borderStyle: "solid",
                        fontSize: "12px",
                        // padding: "2%",
                        fontFamily: "Outfit",
                        marginRight: "2%",
                        // width: "20%",
                      }}
                      className={styles.button}
                    >
                      scikit-learn
                    </Button>
                    <Button
                      style={{
                        marginTop: "3%",
                        backgroundColor: "white",
                        color: "#167c9e",
                        borderRadius: "10%",
                        borderWidth: "1px",
                        borderColor: "#167c9e",
                        borderStyle: "solid",
                        fontSize: "12px",
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
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={shellImage} alt="Shell Project" />
                <h2 className={styles.project_title}>Shell</h2>
                {/* <p
                  style={{
                    display: "flex",
                    // lineHeight: "1.2",
                    // listStyleType: "circle",
                    color: "#167c9e",
                    // paddingLeft: "20px",
                    textAlign: "center",
                    justifyContent: "center",
                    marginTop: "2%",
                  }}
                >
                  C
                </p> */}
                <p
                  style={{
                    textAlign: "left",
                    padding: "15px",
                  }}
                >
                  Implemented a custom Unix shell using C with features such as
                  command parsing, employing foreground and background
                  processing, handling signals, and file redirection.
                  <br />
                  {/* <ul
                    style={{
                      display: "flex",
                      lineHeight: "1.2",
                      listStyleType: "circle",
                      color: "#167c9e",
                      paddingLeft: "20px",
                    }}
                  >
                    <li style={{ marginRight: "6%" }}>C</li>
                  </ul> */}
                  <Button
                    style={{
                      marginTop: "3%",
                      backgroundColor: "white",
                      color: "#167c9e",
                      borderRadius: "10%",
                      borderWidth: "1px",
                      borderColor: "#167c9e",
                      borderStyle: "solid",
                      fontSize: "12px",
                      // padding: "2%",
                      fontFamily: "Outfit",
                      marginRight: "1%",
                      // width: "20%",
                    }}
                    className={styles.button}
                  >
                    C
                  </Button>
                </p>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={searchImage} alt="Search Project" />
                <h2 className={styles.project_title}>
                  Search Engine Indexer & Results
                </h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Created an Indexer to parse XML documents and programmed a
                  Ranking Function to produce relevant search results based on
                  Term Frequency and Inverse Document Frequency.
                  <br />
                  <Button
                    style={{
                      marginTop: "3%",
                      backgroundColor: "white",
                      color: "#167c9e",
                      borderRadius: "10%",
                      borderWidth: "1px",
                      borderColor: "#167c9e",
                      borderStyle: "solid",
                      fontSize: "12px",
                      // padding: "2%",
                      fontFamily: "Outfit",
                      marginRight: "1%",
                      // width: "20%",
                    }}
                    className={styles.button}
                  >
                    Python
                  </Button>
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
                  <Button
                    style={{
                      marginTop: "3%",
                      backgroundColor: "white",
                      color: "#167c9e",
                      borderRadius: "10%",
                      borderWidth: "1px",
                      borderColor: "#167c9e",
                      borderStyle: "solid",
                      fontSize: "12px",
                      // padding: "2%",
                      fontFamily: "Outfit",
                      marginRight: "1%",
                      // width: "20%",
                    }}
                    className={styles.button}
                  >
                    Java
                  </Button>
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={seamImage} alt="Seam Carver Project" />
                <h2 className={styles.project_title}>
                  Seam Carver Image Manipulation
                </h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Employed dynamic programming to create an image resizing
                  program that could reduce the width of a given image with
                  minimal data/feature loss
                  <br />
                  <Button
                    style={{
                      marginTop: "3%",
                      backgroundColor: "white",
                      color: "#167c9e",
                      borderRadius: "10%",
                      borderWidth: "1px",
                      borderColor: "#167c9e",
                      borderStyle: "solid",
                      fontSize: "12px",
                      // padding: "2%",
                      fontFamily: "Outfit",
                      marginRight: "1%",
                      // width: "20%",
                    }}
                    className={styles.button}
                  >
                    Java
                  </Button>
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
                  <Button
                    style={{
                      marginTop: "3%",
                      backgroundColor: "white",
                      color: "#167c9e",
                      borderRadius: "10%",
                      borderWidth: "1px",
                      borderColor: "#167c9e",
                      borderStyle: "solid",
                      fontSize: "12px",
                      // padding: "2%",
                      fontFamily: "Outfit",
                      marginRight: "1%",
                      // width: "20%",
                    }}
                    className={styles.button}
                  >
                    Java
                  </Button>
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.zoom}>
                <img height="175px" src={dbImage} alt="Database Project" />
                <h2 className={styles.project_title}>
                  Multithreaded Database Server
                </h2>
                <p style={{ textAlign: "left", padding: "15px" }}>
                  Developed a multithreaded server database, enabling concurrent
                  client connections. Each client could add, search, or delete
                  database records.Implemented fine grained locking for thread
                  management and data protection.
                  <br />
                  <Button
                    style={{
                      marginTop: "3%",
                      backgroundColor: "white",
                      color: "#167c9e",
                      borderRadius: "10%",
                      borderWidth: "1px",
                      borderColor: "#167c9e",
                      borderStyle: "solid",
                      fontSize: "12px",
                      // padding: "2%",
                      fontFamily: "Outfit",
                      marginRight: "1%",
                      // width: "20%",
                    }}
                    className={styles.button}
                  >
                    C
                  </Button>
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
                  Created an interpreter to read, parse, and process user
                  command input. User input was interpreted into executable
                  code. Utilized extensive pattern matching and error checking.
                  <br />
                  <Button
                    style={{
                      marginTop: "3%",
                      backgroundColor: "white",
                      color: "#167c9e",
                      borderRadius: "10%",
                      borderWidth: "1px",
                      borderColor: "#167c9e",
                      borderStyle: "solid",
                      fontSize: "12px",
                      // padding: "2%",
                      fontFamily: "Outfit",
                      marginRight: "1%",
                      // width: "20%",
                    }}
                    className={styles.button}
                  >
                    Racket
                  </Button>
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
