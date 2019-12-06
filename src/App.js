import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

const Container = styled.div`
  background: rgb(15, 71, 177);
  background: linear-gradient(
    130deg,
    rgba(15, 71, 177, 1) 0%,
    rgba(29, 107, 253, 1) 29%,
    rgba(62, 196, 226, 1) 69%
  );
  height: 900px;
`;

const App = () => {
  return (
    <Container className="App">
      <Navbar />
      <Bio />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </Container>
  );
};

export default App;
