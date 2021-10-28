import { IconBaseProps } from "react-icons";

interface IconProps {
  icon: React.ComponentType<IconBaseProps>;
}

function Icon({ icon: Icon }: IconProps) {
  return (
    <>
      <Icon />
    </>
  );
}

export default Icon;
