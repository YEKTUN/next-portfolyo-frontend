"use client";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";
import { icons } from "@/icons";

export function IconSlide() {
  // İkonları sonsuz döngü sağlamak için iki kez çoğaltıyoruz
  const [loopIcons, setLoopIcons] = useState([...icons, ...icons]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true, // Sonsuz döngü etkin
      }}
      plugins={[
        Autoplay({
          delay: 1000, // 3 saniyede bir değişim
          stopOnInteraction: false, // Kullanıcı tıklasa bile devam etsin
          stopOnHover: false, // Üzerine gelince durmasın
        }),
      ]}
      className="w-full max-w-screen overflow-hidden px-20  "
    >
      <CarouselContent className="flex transition-transform duration-[10000ms] ease-linear ">
        {loopIcons.map((icon, index) => (
          <CarouselItem key={index} className="  max-w-[200px] flex justify-center items-center">
            <Image src={icon.src} alt={icon.name||"image"} width={60} height={60} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
