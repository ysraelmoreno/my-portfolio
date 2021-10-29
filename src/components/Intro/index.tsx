import { useQuery, gql } from "@apollo/client";
import Navbar from "../Navbar";
import { FiChevronDown } from "react-icons/fi";
import { StructuredText } from "react-datocms";
import { Container, Content, ContentContainer, Header } from "./styles";
import Logo from "../../assets/logo.svg";
import Button from "../Button";
import LoadingIntroTexts from "./LoadingIntroTexts";

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
  console.log(data);
  return (
    <Container>
      <ContentContainer>
        <Header>
          <img src={Logo} alt="Logo" />
          <Navbar />
        </Header>
        <Content>
          {loading ? (
            <LoadingIntroTexts />
          ) : (
            <>
              <h1>{data.intropage.title}</h1>
              <StructuredText data={data.intropage.subtitle.value.document} />
              <Button>
                <FiChevronDown /> See my projects
              </Button>
            </>
          )}
        </Content>
      </ContentContainer>
    </Container>
  );
}

export default Intro;
