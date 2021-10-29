import ShowStacks from "./Stacks";
import { Image, StructuredText } from "react-datocms";
import {
  Container,
  Title,
  InfoContainer,
  StacksAndLinkContainer,
  Link,
} from "./styles";
import { ReposListProps } from "./types";

function ReposList({
  title,
  subtitle,
  thumbnail,
  url,
  stacks = ["typescript"],
}: ReposListProps) {
  return (
    <Container>
      <Image data={thumbnail} />
      <InfoContainer>
        <Title>{title}</Title>
        <StructuredText data={subtitle} />
        <StacksAndLinkContainer>
          <ShowStacks stacks={stacks} />
          <Link target="_blank" rel="noreferrer" href={url}>
            See the project
          </Link>
        </StacksAndLinkContainer>
      </InfoContainer>
    </Container>
  );
}

export default ReposList;
