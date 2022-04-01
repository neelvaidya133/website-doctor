import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Subtitle,
  Heading,
  Img,
  ImgWrapper,
  DataSec,
} from "./indexStyle";
const ServicePage = ({
  img,
  start,
  imgStart,
  heading1,
  subtittle1,
  heading2,
  subtittle2,
  heading3,
  subtittle3,
  heading4,
  subtittle4,
}) => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <DataSec>
                <AiOutlineClockCircle size={"80px"} />
                <TextWrapper>
                  <Heading>{heading1} </Heading>
                  <Subtitle>{subtittle1}</Subtitle>
                </TextWrapper>
              </DataSec>

              <DataSec>
                <AiOutlineClockCircle size={"80px"} />
                <TextWrapper>
                  <Heading>{heading2} </Heading>
                  <Subtitle>{subtittle2}</Subtitle>
                </TextWrapper>
              </DataSec>

              <DataSec>
                <AiOutlineClockCircle size={"80px"} />
                <TextWrapper>
                  <Heading>{heading3} </Heading>
                  <Subtitle>{subtittle3}</Subtitle>
                </TextWrapper>
              </DataSec>

              <DataSec>
                <AiOutlineClockCircle size={"80px"} />
                <TextWrapper>
                  <Heading>{heading4} </Heading>
                  <Subtitle>{subtittle4}</Subtitle>
                </TextWrapper>
              </DataSec>
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

export default ServicePage;
