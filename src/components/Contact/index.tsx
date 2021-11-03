import { gql, useQuery } from "@apollo/client";
import SocialMedia from "../About/SocialMedia";
import { ContactContainer, Content, SocialMediaItems } from "./styles";

function Contact() {
  const SOCIALMEDIA_QUERY = gql`
    query MyQuery {
      aboutText {
        socialMedia
      }
    }
  `;

  const { data, loading } = useQuery(SOCIALMEDIA_QUERY);

  return (
    <ContactContainer>
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
              This website is made with ReactJS, see the full project on my
              github
            </span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ysraelmoreno/my-portfolio"
            >
              https://github.com/ysraelmoreno/my-portfolio
            </a>
          </>
        )}
      </Content>
    </ContactContainer>
  );
}

export default Contact;
