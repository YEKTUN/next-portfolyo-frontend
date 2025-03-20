"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Roboto } from "next/font/google";
import Image from "next/image";
import {Calendar} from "lucide-react"
import { useRouter } from "next/navigation";
import { blogs } from "@/blogs";
const roboto = Roboto({ subsets: ["latin"], weight: "300" });
export default function BlogList() {
  const router=useRouter()
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 md:w-full">
      <div className="grid grid-cols-1  gap-6">
        {blogs.map((blog, index) => (
          <Card
            key={index}
            className="bg-gray-200  dark:bg-[#16181d] shadow-sm shadow-emerald-300 flex md:flex-row  justify-start  items-center p-10 text-white border-none rounded-2xl overflow-hidden"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={500}
              className="w-60 h-60  object-cover rounded-xl"
            />
            <CardContent className="p-4 ml-10">
              <h3 className="font-semibold text-xl text-black dark:text-white">
                {blog.title}
              </h3>
              <p className=" flex items-center  gap-2 font-semibold text-[10px] my-4 text-black dark:text-white"><Calendar  size={15}/>
                {blog.publishDate}
              </p>
              <p className="text-black dark:text-gray-400 text-sm mt-2">
                {blog.description}
              </p>
              <Button onClick={() => {
                router.push(`/blogs/${blog.slug}`)
              }} variant={"link2"}>Devamını Oku...</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
