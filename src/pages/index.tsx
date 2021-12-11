import { InferGetStaticPropsType } from "next";
import Contact from "../components/Contact";

import Experience from "../components/Experience";
import Projects from "../components/Projects";
import GlobalStyles from "../styles/global";
import Intro from "../components/Intro";

import { api } from "../api/api";
import About from "../components/About";
import Head from "next/head";

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Ysrael Moreno - Home</title>
      </Head>
      <div>
        <Intro data={data.intropage} />
        <Projects />
        <About data={data.aboutText} />
        <Experience />
        <Contact />
      </div>
      <GlobalStyles />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await api.post("", {
    query: `
      query MyQuery {
        intropage {
          title
          subtitle {
            value
          }
        }
        aboutText {
          title
          subtitle
          textAbout {
            value
          }
          socialMedia
          photo {
            url
            responsiveImage {
              src
              srcSet
              base64
              aspectRatio
              width
              height
              sizes
            }
          }
        }
      }
      `,
  });

  return {
    props: {
      data: data.data,
    },
  };
}

export default Home;
