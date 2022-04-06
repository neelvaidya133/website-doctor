import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 10fr 0.5fr;
  grid-template-rows: 1fr;
  padding: 1rem;
`;
export const LeftArrow = styled.div`
  display: flex;
  align-items: center;
`;
export const FeedbackData = styled.div``;
export const RightArrow = styled.div`
  display: flex;
  align-items: center;
`;
export const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    padding-top: 2rem;
    max-width: 40rem;
    text-align: center;
  }
  h5 {
    padding-top: 2rem;
  }

  @media (max-width: 768px) {
    p {
      max-width: 40rem;
    }
  }
`;

export const FeedTitle = styled.div`
  display: "flex";
  justify-content: "center";
  align-items: "center";
  padding-bottom: 2rem;
  padding-top: 2rem;
`;
