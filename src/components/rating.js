import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
const RatingComponent = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AiFillStar fill="orange" size={"1.5rem"} />
        <AiFillStar fill="orange" size={"1.5rem"} />
        <AiFillStar fill="orange" size={"1.5rem"} />
        <AiFillStar fill="orange" size={"1.5rem"} />
        <AiOutlineStar size={"1.5rem"} />
      </div>
    </>
  );
};

export default RatingComponent;
