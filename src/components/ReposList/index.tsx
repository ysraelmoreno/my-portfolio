import { useLoading } from "../../contexts/LoadingContext";
import ShowStacks from "./Stacks";
import {
  Container,
  Title,
  SubTitle,
  InfoContainer,
  StacksAndLinkContainer,
  Link,
} from "./styles";
import { ReposListProps } from "./types";

function ReposList({
  title,
  subtitle,
  imgURL,
  url,
  stacks = ["typescript"],
}: ReposListProps) {
  const { setIsLoading } = useLoading();

  return (
    <Container>
      <img
        onLoad={(ev) => setIsLoading(false)}
        src={imgURL}
        alt="Repo thumbnail"
      />
      <InfoContainer>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <StacksAndLinkContainer>
          <ShowStacks stacks={stacks} />
          <Link href={url}>See the project</Link>
        </StacksAndLinkContainer>
      </InfoContainer>
    </Container>
  );
}

export default ReposList;
