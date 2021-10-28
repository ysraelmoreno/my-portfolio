import { ButtonHTMLAttributes } from "react";
import { TabsItemContainer, Container } from "./styles";

interface TabsItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

function TabsItem({ children, active = false, ...props }: TabsItemProps) {
  return (
    <TabsItemContainer active={active} {...props}>
      <Container>{children}</Container>
    </TabsItemContainer>
  );
}

export default TabsItem;
