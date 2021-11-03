import { Container } from "./styles";

interface WorkProps {
  title: string;
  subtitle: string;
  description?: string;
}

function Work({ title, subtitle, description }: WorkProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      {description && <p>{description}</p>}
    </Container>
  );
}

export default Work;
