import { useQuery, gql } from "@apollo/client";
import { FiChevronDown } from "react-icons/fi";
import { StructuredText } from "react-datocms";
import { Container, Content, ContentContainer } from "./styles";
import LoadingIntroTexts from "./LoadingIntroTexts";
import Header from "../Header";

function Intro() {
  const HOME_QUERY = gql`
    query IntroPage {
      intropage {
        title
        subtitle {
          value
        }
      }
    }
  `;

  const { data, loading } = useQuery(HOME_QUERY);
  return (
    <Container id="home">
      <Header />
      <ContentContainer>
        <Content>
          {loading ? (
            <LoadingIntroTexts />
          ) : (
            <>
              <h1>{data.intropage.title}</h1>
              <StructuredText data={data.intropage.subtitle.value.document} />
              <a href="#projects">
                <FiChevronDown /> See my projects
              </a>
            </>
          )}
        </Content>
      </ContentContainer>
    </Container>
  );
}

export default Intro;
