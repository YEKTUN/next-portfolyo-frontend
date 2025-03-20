"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "300" });
const projects = [
  {
    title: "Muhasebe Yazılımı",
    description:
      "Bir firma için React, Vite.js ve Django kullanarak bir muhasebe yazılımı geliştirdim. Sistem, hesaplama ve raporlama süreçlerini kolaylaştırmak için tasarlandı. Kullanıcı dostu bir arayüz ve otomatik raporlama özellikleri ile dikkat çekiyor.",
  },
  {
    title: "Web Siteleri",
    description:
      "Daha önce, küçük ve orta ölçekli firmalar için toplamda 100-150 adet küçük çaplı web sitesi geliştirdim. Bu projelerde genellikle HTML, CSS, JavaScript, Django ve React kullandım. Üniversitede öğrendiğim için bazı projelerde ASP.NET Klasik teknolojisini de kullandım. Tasarımlar genellikle müşteri odaklı ve responsive özelliklere sahipti.",
  },
  {
    title: "Araç Kiralama Projeleri",
    description:
      "Bazıları tamamen full-stack, bazıları ise yalnızca front-end olarak tasarlandı. Bu projeler özellikle araç kiralama firmalarının dijitalleşme süreçlerine katkı sağladı. Rezervasyon ve araç envanteri yönetimi gibi işlevler sunuluyordu.",
  },
  {
    title: "E-ticaret Siteleri",
    description:
      "Küçük ve orta ölçekli işletmeler için e-ticaret platformları geliştirdim. Kullanıcıların ürünleri kolayca görüntüleyip satın almasını sağlayan modern ve hızlı platformlar oluşturuldu. Projelerde genellikle React, Next.js ve TailwindCSS gibi teknolojiler kullanıldı.",
  },

  {
    title: "Emlak Yönetim Sistemleri",
    description:
      "Emlak sektörüne yönelik, portföy yönetimi ve müşteri ilişkilerini kolaylaştıran sistemler geliştirdim. Projeler, kullanıcıların ilanları kolayca görüntülemesine ve iletişim kurmasına olanak sağlıyordu.",
  },
  {
    title: "Mobil Uygulama Tasarımları",
    description:
      "React Native kullanarak, hem Android hem de iOS platformlarında çalışan mobil uygulama prototipleri geliştirdim. Özellikle, e-ticaret ve eğitim sektörlerine yönelik uygulamalar üzerinde çalıştım.",
  },
  {
    title: "Freelance Projeler",
    description:
      "Freelancer olarak çeşitli bireysel ve kurumsal müşterilere özel çözümler sundum. Kimi zaman yalnızca tasarım desteği, kimi zaman ise tam kapsamlı yazılım projeleri üstlendim. Projeler arasında blog, portföy ve etkinlik yönetim siteleri de bulunuyor.",
  },
  {
    title: "Finansal Yönetim Uygulamaları",
    description:
      "Firmaların finansal süreçlerini takip etmeleri için tasarlanmış yazılımlar geliştirdim. Bu projelerde ödeme takibi, bütçe yönetimi ve finansal analiz özellikleri sunuldu.",
  },
  {
    title: "Eğitim Platformları",
    description:
      "Eğitim kurumları ve bireysel eğitmenler için online ders platformları tasarladım. Video dersler, sınavlar ve interaktif içerikler içeren bu platformlar, kullanıcıların kolayca öğrenim görmesini sağladı.",
  },
];

export default function PastProjects() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 ">
      <h2 className={`text-2xl md:text-3xl font-bold  text-emerald-900 dark:text-emerald-400 mb-6 ${roboto.className}`}>
        Geçmiş Projeler
      </h2>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gray-300 dark:bg-[#16181d] shadow-md shadow-emerald-300 h-54 md:h-40 text-white border-none rounded-2xl p-6"
          >
            <CardContent>
              <h3 className="font-bold text-xl text-black dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-black dark:text-gray-400 text-sm">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}