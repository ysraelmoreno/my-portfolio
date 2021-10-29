import About from "../../components/About";
import Intro from "../../components/Intro";
import Projects from "../../components/Projects";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Intro />
      <Projects />
      <About />
    </Container>
  );
}

export default Home;
