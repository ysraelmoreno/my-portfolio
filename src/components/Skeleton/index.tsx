import { SkeletonWrapper } from "./styles";

interface SkeletonProps {
  width: string;
  height: string;
}

function Skeleton({ width = "300px", height = "50px" }: SkeletonProps) {
  return <SkeletonWrapper width={width} height={height} />;
}

export default Skeleton;
