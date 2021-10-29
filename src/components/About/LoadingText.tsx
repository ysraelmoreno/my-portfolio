import Skeleton from "../Skeleton";

function LoadingText() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "40px", width: "740px" }}>
        <Skeleton theme="light" width="300px" height="48px" />
        <Skeleton theme="light" mt="10px" width="350px" height="48px" />
        <Skeleton theme="light" mt="20px" width="100%" height="700px" />
      </div>
    </div>
  );
}

export default LoadingText;
