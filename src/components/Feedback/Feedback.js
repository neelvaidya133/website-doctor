import React from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";
import RatingComponent from "../rating";
import { feed } from "./data";
import {
  MainContainer,
  LeftArrow,
  FeedbackData,
  FeedbackWrapper,
  RightArrow,
  FeedTitle,
} from "./FeedbackStyle";

// ===========================================================================================///

const Feedback = () => {
  const [current, setCurrent] = useState(0);
  const nextfeed = () => {
    setCurrent(current === feed.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <MainContainer>
        <LeftArrow>
          <BsArrowLeftShort size={"2rem"} />
        </LeftArrow>
        <FeedbackWrapper>
          <FeedTitle>
            <h1>WHat my client says?</h1>
          </FeedTitle>

          <FeedbackData>
            {feed.map((val, index) => {
              return (
                <>
                  {index === current && (
                    <FeedbackWrapper>
                      <RatingComponent />

                      <p> {val.texts} </p>
                      <h5> {val.clients} </h5>
                    </FeedbackWrapper>
                  )}
                </>
              );
            })}
          </FeedbackData>
        </FeedbackWrapper>

        <RightArrow>
          <BsArrowRightShort onClick={nextfeed} size={"2rem"} />
        </RightArrow>
      </MainContainer>
    </>
  );
};

export default Feedback;

// {feed.map((val, index) => {
//   return (
//     <>
//       {index === current && (
