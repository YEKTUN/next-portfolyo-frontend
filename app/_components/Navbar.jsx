"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

import { SheetDemo } from "./SheetPort";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[5rem]  rounded-xl mt-6 bg-[#dfdfec] dark:bg-[#272730] flex  items-center justify-between px-6">
      <div className="flex justify-center items-center gap-4 text-[1.5rem]">
        <Image
          className=""
          src="/Ali-icon.png"
          alt="logo"
          width={50}
          height={50}
        />
        <span className="text-black dark:text-white hidden md:block">
          Ali Tunçer
        </span>
      </div>
      <div className="hidden md:flex gap-4 text-sm font-mono ">
        <Link className={"text-emerald-300 hover:text-emerald-500 active:text-emerald-300"} href={"/"}>
          Hakkımda
        </Link>
        <Link className={"text-emerald-300 hover:text-emerald-500 active:text-emerald-300"} href={"/projects"}>
          Projeler
        </Link>
        <Link className={"text-emerald-300 hover:text-emerald-500 active:text-emerald-300"} href={"/blogs"}>
          Blog
        </Link>
        <Link className={"text-emerald-300 hover:text-emerald-500 active:text-emerald-300"} href={"/contact"}>
          İletişim
        </Link>
      </div>
      <div className="flex   ">
        <div className="flex justify-center items-center gap-6 ">
          <a
            title="Github"
            href="https://github.com/YEKTUN"
            target="_blank"
            className=" transition-all duration-300   hover:scale-120"
          >
            <Github
              size={22}
              className={"text-black dark:text-white cursor-pointer"}
            />
          </a>
          <a
            title="Instagram"
            href="https://www.instagram.com/yektun1/"
            target="_blank"
            className=" transition-all duration-300   hover:scale-120"
          >
            <Instagram
              size={22}
              className={"text-black dark:text-white cursor-pointer"}
            />
          </a>
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/alitun%C3%A7er/"
            target="_blank"
            className=" transition-all duration-300   hover:scale-120"
          >
            <Linkedin
              size={22}
              className={"text-black dark:text-white cursor-pointer"}
            />
          </a>
        </div>
        <div className="ml-[40px] md:ml-[100px] flex justify-center items-center  ">
          <div className="flex md:hidden mr-2">
            <SheetDemo />
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
