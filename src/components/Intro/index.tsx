import { FiChevronDown } from "react-icons/fi";
import { StructuredText } from "react-datocms";
import { Container, Content, ContentContainer } from "./styles";
import Header from "../Header";

function Intro({ data }: any) {
  return (
    <Container backgroundImage="/assets/home.jpg" id="home">
      <Header />
      <ContentContainer>
        <Content>
          <>
            <h1>{data.title}</h1>
            <StructuredText data={data.subtitle.value.document} />
            <a href="#projects">
              <FiChevronDown /> See my projects
            </a>
          </>
        </Content>
      </ContentContainer>
    </Container>
  );
}

export default Intro;
