import dynamic from "next/dynamic";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const DynamicExperience = dynamic(() => import("../components/Experience"));
const DynamicContact = dynamic(() => import("../components/Contact"));
const DynamicAbout = dynamic(() => import("../components/About"));
import Projects from "../components/Projects";
import Intro from "../components/Intro";

import { api } from "../api/api";
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
        <DynamicAbout data={data.aboutText} />
        <DynamicExperience />
        <DynamicContact />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
    revalidate: 1000,
  };
};

export default Home;
