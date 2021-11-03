import { Container } from "./styles";

interface TimelineInfoProps {
  title: string;
  subtitle: string;
  description?: string;
}

function TimelineInfo({ title, subtitle, description }: TimelineInfoProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      {description && <p>{description}</p>}
    </Container>
  );
}

export default TimelineInfo;
