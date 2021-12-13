import { gql, useQuery } from "@apollo/client";
import SocialMedia from "../About/SocialMedia";
import {
  ContactContainer,
  Content,
  SocialMediaItems,
  RepoLink,
} from "./styles";

import { useRef, useEffect } from "react";
import useScrollTo from "../../hooks/useScrollTo";

function Contact() {
  const SOCIALMEDIA_QUERY = gql`
    query MyQuery {
      aboutText {
        socialMedia
      }
    }
  `;

  const { data, loading } = useQuery(SOCIALMEDIA_QUERY);

  const ref = useRef<HTMLDivElement>(null);

  const { signRef } = useScrollTo();

  useEffect(() => {
    if (ref.current) {
      signRef(ref.current);
    }
  }, [ref.current]);

  return (
    <ContactContainer ref={ref} id="contacts">
      <Content>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1>You liked what you saw?</h1>
            <h4>Get in touch!</h4>
            <SocialMediaItems>
              <SocialMedia socialMedias={data.aboutText.socialMedia} />
            </SocialMediaItems>

            <span>
              This website is made with NextJS, see the full project on my
              github
            </span>
            <RepoLink
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ysraelmoreno/my-portfolio"
            >
              https://github.com/ysraelmoreno/my-portfolio
            </RepoLink>
          </>
        )}
      </Content>
    </ContactContainer>
  );
}

export default Contact;
