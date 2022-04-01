import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
`;
export const Title = styled.h1`
  display: flex;

  justify-content: center;
  align-items: center;
`;
export const SubTitle = styled.h2`
  display: flex;
  font-size: medium;
  max-width: 768px;
  justify-content: center;
  align-items: center;
  color: gray;
  text-align: center;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const CARD = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  padding: 1rem;
`;
export const ICON = styled.div`
  margin-bottom: 1rem;
`;
export const IconTitle = styled.h3`
  font-size: 2rem;
  color: #333333;
  margin-bottom: 1rem;
`;
export const IconSubtitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;
