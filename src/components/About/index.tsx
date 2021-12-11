import { StructuredText, Image } from "react-datocms";
import {
  AboutContainer,
  ImageContainer,
  TextContainer,
  MainAboutContainer,
  SocialMediaContainer,
} from "./styles";

import SocialMedia from "./SocialMedia";

function About({ data }: any) {
  return (
    <MainAboutContainer id="about">
      <AboutContainer>
        <ImageContainer>
          <Image data={data.photo.responsiveImage} />
        </ImageContainer>
        <TextContainer>
          <TextContainer>
            <h1>{data.title}</h1>
            <span>{data.subtitle}</span>

            <StructuredText data={data.textAbout.value} />
            <br />

            <h3>Social Media</h3>
            <SocialMediaContainer>
              <SocialMedia socialMedias={data.socialMedia} />
            </SocialMediaContainer>
          </TextContainer>
        </TextContainer>
      </AboutContainer>
    </MainAboutContainer>
  );
}

export default About;
