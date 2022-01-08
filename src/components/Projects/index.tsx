import { useEffect, useRef } from "react";
import useScrollTo from "../../hooks/useScrollTo";
import Tabs from "../Tabs";
import { ProjectsContainer, ShowProjectsContainer, Wrapper } from "./styles";

function Projects() {
  const { signRef } = useScrollTo();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      signRef(ref.current);
    }
  }, [ref.current]);

  return (
    <Wrapper>
      <ProjectsContainer ref={ref} id="projects">
        <h1>PROJECTS</h1>
        <ShowProjectsContainer>
          <Tabs />
        </ShowProjectsContainer>
      </ProjectsContainer>
    </Wrapper>
  );
}

export default Projects;
