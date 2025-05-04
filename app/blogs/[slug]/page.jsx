
import Image from "next/image";
import { Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import { blogs } from "@/blogs";

// ✅ `generateStaticParams` ekliyoruz
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug, // Burada tüm blogların slug'larını alıyoruz
  }));
}

// 🔥 Dinamik parametreyi alarak ilgili blogu bul
export default function BlogDetail({ params }) {
  if (!params || !params.slug) {
    console.error("Hata: params.slug tanımlı değil!");
    return notFound();
  }

  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) {
    return notFound();
  }

  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 md:w-full">
      <div className="bg-gray-200 dark:bg-[#16181d] shadow-md shadow-emerald-300 text-white border-none rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-emerald-400">{blog.title}</h1>
        <p className="flex items-center gap-2 text-sm text-gray-500 mt-4">
          <Calendar size={15} /> {blog.publishDate}
        </p>
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="w-full h-auto mt-6 rounded-xl object-cover"
        />
        <p className="text-black dark:text-gray-400 text-lg mt-6">
          {blog.content}
        </p>
      </div>
    </div>
  );
}
