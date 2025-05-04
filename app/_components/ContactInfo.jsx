"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Mail,Phone } from "lucide-react";

const contactItems = [
  { icon: Instagram, title: "Instagram", content: "@yektun1" },
  { icon: Mail, title: "E-posta", content: "ali.tuncer@yektun.com" },
  { icon: Phone, title: "Telefon", content: "0534 260 17 42" },
];

export default function ContactInfo() {
  return (
    <div className="mx-10 my-10  flex flex-col gap-6">
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-center gap-4  ">
          <div className="bg-[#16181d] shadow-[0px_0px_5px] shadow-emerald-200 rounded-lg p-3">
            <item.icon className="text-green-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm">{item.title}</span>
            <span className="text-black dark:text-white font-medium">{item.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
