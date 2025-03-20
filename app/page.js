"use client";
import React from "react";
import MyAbout from "./_components/MyAbout";
import {IconSlide} from "./_components/IconSlide";
import JobHistory from "./_components/JobHistory";
import JobArguments from "./_components/JobArguments";

const page = () => {

  return (
    <div className="w-full" >
 
      <MyAbout />
      <IconSlide/>
      <JobHistory/>
      <JobArguments/>
    </div>
  );
};

export default page;
