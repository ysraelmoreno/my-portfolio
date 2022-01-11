import { GetServerSideProps } from "next";
import { api } from "../../api/api";
import { StructuredTextGraphQlResponse } from "react-datocms";
import { FiCalendar } from "react-icons/fi";
import {
  Container,
  HeaderContainer,
  HeaderContent,
  TagsListContainer,
  PostContentContainer,
  FooterContainer,
  InfoDataContainer,
} from "../../styles/post.styles";
import Header from "../../components/Header";
import Head from "next/head";
import Content from "../../components/Post/Content";
import Tag from "../../components/Post/Tag";
import Footer from "../../components/Footer";

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
                <Tag href={`/blog?tag=${tag}`}>
                  {tag.charAt(0).toUpperCase() + tag.substring(1)}
                </Tag>
              ))}
            </TagsListContainer>
            <h1>{post.title}</h1>
            {post.subtitle && <h5>{post.subtitle}</h5>}
            <hr />
            <InfoDataContainer>
              <span>
                <FiCalendar />
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(post.createdAt)
                )}
              </span>
            </InfoDataContainer>
          </HeaderContent>
        </HeaderContainer>
      </Container>
      <Container>
        <Content data={post.content} />
      </Container>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}

export default Post;
