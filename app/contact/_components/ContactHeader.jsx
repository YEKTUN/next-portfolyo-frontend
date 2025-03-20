"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <Card className="relative w-full bg-gray-200 dark:bg-[#16181d] text-black dark:text-white border-none rounded-2xl overflow-hidden shadow-md shadow-emerald-300">
      <CardContent className="p-6 flex justify-center items-center text-2xl font-bold font-mono relative z-10">
        İletişime Geç
      </CardContent>
      {/* Sağ üstteki animasyon */}
      <motion.div
        className="absolute right-[50px] md:right-[570px]   top-0 w-100 h-60 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1" className="fill-teal-500"  />
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" className="fill-teal-500"/>
          <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="1" className="fill-teal-500 " />
          <circle cx="50" cy="50" r="10" stroke="white" strokeWidth="1" className="fill-teal-500 " />
        </svg>
      </motion.div>
    </Card>
  );
}