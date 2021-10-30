import { useQuery, gql } from "@apollo/client";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { StructuredText, Image } from "react-datocms";
import {
  AboutContainer,
  ImageContainer,
  TextContainer,
  Container,
  SocialMediaContainer,
} from "./styles";

import LoadingText from "./LoadingText";
import LoadingImage from "./LoadingImage";

function About() {
  const ABOUT_QUERY = gql`
    query MyQuery {
      aboutText {
        title
        subtitle
        textAbout {
          value
        }
        photo {
          url
          responsiveImage {
            src
            srcSet
            base64
            aspectRatio
            width
            height
            sizes
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery(ABOUT_QUERY);
  return (
    <Container>
      <AboutContainer>
        <ImageContainer>
          {loading ? (
            <LoadingImage />
          ) : (
            <Image data={data.aboutText.photo.responsiveImage} />
          )}
        </ImageContainer>
        <TextContainer>
          {loading ? (
            <LoadingText />
          ) : (
            <>
              <h1>{data.aboutText.title}</h1>
              <span>{data.aboutText.subtitle}</span>

              <StructuredText data={data.aboutText.textAbout.value} />
              <br />

              <h3>Social Media</h3>
              <SocialMediaContainer>
                <BsLinkedin />
                <BsGithub />
              </SocialMediaContainer>
            </>
          )}
        </TextContainer>
      </AboutContainer>
    </Container>
  );
}

export default About;
