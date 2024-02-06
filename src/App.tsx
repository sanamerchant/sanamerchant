import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/nav/NavBar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";

const App: React.FC = () => {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#F0F0F0",
      }}
    >
      <Header />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Footer />
    </div>
  );
};
export default App;
