import { useQuery, gql } from "@apollo/client";
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
import SocialMedia from "./SocialMedia";

function About() {
  const ABOUT_QUERY = gql`
    query MyQuery {
      aboutText {
        title
        subtitle
        textAbout {
          value
        }
        socialMedia
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
    <Container id="about">
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
                <SocialMedia socialMedias={data.aboutText.socialMedia} />
              </SocialMediaContainer>
            </>
          )}
        </TextContainer>
      </AboutContainer>
    </Container>
  );
}

export default About;
