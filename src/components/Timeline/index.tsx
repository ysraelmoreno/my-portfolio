import crypto from "crypto";
import { Connector, TimelineContainer, TimelineItem } from "./styles";

interface TimelineProps {
  items: string[];
}

function Timeline({ items }: TimelineProps) {
  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <>
          <TimelineItem
            key={`${crypto.randomBytes(20).toString("hex")}-${item}`}
          >
            {item}
          </TimelineItem>
          {index !== items.length - 1 && <Connector />}
        </>
      ))}
    </TimelineContainer>
  );
}

export default Timeline;
