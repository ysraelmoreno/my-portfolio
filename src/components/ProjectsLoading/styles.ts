import styled from "styled-components";
import Skeleton from "../Skeleton";

export const LoadingContainer = styled.div`
  margin-top: 10px;
`;

export const ProjectLoadingContainer = styled(Skeleton)`
  margin-left: 10px;
`;

export const Container = styled.div`
  display: flex;
  padding: 10px 0;
`;

export const LanguangeAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10px;

  > div {
    margin-left: 10px;
    margin-bottom: 20px;
  }

  div + div {
    margin-left: 10px;
  }
`;
