"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Link } from "lucide-react";

const projectInfos = [
  {
    projectName: "MobilePano",
    projectDescription:
      "Bu mobil pano sayesinde mobil uygulama geliştireceğimiz zaman bir mock-up ile birlikte ön hazırlık konusunda bizlere yardımcı olmaktadır.29 farklı bileşen için özellikleri json olarak alınmaktadır.Bu özellikleri PropertiesPanel aracılığıyla güncelleyebilmekteyiz.",
    projectUsedTechnologies: "React.js, TailwindCSS,Redux Toolkit,Node.js",
    projectCompletionTime: "7 Gün",
    projectImage: "/portolyoImages/mobile-pano.png",
    projectURL:""
  },
  {
    projectName: "DijiPano",
    projectDescription:
      "Bu pano veya afiş tasarımı yapabileceğimiz bir editör diyebiliriz. Reklam afişlerinde ,sokak panolarında kullanabileceğimiz bir pano editörüdür.",
    projectUsedTechnologies: "React.js, TailwindCSS,Node.js,Redux Toolkit",
    projectCompletionTime: "5 Gün",
    projectImage:  "/portolyoImages/pano-creator.png",
    projectURL:""
  },
  {
    projectName: "Rhodark",
    projectDescription:
      "Bitkiler ile ilgili  kitleri bağlayıp onları kontrol etme ve bilgi alma amaçlı yazılmıştir.Sadece frontend tarafı mevcuttur.",
    projectUsedTechnologies: "React Native, NativeWind",
    projectCompletionTime: "5 Gün",
    projectImage:  "/portolyoImages/rhodark.png",
  },
 
];

export function ProjectSlide() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({ delay: 3000, stopOnInteraction: false, stopOnHover: false }),
      ]}
      className="w-full max-w-screen  overflow-hidden px-4 md:px-10 lg:px-20"
    >
      <CarouselContent >
        {projectInfos.map((project, index) => (
          <CarouselItem key={index} className="basis-full  ">
            <Card className="bg-gray-200 dark:bg-[#16181d] shadow-md shadow-emerald-300 text-white border-none rounded-2xl">
              <CardContent className="p-4 flex flex-col items-center h-[600px] justify-center gap-4">
                {/* Resim Boyutunu Sabitleme */}
                <div className="w-[400px] h-[200px] md:w-[800px] md:h-[800px] relative overflow-hidden rounded-xl">
                  {project.projectName==="Rhodark"?(
                    
                    <Image
                    src={project.projectImage}
                    alt={project.projectName || "image"}
                    height={200}
                    width={200}
                    className="ml-[155px] md:ml-[300px] w-25 h-50 md:w-[200px] md:h-[450px]"/> // 🔥 Tüm resimleri kırpmadan kaplamasını sağlar
                  ):(
                    <Image
                      src={project.projectImage}
                      alt={project.projectName || "image"}
                      fill // 🔥 `fill` kullanarak otomatik boyutlandır
                      className="object-cover" // 🔥 Tüm resimleri kırpmadan kaplamasını sağlar
                      />
                  )}
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-xl text-emerald-400">
                    {project.projectName}
                  </h3>
                  <p className="text-black dark:text-gray-400 text-sm mt-2">
                    {project.projectDescription}
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    <p className="text-black dark:text-gray-400">
                      <span className="text-emerald-900 dark:text-emerald-300">
                        Teknolojiler:
                      </span>{" "}
                      {project.projectUsedTechnologies}
                    </p>
                    <p className="text-black dark:text-gray-400">
                      <span className="text-emerald-900 dark:text-emerald-300">
                        Tamamlanma Süresi:
                      </span>{" "}
                      {project.projectCompletionTime}
                    </p>
                    {project.projectName!=="Rhodark"&&(
                      <p className="text-black dark:text-gray-400 mt-2">
                      <a target="_blank"  href={project.projectName==="Rhodark"?"":project.projectURL} className="space-x-4  text-emerald-900 dark:text-emerald-300">
                      <Link className="inline"/><span>Demoya Gidin</span>
                      </a>{" "}
                     
                    </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
