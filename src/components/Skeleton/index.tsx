import { SkeletonWrapper } from "./styles";

interface SkeletonProps {
  width: string;
  theme?: "light" | "dark";
  height: string;
  mt?: string;
}

function Skeleton({
  width = "300px",
  height = "50px",
  mt = "0",
  theme,
}: SkeletonProps) {
  return (
    <SkeletonWrapper mt={mt} theme={theme} width={width} height={height} />
  );
}

export default Skeleton;
