import styles from "../styles/About.module.css";
import { Box, Grid, Button, Link } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import fsabImage from "../images/fsab.png";
import hackImage from "../images/hack.png";
import ucaImage from "../images/uca.png";
import arvasitImage from "../images/arvasit.png";

const About = () => {
  return (
    <div id="Projects" className={styles.all}>
      <Box className={styles.about_box}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={styles.left_text}>
              <h1 style={{ color: "#167c9e" }}>Hi, I'm Sana Merchant!</h1>
              <p style={{ fontSize: "20px" }}>
                I'm passionate about harnessing technology's transformative
                potential.
              </p>
              <p style={{ fontSize: "20px" }}>
                I'm a sophomore studying Computer Science at Brown University.
                Experienced in full-stack development, I’m also interested in AI
                and its applications. While my academic courses have provided a
                solid foundation, much of my expertise has been honed through
                independent exploration fueled by curiosity.
              </p>
              <p style={{ fontSize: "20px" }}>
                I’m passionate about leveraging technology to address societal
                challenges. I take initiative with my education, supplementing
                my Brown coursework with extracurricular activities that not
                only enhance my skill set but also broaden my perspectives. As I
                continue to navigate this dynamic field, I am excited about the
                possibilities that lie ahead and the impact technology can have
                on shaping a better future.
              </p>
              <br />
              <ScrollLink to="projects" smooth={true} duration={500}>
                <Button
                  style={{
                    backgroundColor: "#167c9e",
                    color: "white",
                    fontSize: "15px",
                    padding: "2%",
                    fontFamily: "Outfit",
                    width: "20%",
                  }}
                  className={styles.button}
                >
                  Projects
                </Button>
              </ScrollLink>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                href="https://drive.google.com/file/d/12OlUldnCOzIZxElj3o6gjMR6wqIgVFir/view?usp=sharing"
              >
                <Button
                  style={{
                    backgroundColor: "#167c9e",
                    color: "white",
                    fontSize: "15px",
                    padding: "2%",
                    marginLeft: "5%",
                    fontFamily: "Outfit",
                    width: "20%",
                  }}
                  className={styles.button}
                >
                  Resume
                </Button>
              </a>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ marginLeft: "30%", lineHeight: 0.4 }}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <ol className={styles.timeline}>
                <li className={styles.timeline_item}>
                  <div className={styles.timeline_item_icon}>
                    <img height="30px" src={fsabImage} alt="Profile Picture" />
                  </div>
                  <div className={styles.timeline_item_content}>
                    <br />
                    <a
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      href="https://github.com/fullstackatbrown"
                    >
                      <h2 className={styles.headerlink}>Full Stack at Brown</h2>
                    </a>
                    <p>Website Developer</p>
                    <p>September 2023 - Present</p>
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </li>
                <li className={styles.timeline_item}>
                  <div className={styles.timeline_item_icon}>
                    <img height="30px" src={hackImage} alt="Profile Picture" />
                  </div>
                  <div className={styles.timeline_item_content}>
                    <br />
                    <a
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      href="https://2024.hackatbrown.org"
                    >
                      <h2 className={styles.headerlink}>Hack @ Brown</h2>
                    </a>
                    <p>Front End Developer</p>
                    <p>September 2023 - Present</p>
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </li>
                <li className={styles.timeline_item}>
                  <div className={styles.timeline_item_icon}>
                    <img height="30px" src={ucaImage} alt="Profile Picture" />
                  </div>
                  <div className={styles.timeline_item_content}>
                    <br />
                    <a
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      href="https://ucentralasia.org/"
                    >
                      <h2 className={styles.headerlink}>
                        University of Central Asia
                      </h2>
                    </a>
                    <p>Data Analyst</p>
                    <p>June - October 2023</p>
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </li>
                <li className={styles.timeline_item}>
                  <div className={styles.timeline_item_icon}>
                    <img
                      height="30px"
                      src={arvasitImage}
                      alt="Profile Picture"
                    />
                  </div>
                  <div className={styles.timeline_item_content}>
                    <br />
                    <a
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      href="https://arvasit.com/"
                    >
                      <h2 className={styles.headerlink}>Arvasit Technolabs</h2>
                    </a>
                    <p>Software Engineer Intern</p>
                    <p>May - June 2023</p>
                  </div>
                </li>
              </ol>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export { About };
