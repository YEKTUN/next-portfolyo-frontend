"use client";
import { Globe } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Varsayılan dil Türkçe olsun
  const [currentLang, setCurrentLang] = useState("tr");

  useEffect(() => {
    const langFromURL = searchParams.get("lang");
    if (langFromURL) {
      setCurrentLang(langFromURL);
    }
  }, [searchParams]);

  const toggleLanguage = () => {
    const newLang = currentLang === "tr" ? "en" : "tr";
    const newUrl = `${pathname}?lang=${newLang}`;
    
    router.push(newUrl);
    setCurrentLang(newLang);
  };

  return (
    <div className="w-full flex justify-end mt-3 pr-8">
      <button
        onClick={toggleLanguage}
        className="flex cursor-pointer items-center space-x-2 active:bg-gray-600 bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 hover:bg-gray-700 transition"
      >
        <Globe size={20} />
        <span>{currentLang === "tr" ? "Dil" : "Language"}</span>
      </button>
    </div>
  );
}
