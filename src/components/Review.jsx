import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5  bg-[url('./assets/img/hero4.jpg')] bg-cover bg-repeat-round ">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10 text-white">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Sophia Azura" />
        <ReviewCard img={img1} name="John Deo" />
        <ReviewCard img={img1} name="Victoria Zoe" />
      </div>
    </div>
  );
};

export default Review;
