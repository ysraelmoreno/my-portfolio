import { AnchorHTMLAttributes } from "react";
import { TagWrapper } from "./styles";

interface TagProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

function Tag({ children, ...props }: TagProps) {
  return (
    <>
      <TagWrapper {...props}>{children}</TagWrapper>
    </>
  );
}

export default Tag;
