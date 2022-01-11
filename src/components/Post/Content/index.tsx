import { StructuredText, StructuredTextGraphQlResponse } from "react-datocms";
import { ContentContainer } from "./styles";

interface PostContentProps {
  data: StructuredTextGraphQlResponse;
}

function PostContent({ data }: PostContentProps) {
  return (
    <ContentContainer>
      <StructuredText data={data.value} />
    </ContentContainer>
  );
}

export default PostContent;
