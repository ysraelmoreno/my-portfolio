import styled from "styled-components";
import { SocialMediaContainer } from "../About/styles";

export const ContactContainer = styled.div`
  background-color: #fff;
  color: #101010;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  padding: 80px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-weight: 400;
    opacity: 0.7;
  }

  span {
    margin-top: 10%;
    opacity: 0.5;
  }

  a:last-child {
    opacity: 0.5;
  }
`;

export const SocialMediaItems = styled(SocialMediaContainer)`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    opacity: 0.7 !important;

    &:hover {
      opacity: 1 !important;
    }
  }
`;

export const RepoLink = styled.a`
  opacity: 0.7 !important;
  transition: all 0.2s ease;
  &:hover {
    opacity: 1 !important;
  }
`;
