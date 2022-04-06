import React from "react";
import BG from "../components/Assets/pexels-matheus-natan-3297593.jpg";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Subtitle,
  Heading,
  Button,
  Img,
  ImgWrapper,
} from "./elements";
const InfoSection = ({ img, start, imgStart, heading, subtittle }) => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading>{heading} </Heading>
                <Subtitle>{subtittle}</Subtitle>

                <Button as="a" href="#">
                  Contact Us
                </Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt="IMage" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
