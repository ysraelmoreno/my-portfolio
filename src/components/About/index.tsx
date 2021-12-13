import { StructuredText, Image } from "react-datocms";
import {
  AboutContainer,
  ImageContainer,
  TextContainer,
  MainAboutContainer,
  SocialMediaContainer,
} from "./styles";

import SocialMedia from "./SocialMedia";
import { useEffect, useRef } from "react";
import useScrollTo from "../../hooks/useScrollTo";

function About({ data }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const { signRef } = useScrollTo();

  useEffect(() => {
    if (ref.current) {
      signRef(ref.current);
    }
  }, [ref.current]);

  return (
    <MainAboutContainer ref={ref} id="about">
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
