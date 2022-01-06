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
} from "../styles/blog.styles";
import Header from "../components/Header";

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

function Blog() {
  return (
    <>
      <Container>
        <HeaderContainer>
          <Header staticMenu />
        </HeaderContainer>
        <FeaturedPostsContainer>
          {featuredPosts[0] && (
            <FirstPostContainer image={featuredPosts[0].image}>
              <TagsContainer>
                {featuredPosts[0].tags.map((tag) => (
                  <span key={tag}>
                    {tag[0].toUpperCase() + tag.substring(1)}
                  </span>
                ))}
              </TagsContainer>
              <TextContainer>
                <h2>{featuredPosts[0].title}</h2>
                <p>{featuredPosts[0].description}</p>
              </TextContainer>
            </FirstPostContainer>
          )}
          {featuredPosts[1] && (
            <SecondPostContainer image={featuredPosts[0].image}>
              <TagsContainer>
                <span>
                  {featuredPosts[1].tags[0][0].toUpperCase() +
                    featuredPosts[1].tags[0].substring(1)}
                </span>
              </TagsContainer>
              <TextContainer>
                <h4>{featuredPosts[1].title}</h4>
                <p>{featuredPosts[1].description}</p>
              </TextContainer>
            </SecondPostContainer>
          )}
          {featuredPosts[1] && (
            <ThirdPostContainer image={featuredPosts[0].image}>
              <TagsContainer>
                <span>
                  {featuredPosts[1].tags[0][0].toUpperCase() +
                    featuredPosts[1].tags[0].substring(1)}
                </span>
              </TagsContainer>
              <TextContainer>
                <h4>{featuredPosts[1].title}</h4>
                <p>{featuredPosts[1].description}</p>
              </TextContainer>
            </ThirdPostContainer>
          )}
        </FeaturedPostsContainer>
      </Container>
      <Container>
        <PostsContainer>
          <TagsListContainer>
            <ul>
              <li>
                All posts <span>12</span>
              </li>
              <li>React</li>
              <li>NextJS</li>
              <li>Storybook</li>
              <li>Javascript</li>
            </ul>
          </TagsListContainer>
          <PostList>
            {featuredPosts.map((post) => (
              <Post image={post.image}>
                <div>
                  <h1>{post.title}</h1>
                  <p>{post.description}</p>
                </div>
              </Post>
            ))}
          </PostList>
        </PostsContainer>
      </Container>
    </>
  );
}

export default Blog;
