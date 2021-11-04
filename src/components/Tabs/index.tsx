import { MouseEvent, useCallback, useEffect, useMemo, useState } from "react";
import ProjectsLoading from "../ProjectsLoading";
import { StructuredTextGraphQlResponse } from "react-datocms";
import ReposList from "../ReposList";
import { TabsContainer, TabsItemContainer } from "./styles";
import TabsContent from "./TabsContent";
import TabsItem from "./TabsItem";
import { useQuery, gql } from "@apollo/client";
interface TabsProps {
  defaultTab?: number;
}

interface IStacks {
  stacks: string[];
}
interface ProjectsItemProps {
  stacks: IStacks;
  title: string;
  subtitle: StructuredTextGraphQlResponse;
}
interface ProjectsData {
  allProjects: ProjectsItemProps[];
}

function Tabs({ defaultTab = 0 }: TabsProps) {
  const REPOS_QUERY = gql`
    query MyQuery {
      allProjects {
        stacks
        title
        subtitle {
          value
        }
        thumbnail {
          responsiveImage {
            src
            srcSet
            base64
            width
            height
            sizes
            aspectRatio
          }
        }
        repoUrl
      }
    }
  `;

  const { data, loading } = useQuery(REPOS_QUERY);

  const [activeTab, setActiveTab] = useState(0);

  const allProjects: ProjectsItemProps[] = useMemo(
    () => data?.allProjects,
    [data]
  );

  const handleTabClick = useCallback((ev: MouseEvent<HTMLButtonElement>) => {
    setActiveTab(Number(ev.currentTarget.value));
  }, []);

  const findReactProjects = useMemo(
    () =>
      allProjects?.filter((project) =>
        project?.stacks.stacks.includes("ReactJS")
      ),
    [allProjects]
  );

  const findJavascriptProjects = useMemo(
    () =>
      allProjects?.filter((project) =>
        project?.stacks.stacks.includes("Javascript")
      ),
    [allProjects]
  );

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  console.log(data);
  return (
    <TabsContainer>
      <TabsItemContainer>
        <TabsItem onClick={handleTabClick} active={0 === activeTab} value={0}>
          Todos
        </TabsItem>
        <TabsItem onClick={handleTabClick} active={1 === activeTab} value={1}>
          ReactJS
        </TabsItem>
        <TabsItem onClick={handleTabClick} active={2 === activeTab} value={2}>
          Javascript
        </TabsItem>
      </TabsItemContainer>

      <TabsContent active={0 === activeTab}>
        {loading ? (
          <ProjectsLoading />
        ) : (
          <>
            {data.allProjects.map((repo: any) => (
              <ReposList
                title={repo.title}
                subtitle={repo.subtitle.value}
                thumbnail={repo.thumbnail.responsiveImage}
                stacks={repo.stacks.stacks}
                url={repo.repoUrl}
              />
            ))}
          </>
        )}
      </TabsContent>
      <TabsContent active={1 === activeTab}>
        {loading ? (
          <ProjectsLoading />
        ) : (
          findReactProjects?.map((repo: any) => (
            <ReposList
              title={repo.title}
              subtitle={repo.subtitle.value}
              thumbnail={repo.thumbnail.responsiveImage}
              stacks={repo.stacks.stacks}
              url={repo.repoUrl}
            />
          ))
        )}
      </TabsContent>
      <TabsContent active={2 === activeTab}>
        {loading ? (
          <ProjectsLoading />
        ) : (
          findJavascriptProjects?.map((repo: any) => (
            <ReposList
              title={repo.title}
              subtitle={repo.subtitle.value}
              thumbnail={repo.thumbnail.responsiveImage}
              stacks={repo.stacks.stacks}
              url={repo.repoUrl}
            />
          ))
        )}
      </TabsContent>
    </TabsContainer>
  );
}

export default Tabs;
