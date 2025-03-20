"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Roboto } from "next/font/google";
import Image from "next/image";

const projects = [
  {
    title: "E-Ticaret Web Projesi",
    description:
      "Kendim için bir e-ticaret platformu oluşturmayı hedefliyorum.Üzerinde geliştirmeler yapacağım bir uygulama olacak.İleride satış yapmayı düşünüyorum",
    image: "/portolyoImages/ecommerce2.png",
  },
  {
    title: "PlayStore için Mobil App",
    description:
      "Google Play Store yayınlayacağım bir 3DScanner uygulaması geliştiriyorum.Abonelikleri olacak.Uygulama şuanda yapım aşaamsında.",
    image: "/portolyoImages/3dscanner2.png",
  },
];
const roboto = Roboto({ subsets: ["latin"], weight: "300" });
export default function TodoProjects() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 md:w-[1000px]">
      <h2 className={`text-2xl md:text-3xl font-bold text-emerald-900 dark:text-emerald-400 mb-6 ${roboto.className}`}>
        Üzerinde Çalıştığım Projeler
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gray-300 dark:bg-[#16181d] shadow-sm shadow-emerald-300 flex justify-center items-center text-white border-none rounded-2xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}   
              height={500}
              className="w-70 h-60 object-cover rounded-xl"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold text-xl text-black dark:text-white">{project.title}</h3>
              <p className="text-black dark:text-gray-400 text-sm mt-2">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
