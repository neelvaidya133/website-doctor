import React from "react";
import {
  MainContainer,
  Header,
  Title,
  SubTitle,
  CardWrapper,
  CARD,
  ICON,
  IconTitle,
  IconSubtitle,
} from "./AboutStyle";

import { BiPlusMedical } from "react-icons/bi";
const About = () => {
  return (
    <>
      <MainContainer>
        <Header>
          <Title> About Me </Title>

          <SubTitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            corporis deserunt blanditiis pariatur, aut cum iusto dicta dolore
          </SubTitle>
        </Header>

        <CardWrapper>
          <CARD>
            <ICON>
              <BiPlusMedical size={"4rem"} color={"#3290d7"} />
            </ICON>
            <IconTitle> ARt hdusp </IconTitle>
            <IconSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              modi ipsam. Pariatur, sunt, culpa eaque at rem perspiciatis quo ex
              reprehender.
            </IconSubtitle>
          </CARD>
          <CARD>
            <ICON>
              <BiPlusMedical size={"4rem"} color={"#3290d7"} />
            </ICON>
            <IconTitle> ARt hdusp </IconTitle>
            <IconSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              modi ipsam. Pariatur, sunt, culpa eaque at rem perspiciatis quo ex
              reprehender.
            </IconSubtitle>
          </CARD>
          <CARD>
            <ICON>
              <BiPlusMedical size={"4rem"} color={"#3290d7"} />
            </ICON>
            <IconTitle> ARt hdusp </IconTitle>
            <IconSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              modi ipsam. Pariatur, sunt, culpa eaque at rem perspiciatis quo ex
              reprehender.
            </IconSubtitle>
          </CARD>
          <CARD>
            <ICON>
              <BiPlusMedical size={"4rem"} color={"#3290d7"} />
            </ICON>
            <IconTitle> Asgyio eugig</IconTitle>
            <IconSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              modi ipsam. Pariatur, sunt, culpa eaque at rem perspiciatis quo ex
              reprehender.
            </IconSubtitle>
          </CARD>
          <CARD>
            <ICON>
              <BiPlusMedical size={"4rem"} color={"#3290d7"} />
            </ICON>
            <IconTitle>RTY up fhp</IconTitle>
            <IconSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              modi ipsam. Pariatur, sunt, culpa eaque at rem perspiciatis quo ex
              reprehender.
            </IconSubtitle>
          </CARD>
        </CardWrapper>
      </MainContainer>
    </>
  );
};

export default About;
