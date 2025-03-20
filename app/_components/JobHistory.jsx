"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Heart, Award, Clock } from "lucide-react";

const stats = [
  { icon: Clock, number: "3+", label: "Yıl Deneyim" },
  { icon: Monitor, number: "30+", label: "Tamamlanan Projeler" },
  { icon: Heart, number: "100+", label: "Müşteri Memnuniyeti" },
  { icon: Award, number: "1M+", label: "Kod Satırı" },
];

export default function JobHistory() {
  return (
    <div className="mx-10 rounded-2xl shadow-[0_0px_5px] shadow-emerald-200 bg-gray-white dark:bg-[#292c34] mt-10 p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-transparent border-none text-center text-black dark:text-white flex flex-col items-center justify-center"
        >
          <CardContent className="flex flex-col justify-center  items-center gap-2">
            <stat.icon className="text-emerald-800 dark:text-green-400" />
            <span className="text-2xl ml-3 font-semibold">{stat.number}</span>
            <span className="text-sm ml-2 text-black dark:text-gray-400">
              {stat.label }
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}