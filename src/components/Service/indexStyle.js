import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #2bfc7f;
  padding: 160px 0;
  background-color: #fff;
`;
export const InfoWrapper = styled.div`
  z-index: 1;
  width: 100%;

  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;

  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;

  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    DataSec {
      padding-bottom: 4rem;
    }
  }
`;

export const TextWrapper = styled.div`
  max-width: 54rem;
  padding-left: 1rem;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 5px;
  font-size: 30px;
  line-height: 1.1;
`;
export const Subtitle = styled.h1`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 10px;
  line-height: 18px;
  color: gray;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  border-radius: 20px;
  max-height: 500px;
`;

export const DataSec = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;
export const AiOutlineClockCircle = styled.i`
  size: 5rem;
`;
