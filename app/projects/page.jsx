import React from "react";
import { Roboto } from "next/font/google";
import { ProjectSlide } from "./_components/ProjectSlide";
import TodoProjects from "./_components/TodoProjects";
import PastProjects from "./_components/PastProjects";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

const ProjectPage = () => {
  return (
    <div>
      <p className={`flex items-center text-emerald-900 dark:text-emerald-400  my-4  ml-4 md:ml-20 ${roboto.className} text-xl`}>
        <span className="text-xl mr-2">•</span> Yaptığım Projeler
      </p>
      <ProjectSlide />
      <TodoProjects/>
      <PastProjects/>
    </div>
  );
};

export default ProjectPage;
