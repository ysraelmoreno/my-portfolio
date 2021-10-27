import Intro from "../../components/Intro";
import Projects from "../../components/Projects";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Intro />
      <Projects />
    </Container>
  );
}

export default Home;
