import { FiChevronDown } from "react-icons/fi";
import { StructuredText } from "react-datocms";
import { Container, Content, ContentContainer } from "./styles";
import Header from "../Header";
import { useEffect, useRef } from "react";
import useScrollTo from "../../hooks/useScrollTo";

function Intro({ data }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const { signRef } = useScrollTo();

  useEffect(() => {
    if (ref.current) {
      signRef(ref.current);
    }
  }, [ref.current]);

  return (
    <Container backgroundImage="/assets/home.jpg" ref={ref} id="home">
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
