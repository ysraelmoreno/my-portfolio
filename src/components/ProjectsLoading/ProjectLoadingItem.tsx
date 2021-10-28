import {
  LoadingContainer,
  ProjectLoadingContainer,
  InfoContainerLoading,
  Container,
  LanguangeAndButtonContainer,
} from "./styles";

function ProjectLoadingItem() {
  return (
    <LoadingContainer>
      <Container>
        <ProjectLoadingContainer width="285px" height="200px" />
        <InfoContainerLoading>
          <ProjectLoadingContainer width="285px" height="40px" />
          <ProjectLoadingContainer width="100%" height="55px" />
          <LanguangeAndButtonContainer>
            <Container>
              <ProjectLoadingContainer width="50px" height="50px" />
              <ProjectLoadingContainer width="50px" height="50px" />
            </Container>
            <ProjectLoadingContainer width="285px" height="40px" />
          </LanguangeAndButtonContainer>
        </InfoContainerLoading>
      </Container>
    </LoadingContainer>
  );
}

export default ProjectLoadingItem;
