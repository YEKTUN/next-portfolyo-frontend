import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import ContactInfo from "./ContactInfo";

import Link from "next/link";

const Footer = () => {
 
  return (
    <div className=" mb-10">
      <Separator className={"my-4 bg-emerald-200 opacity-60"} />
      <div className="flex justify-end items-center ml-[300px] gap-[270px]">
        <div className="space-y-6 mt-10 ">
          <div className="hidden md:flex   min-w-[100px] justify-center items-center  ">
            <Link href={"/"}>
              <Button variant={"linkfooter"}>Hakkımda</Button>
            </Link>
            <Link href={"/projects"}>
              <Button variant={"linkfooter"}>Projeler</Button>
            </Link>
            <Link href={"/blogs"}>
              
              <Button variant={"linkfooter"}>Blog</Button>
            </Link>
            <Link href={"/contact"}>
              <Button variant={"linkfooter"}>İletişim</Button>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-6   ">
            <a title="Github" href="https://github.com/YEKTUN" target="_blank" className=" transition-all duration-300   hover:scale-120">
              <Github className={"text-black dark:text-white cursor-pointer"} size={22} />
            </a>
            <a
              title="Instagram"
              href="https://www.instagram.com/yektun1/"
              target="_blank"
              className=" transition-all duration-300   hover:scale-120"
            >
              <Instagram  size={22} className={"text-black dark:text-white cursor-pointer"}  />
            </a>
            <a
              className=" transition-all duration-300   hover:scale-120"
              title="Linkedin"
              href="https://www.linkedin.com/in/alitun%C3%A7er/"
              target="_blank"
            >
              <Linkedin  size={22} className={"text-black dark:text-white cursor-pointer"}  />
            </a>
          </div>
          <div className="hidden md:flex justify-center mr-2 items-center gap-4 text-[1.5rem]">
            <Image
              className=""
              src="/Ali-icon.png"
              alt="logo"
              width={40}
              height={40}
            />
            <span className="text-black dark:text-white hidden md:block">Ali Tunçer</span>
          </div>
        </div>
        <ContactInfo />
      </div>
    </div>
  );
};

export default Footer;
