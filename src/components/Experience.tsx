import styles from "../styles/Experience.module.css";
import { Box } from "@mui/material";

const Experience = () => {
  return (
    <div className={styles.all}>
      <div className={styles.all}>
        <h1 style={{ marginBottom: "2%" }}>Experience</h1>
        <Box className={styles.experience_box}>
          <h2>University of Central Asia</h2>
          <h3>Data Analyst</h3>
          <p>
            Identified <b>7 KPIs</b> by creating <b>PowerBI</b> dashboard for
            ongoing research use in 3 countries: Tajikistan, Kazakhstan, &
            Kyrgyzstan
          </p>
          <p>
            Investigated impacts by manipulating & analyzing 8 public & private
            data sources for <b>6 countries</b> across Central Asia
          </p>
          <p>
            Created Excel visuals on analysis findings for informational session
            with <b>30+ international government officials & policy experts</b>
          </p>
        </Box>
        <Box className={styles.experience_box}>
          <h2>Arvasit Technologies</h2>
          <h3>Software Engineering Intern</h3>
          <p>
            Implemented a comprehensive model e-commerce website using{" "}
            <b>React, Next.js, HTML, CSS, & JavaScript</b> over a 4 week period
          </p>
          <p>
            Drove alignment on final website design by incorporating user
            research into <b>5+ wireframes</b> using <b>Figma</b> & presenting
            to C-Suite
          </p>
        </Box>
        <Box className={styles.experience_box}>
          <h2>Hack @ Brown</h2>
          <h3>Front End Developer</h3>
          <p>
            Produce Brown’s 2024 Hackathon’s{" "}
            <a href="https://2024.hackatbrown.org/" target="_blank">
              website{" "}
            </a>
            for projected
            <b> 500+ attendees</b> by partnering with a team of 7 designers
          </p>
          <p>
            Collaborate with 8 developers to launch <b>9 Starter Kits</b> for
            attendees, employing <b>JavaScript, TypeScript, & React</b>
          </p>
        </Box>
        <Box className={styles.experience_box}>
          <h2>Full Stack at Brown</h2>
          <h3>Website Developer</h3>
          <p>
            Engineer the website for Ignite CS, utilizing{" "}
            <b>React, Express, & MongoDB</b>, uniting with 2 designers & 4
            developers
          </p>
          <p>
            Coordinate communication between client, designers, & developers to
            convey purpose & programs to <b>1,000+ Brown students</b>
          </p>
        </Box>
      </div>
    </div>
  );
};

export { Experience };
