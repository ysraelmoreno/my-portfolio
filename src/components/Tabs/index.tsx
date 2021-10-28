import { MouseEvent, useCallback, useEffect, useState } from "react";
import ProjectsLoading from "../ProjectsLoading";
import ReposList from "../ReposList";
import { TabsContainer, TabsItemContainer } from "./styles";
import TabsContent from "./TabsContent";
import JustTodoIt from "../../assets/projects/just-todo.png";
import MoneyControl from "../../assets/projects/money-control.png";
import CalculateJourney from "../../assets/projects/calculate-journey.png";
import TabsItem from "./TabsItem";
import { useLoading } from "../../contexts/LoadingContext";
import repos from "../../data/reposList";
interface TabsProps {
  defaultTab?: number;
}

function Tabs({ defaultTab = 1 }: TabsProps) {
  const [activeTab, setActiveTab] = useState(1);

  const { isLoading } = useLoading();

  const handleTabClick = useCallback((ev: MouseEvent<HTMLButtonElement>) => {
    setActiveTab(Number(ev.currentTarget.value));
  }, []);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

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
        {isLoading ? <ProjectsLoading /> : <p>Teste</p>}
      </TabsContent>
      <TabsContent active={1 === activeTab}>
        {isLoading ? (
          <ProjectsLoading />
        ) : (
          <>
            {repos.map((repo) => (
              <ReposList
                title={repo.title}
                subtitle={repo.subTitle}
                imgURL={repo.imgURL}
                stacks={repo.stacks}
                url={repo.url}
              />
            ))}
          </>
        )}
      </TabsContent>
      <TabsContent active={2 === activeTab}>
        {isLoading ? <ProjectsLoading /> : <p>Teste</p>}
      </TabsContent>
    </TabsContainer>
  );
}

export default Tabs;
