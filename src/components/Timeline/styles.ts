import styled from "styled-components";

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const TimelineItem = styled.div`
  border: 6px solid #b1b1b1;
  padding: 15px;
  font-size: 18px;
  border-radius: 50%;
  max-height: 90px;
  height: 100%;
  max-width: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Connector = styled.div`
  width: 10px;
  height: 30%;
  background-color: #b1b1b1;
  margin-top: -5px;
`;
