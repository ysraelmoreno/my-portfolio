import { GetServerSideProps } from "next";
import { api } from "../../api/api";
import { StructuredText, StructuredTextGraphQlResponse } from "react-datocms";
import {
  Container,
  HeaderContainer,
  HeaderContent,
  Tag,
  TagsListContainer,
  PostContentContainer,
} from "../../styles/post.styles";
import Header from "../../components/Header";
import Head from "next/head";
interface Post {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  thumbnail: {
    url: string;
  };
  content: StructuredTextGraphQlResponse;
  createdAt: string;
}

interface PostProps {
  post: Post;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const posts = await api.post("", {
    query: `query MyQuery {
      post(filter: {id: {eq: ${id}}}) {
        subtitle
        tags
        thumbnail {
          url
        }
        title
        id
        createdAt
        content {
          value
        }
      }
    }
    `,
  });

  return {
    props: {
      post: posts.data.data.post,
    },
  };
};

function Post({ post }: PostProps) {
  console.log(post);
  return (
    <>
      <Head>
        <title>{post.title} | Ysrael Moreno</title>
      </Head>
      <Container>
        <HeaderContainer image={post.thumbnail.url}>
          <Header />
          <HeaderContent>
            <TagsListContainer>
              {post.tags?.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </TagsListContainer>
            <h1>{post.title}</h1>
            <h5>{post.subtitle}</h5>
          </HeaderContent>
        </HeaderContainer>
      </Container>
      <Container>
        <PostContentContainer>
          <StructuredText data={post.content.value} />
        </PostContentContainer>
      </Container>
    </>
  );
}

export default Post;
