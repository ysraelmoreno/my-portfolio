import Timeline from "../Timeline";
import {
  Container,
  ExperienceContainer,
  WorkExperienceInfo,
  Wrapper,
} from "./styles";

import TimelineInfo from "./TimelineInfo";

function Experience() {
  return (
    <Wrapper>
      <Container id="experience">
        <ExperienceContainer>
          <WorkExperienceInfo>
            <span>Work Experience</span>

            <TimelineInfo
              title="Wordpress Web Developer"
              subtitle="Invento Agency"
              description="Web developer with Wordpress + Elementor. Responsible on the construction and maintenance of Landing Pages, E-Commerces, Marketing Campaigns etc."
            />
            <TimelineInfo
              title="Full-Stack Developer"
              subtitle="01 Company"
              description="Full-stack developer using ReactJS, NodeJS, MongoDB, Redis and PostgreSQL."
            />
            <TimelineInfo
              title="System Analyst"
              subtitle="MadeiraMadeira"
              description="Front-End developer focused on Javascript, using ReactJS and NextJS to the development of the MadeiraMadeira e-commerce."
            />
          </WorkExperienceInfo>
          <Timeline items={["2018", "2020", "2021"]} />
          <WorkExperienceInfo>
            <span>Degrees</span>

            <TimelineInfo
              title="Computer Programming"
              subtitle="ETEC Professor Elias Miguel Junior"
              description="High school integrated with technical teaching of web systems development through technologies such as PHP, MySQL, HTML, CSS and JavaScript"
            />
            <TimelineInfo
              title="Ignite - Web Developing"
              subtitle="Rocketseat"
              description="Student of the first class of the new model of the Ignite Plan. Focused on learning to develop applications with ReactJS, NextJS, NodeJS, React Native and Flutter."
            />
            <TimelineInfo title="Javascript Web Developing" subtitle="JStack" />
          </WorkExperienceInfo>
        </ExperienceContainer>
      </Container>
    </Wrapper>
  );
}

export default Experience;
