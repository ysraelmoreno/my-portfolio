import { TabsContentContainer } from "./styles";

interface TabsContentProps {
  children: React.ReactNode;
  active: boolean;
}

function TabsContent({ children, active }: TabsContentProps) {
  return (
    <TabsContentContainer active={active}>{children}</TabsContentContainer>
  );
}

export default TabsContent;
