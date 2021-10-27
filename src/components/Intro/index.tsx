import Navbar from "../Navbar";
import { FiChevronDown } from "react-icons/fi";

import { Container, Content, ContentContainer, Header } from "./styles";
import Logo from "../../assets/logo.svg";
import Button from "../Button";

function Intro() {
  return (
    <Container>
      <ContentContainer>
        <Header>
          <img src={Logo} alt="Logo" />
          <Navbar />
        </Header>
        <Content>
          <h1>
            👋 I’m Ysrael Moreno, a <br /> front-end developer{" "}
          </h1>
          <p>
            Learning ReactJS and NextJS to create applications to be fast as a
            rocket! 🚀 <br />
            From Sorocaba, São Paulo - Brasil to the world! ✈
          </p>

          <Button>
            <FiChevronDown /> See my projects
          </Button>
        </Content>
      </ContentContainer>
    </Container>
  );
}

export default Intro;
