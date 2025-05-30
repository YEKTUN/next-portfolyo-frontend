"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const projectInfos = [
  {
    projectName: "Genyzio",
    projectDescription:
      "Genyzio kullanıcılar satış yapabilmesini sağlayan bir e ticaret uygulamasıdır. Kullanıcılar ürünlerini ekleyebilir, düzenleyebilir ve silebilirler. Müşteri ve satıcı olarak iki farklı kullanıcı tipi bulunmaktadır. Müşteriler ürünleri görüntüleyebilir ve satın alabilirler. Satıcılar ise ürünlerini ekleyebilir, düzenleyebilir ve silebilirler.",
    projectUsedTechnologies: "Next.js, TailwindCSS,Node.js,Redux Toolkit",
    projectCompletionTime: "7 Gün",
    projectImage: ["/portolyoImages/genyzio.png?v=2"],
    projectURL: "https://genyzio-com.vercel.app",
  },
  {
    projectName: "OfflineViewer",
 projectDescription:
    "OfflineViewer, kullanıcıların belirli URL'ler üzerinden web sitelerinin ekran görüntülerini alarak bu siteleri analiz etmelerini sağlayan bir uygulamadır. Web scraping yöntemiyle sayfa görüntüleri alınır ve bu içerikler offline şekilde görüntülenebilir. Böylece kullanıcılar internet bağlantısı olmasa bile daha önce yükledikleri siteleri incelemeye ve analiz etmeye devam edebilir.",

    projectUsedTechnologies: "React Native, Nativewind,Node.js,Redux Toolkit",
    projectCompletionTime: "6 Gün",
    projectImage: [
      "/portolyoImages/OfflineViewer1.png",
      "/portolyoImages/OfflineViewer2.png",
      "/portolyoImages/OfflineViewer3.png",
      "/portolyoImages/OfflineViewer4.png",
      "/portolyoImages/OfflineViewer5.png",
      "/portolyoImages/OfflineViewer6.png",
      "/portolyoImages/OfflineViewer7.png",

    ],
  },
  {
    projectName: "Tekerlemek",
    projectDescription:
      "Tekerlemek, kullanıcıların diksiyonlarını geliştirebilmeleri için tasarlanmış bir konuşma pratiği uygulamasıdır. Uygulama içerisinde hazır tekerlemeler yer almakta ve kullanıcılar kendi tekerlemelerini de ekleyebilmektedir. Bu sayede kullanıcılar, kişiselleştirilmiş içeriklerle etkili bir şekilde konuşma ve telaffuz çalışmaları yapabilirler.",

    projectUsedTechnologies: "React Native, Nativewind,Node.js,Redux Toolkit",
    projectCompletionTime: "3 Gün",
    projectImage: ["/portolyoImages/Tekerlemek1.png","/portolyoImages/Tekerlemek2.png","/portolyoImages/Tekerlemek3.png","/portolyoImages/Tekerlemek4.png","/portolyoImages/Tekerlemek5.png","/portolyoImages/tekerlemek.png"],
  },
  {
    projectName: "DijiPano",
    projectDescription:
      "Bu pano veya afiş tasarımı yapabileceğimiz bir editör diyebiliriz. Reklam afişlerinde ,sokak panolarında kullanabileceğimiz bir pano editörüdür.",
    projectUsedTechnologies: "React.js, TailwindCSS,Node.js,Redux Toolkit",
    projectCompletionTime: "5 Gün",
    projectImage: ["/portolyoImages/pano-creator.png?v=2"],
    projectURL: "https://dijipano-react.onrender.com",
  },
  {
    projectName: "MobilePano",
    projectDescription:
      "Bu mobil pano sayesinde mobil uygulama geliştireceğimiz zaman bir mock-up ile birlikte ön hazırlık konusunda bizlere yardımcı olmaktadır.29 farklı bileşen için özellikleri json olarak alınmaktadır.Bu özellikleri PropertiesPanel aracılığıyla güncelleyebilmekteyiz.",
    projectUsedTechnologies: "React.js, TailwindCSS,Redux Toolkit,Node.js",
    projectCompletionTime: "7 Gün",
    projectImage: ["/portolyoImages/mobile-pano.png?v=2"],
    projectURL: "https://mobile-pano-react.onrender.com",
  },
  {
    projectName: "Rhodark",
    projectDescription:
      "Bitkiler ile ilgili  kitleri bağlayıp onları kontrol etme ve bilgi alma amaçlı yazılmıştir.Sadece frontend tarafı mevcuttur.",
    projectUsedTechnologies: "React Native, NativeWind",
    projectCompletionTime: "5 Gün",
    projectImage: ["/portolyoImages/rhodark.png?v=2"],
  },
];

export function ProjectSlide() {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[Autoplay({ delay: 3000 })]}
      className="w-full max-w-screen px-4 md:px-10 lg:px-20"
    >
      <CarouselContent>
        {projectInfos.map((project, index) => (
          <CarouselItem key={index} className="basis-full">
            <Card className="bg-gray-200 dark:bg-[#16181d] shadow-md shadow-emerald-300 text-white border-none rounded-2xl">
              <CardContent className="p-4 flex flex-col items-center min-h-[600px] justify-center gap-4">
                {/* Görsel alanı */}
                {project.projectImage.length > 1 ? (
                  // İç Carousel aktif
                  <Carousel className="w-full max-w-[400px] md:max-w-[500px] relative">
                    <CarouselContent>
                      {project.projectImage.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden">
                            <Image
                              src={image}
                              alt={`${project.projectName} Screenshot ${
                                idx + 1
                              }`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* Ok Tuşları */}
                    <CarouselPrevious className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10" />
                  </Carousel>
                ) : (
                  // Tek görsel varsa Carousel yok
                  <div className="relative h-[400px] md:h-[500px] w-full max-w-[400px] md:max-w-[500px] rounded-xl overflow-hidden">
                    <Image
                      src={project.projectImage[0]}
                      alt={`${project.projectName} Screenshot`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Proje Bilgileri */}
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
                    {project.projectURL && (
                      <p className="text-black dark:text-gray-400 mt-2">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.projectURL}
                          className="text-emerald-900 dark:text-emerald-200 border-b-2 border-emerald-200 hover:text-blue-500 transition-all"
                        >
                          Demoya Gidin
                        </a>
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
