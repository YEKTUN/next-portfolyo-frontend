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
          width={40}
          height={40}
        />
        <span className="text-black dark:text-white hidden md:block">Ali Tunçer</span>
      </div>
      <div className="hidden md:flex">
      <Link href={"/"}>
      <Button variant={"link1"}>Hakkımda</Button></Link>
        <Link href={"/projects"}><Button  variant={"link1"}>Projeler</Button></Link>
        <Link href={"/blogs"}><Button  variant={"link1"}>Blog</Button></Link>
        <Link href={"/contact"}><Button variant={"link1"}>İletişim</Button></Link>
      </div>
      <div className="flex   ">
        <div className="flex justify-center items-center gap-6 ">
          <a title="Github" href="https://github.com/YEKTUN" target="_blank" className=" transition-all duration-300   hover:scale-120">
            <Github size={22} className={"text-black dark:text-white cursor-pointer"}  />
          </a>
          <a title="Instagram" href="https://www.instagram.com/yektun1/" target="_blank"className=" transition-all duration-300   hover:scale-120">
            <Instagram  size={22} className={"text-black dark:text-white cursor-pointer"}  />
          </a>
          <a title="Linkedin" href="https://www.linkedin.com/in/alitun%C3%A7er/" target="_blank" className=" transition-all duration-300   hover:scale-120">
            <Linkedin  size={22} className={"text-black dark:text-white cursor-pointer"}  />
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
