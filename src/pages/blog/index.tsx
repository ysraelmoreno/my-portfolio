import {
  Container,
  FeaturedPostsContainer,
  FirstPostContainer,
  HeaderContainer,
  Post,
  PostList,
  PostsContainer,
  SecondPostContainer,
  TagsContainer,
  TagsListContainer,
  TextContainer,
  ThirdPostContainer,
} from "../../styles/blog.styles";
import Header from "../../components/Header";
import TagsList from "../../components/TagsList";
import TagsItem from "../../components/TagsList/TagsItem";
import { GetServerSideProps } from "next";
import { api } from "../../api/api";
import { useMemo } from "react";

interface Post {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: {
    url: string;
  };
  content: any;
}

interface BlogProps {
  posts: Post[];
}

const featuredPosts = [
  {
    id: 1,
    title: "How to use styled-components",
    tags: ["programming", "reactjs", "css"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget cursus augue. Nullam sem ipsum, commodo eget convallis eu, vulputate pretium enim. In quis turpis libero.",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    title: "How to use NextJS",
    tags: ["programming", "reactjs", "nextjs"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget cursus augue. Nullam sem ipsum, commodo eget convallis eu, vulputate pretium enim. In quis turpis libero.",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    title: "How to use ReactJS",
    tags: ["programming", "reactjs", "javascript"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget cursus augue. Nullam sem ipsum, commodo eget convallis eu, vulputate pretium enim. In quis turpis libero.",
    image: "https://source.unsplash.com/random",
  },
];

function Blog({ posts }: BlogProps) {
  const allPostsQuantity = useMemo(() => {
    return posts.length;
  }, []);

  return (
    <>
      <Container>
        <HeaderContainer>
          <Header staticMenu />
        </HeaderContainer>
        <FeaturedPostsContainer>
          {posts[0] && (
            <FirstPostContainer image={posts[0].thumbnail.url}>
              <TagsContainer>
                {featuredPosts[0].tags.map((tag) => (
                  <span key={tag}>
                    {tag[0].toUpperCase() + tag.substring(1)}
                  </span>
                ))}
              </TagsContainer>
              <TextContainer>
                <h2>{posts[0].title}</h2>
                <p>{posts[0].subtitle}</p>
              </TextContainer>
            </FirstPostContainer>
          )}
          {posts[1] && (
            <SecondPostContainer image={posts[1].thumbnail.url}>
              <TagsContainer>
                <span>
                  {featuredPosts[1].tags[0][0].toUpperCase() +
                    featuredPosts[1].tags[0].substring(1)}
                </span>
              </TagsContainer>
              <TextContainer>
                <h4>{posts[1].title}</h4>
                <p>{posts[1].subtitle}</p>
              </TextContainer>
            </SecondPostContainer>
          )}
          {posts[2] && (
            <ThirdPostContainer image={posts[2].thumbnail.url}>
              <TagsContainer>
                <span>
                  {featuredPosts[1].tags[0][0].toUpperCase() +
                    featuredPosts[1].tags[0].substring(1)}
                </span>
              </TagsContainer>
              <TextContainer>
                <h4>{posts[2].title}</h4>
                <p>{posts[2].subtitle}</p>
              </TextContainer>
            </ThirdPostContainer>
          )}
        </FeaturedPostsContainer>
      </Container>
      <Container>
        <PostsContainer>
          <TagsListContainer>
            <TagsList>
              <TagsItem counter={allPostsQuantity} tag="all">
                All Posts
              </TagsItem>
              <TagsItem tag="react">React</TagsItem>
              <TagsItem tag="nextjs">NextJS</TagsItem>
              <TagsItem tag="programming">Programming</TagsItem>
            </TagsList>
          </TagsListContainer>
          <PostList>
            {posts.map((post, index) => {
              if (index < 3) {
                return <></>;
              }

              return (
                <Post image={post.thumbnail.url}>
                  <div>
                    <h1>{post.title}</h1>
                    <p>{post.subtitle}</p>
                  </div>
                </Post>
              );
            })}
          </PostList>
        </PostsContainer>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await api.post("", {
    query: `query MyQuery {
      allPosts {
        id
        thumbnail {
          url
        }
        title
        subtitle
        content {
          value
        }
      }
    }
    `,
  });

  return {
    props: {
      posts: posts.data.data.allPosts,
    },
  };
};

export default Blog;
