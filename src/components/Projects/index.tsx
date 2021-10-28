import Tabs from "../Tabs";
import { ProjectsContainer, ShowProjectsContainer } from "./styles";

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <h1>PROJECTS</h1>
      <ShowProjectsContainer>
        <Tabs />
      </ShowProjectsContainer>
    </ProjectsContainer>
  );
}

export default Projects;
