"use client";
import Image from "next/image";
import React from "react";

const MyAbout = () => {
  return (
    <div className="m-6 sm:m-10 md:h-[550px] shadow-emerald-300 shadow-sm rounded-3xl bg-gray-400 dark:bg-inherit flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-4">
      <div className="text-white font-mono text-lg max-w-3xl">
        <p className="text-black dark:text-gray-300">
          <span className="text-pink-900 dark:text-pink-400">{"<span>"}</span>
          Selamlar herkese, ben{" "}
          <span className="text-black dark:text-gray-300">Ali Tunçer</span>
          <span className="text-pink-900 dark:text-pink-400">{"</span>"}</span>
        </p>

        <h1 className="text-black dark:text-white text-3xl sm:text-4xl font-bold mt-4">
          Mid{" "}
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            {"{Full"}
          </span>{" "}
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            {"Stack}"}
          </span>{" "}
          Web & Mobile Developer
        </h1>

        <p className="mt-4 text-black dark:text-gray-300 text-base sm:text-lg">
          <span className="text-emerald-500">{"<p>"}</span>3 yıldır bu
          sektördeyim ve modern teknolojilerde uzmanlığımı kullanarak{" "}
          <span className="text-blue-400">yenilikçi</span> ve{" "}
          <span className="text-green-400">güçlü</span> web ve mobil çözümleri
          sunuyorum. Kullanıcı dostu ve{" "}
          <span className="text-yellow-400">etkileyici</span> projeler
          geliştirmeye odaklanıyorum. Uzmanlık alanlarım arasında{" "}
          <span className="text-red-400">Next.js</span>,{" "}
          <span className="text-indigo-400">Node.js</span>,{" "}
          <span className="text-emerald-200">Spring Boot</span>,{" "}
          <span className="text-yellow-300">React Native</span>,{" "}
          <span className="text-lime-300">React.js</span> bulunmaktadır. Ayrıca,{" "}
          <span className="text-red-400">
            Artificial Intelligence ve Machine Learning
          </span>{" "}
          alanlarında çalışmalar yapmaktayım. Bunun yanı sıra,{" "}
          <span className="text-emerald-700 dark:text-emerald-200">
            etik hacking ve siber güvenlik alanlarına
          </span>{" "}
          merakım var. Yakın zamanda bu sektörlerde de deneyim sahibi olmayı
          planlıyorum.
          <span className="text-emerald-500">{"</p>"}</span>
        </p>
      </div>
      <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-[450px] md:h-[450px] relative rounded-2xl overflow-hidden">
        <Image
          src="/ben2.png"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          alt="Ben"
        />
      </div>
    </div>
  );
};

export default MyAbout;
