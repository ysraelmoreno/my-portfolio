import About from "../../components/About";
import Contact from "../../components/Contact";

import Experience from "../../components/Experience";
import Intro from "../../components/Intro";
import Projects from "../../components/Projects";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Intro />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </Container>
  );
}

export default Home;
