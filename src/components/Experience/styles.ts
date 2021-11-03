import styled from "styled-components";

export const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 40px;

  display: flex;

  @media (max-width: 1240px) {
    flex-wrap: wrap;
  }
`;

export const ExperienceContainer = styled.div`
  max-width: 720px;
  width: 100%;
  display: flex;
  margin-bottom: 100px;
`;

export const WorkExperienceInfo = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
