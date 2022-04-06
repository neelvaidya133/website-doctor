import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;
`;
export const Title = styled.h1`
  display: flex;
  padding-bottom: 2rem;
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
  max-width: 300px;
  padding: 1rem;
  border-radius: 3rem;
  border: 1px solid #e6e6e6;
  margin-right: 0.5rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
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
  padding: 1rem;
  text-align: center;
`;
