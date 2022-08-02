import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card bg-white rounded-lg text-center px-7 pb-[39px] md:max-w-[350px] z-10 md:first:mt-0 md:last:mt-[88px] md:even:mt-[44px] ">
      <div className="icon bg-dark-violet h-[88px] w-[88px] mx-auto relative top-[-44px] flex justify-center items-center rounded-full ">
        {icon}
      </div>
      <h2 className="card-title text-2xl font-bold tracking-tight	mb-[15px] text-dark-violet">
        {title}
      </h2>
      <p className="card-description text-grayish-violet font-medium text-[15px] leading-[26px]">
        {description}
      </p>
    </div>
  );
};

export default Card;
