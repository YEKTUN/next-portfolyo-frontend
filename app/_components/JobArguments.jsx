"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Zap,
  ShoppingCart,
  Cpu,
  Layers,
  Box,
  Users,
  ShoppingBag,
} from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: Monitor,
    title: "Web Geliştirme",
    description:
      "Next.js, React.js, HTML, CSS ve JavaScript gibi teknolojilerle SEO uyumlu, modern ve kullanıcı dostu web siteleri tasarlayabilirim.",
  },
  {
    icon: Smartphone,
    title: "Mobil Geliştirme",
    description:
      "React Native  kullanarak hem iOS hem de Android için platformlar arası mobil uygulamalar geliştirebilirim.",
  },
  {
    icon: Database,
    title: "Veritabanı Yönetimi",
    description:
      "MySQL, PostgreSQL veya MongoDB kullanarak ihtiyaçlarınıza uygun veritabanı tasarımı ve yönetimi yapabilirim.",
  },
  {
    icon: Cloud,
    title: "API Geliştirme",
    description:
      "RESTful API'ler oluşturabilir ve projelerinizde ödeme entegrasyonları dahil olmak üzere full stack çözümler geliştirebilirim.",
  },
  {
    icon: Zap,
    title: "Performans Optimizasyonu",
    description:
      "Web veya mobil uygulamalarınızın performansını artırabilir, hız ve SEO açısından optimize edebilirim.",
  },
  {
    icon: ShoppingCart,
    title: "E-ticaret Çözümleri",
    description:
      "Shopify, Stripe, Iyzico ve TailwindCSS kullanarak size özel e-ticaret platformları geliştirebilirim.",
  },
  {
    icon: Cpu,
    title: "Yapay Zeka Çözümleri",
    description:
      "Yapay zeka ve makine öğrenimi projelerinde size yardımcı olabilir ve süreçlerinizi optimize etmek için çözümler geliştirebilirim.",
  },
  {
    icon: Cloud,
    title: "Bulut Hizmetleri",
    description:
      "Pocketbase, Supabase veya Firebase gibi teknolojilerle bulut tabanlı projelerinizi geliştirebilir ve yapılandırabilirim.",
  },
  {
    icon: Layers,
    title: "Full Stack Yazılım Geliştirme",
    description:
      "Node.js,Express.js, MongoDB, PostgreSQL, React.js, Next.js ve Flask ile projelerinize özel, modern ve yüksek performanslı full stack çözümler geliştirebilirim.",
  },
  {
    icon: Box,
    title: "ERP Sistemi Geliştirme",
    description:
      "İş süreçlerinizi kolaylaştıracak ve optimize edecek ERP sistemleri tasarlayıp geliştirebilirim.",
  },
  {
    icon: Users,
    title: "CRM Çözümleri",
    description:
      "Müşteri yönetimi ve satış süreçlerini kolaylaştırmak için ihtiyacınıza uygun CRM sistemleri geliştirebilirim.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Tema Geliştirme",
    description:
      "E-ticaret mağazanız için estetik, işlevsel ve SEO uyumlu özel Shopify temaları tasarlayabilirim.",
  },
];

export default function JobArguments() {
  const navigate=useRouter();
  return (
    <div>
      <div className="mx-10 my-10 grid grid-cols-1 md:grid-cols-3 gap-6  justify-center">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-gray-500 dark:bg-[#16181d] h-50 border-none shadow-[0px_0px_5px] transition-all duration-300 hover:scale-104 cursor-pointer shadow-emerald-200 rounded-2xl p-6 text-black dark:text-white"
          >
            <CardContent className="flex flex-col gap-2">
              <service.icon className="text-emerald-400" />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-black dark:text-gray-400">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mx-10  font-semibold text-center">
        Yeni projelerle birlikte yeni iş ortaklıkları için benimle
        <Button
          variant={"link1"}
          className="text-emerald-600 dark:text-green-400 text-lg "
          onClick={() => {
            navigate.push("/contact");
          }}

        >
          İletişime Geç!
        </Button>
      </div>
    </div>
  );
}
