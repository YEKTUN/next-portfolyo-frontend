/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Static Export için gerekli
    images: {
      unoptimized: true, // Hostinger'de optimize edilmemiş görseller kullanabilmek için
    },
    trailingSlash: true, // ⭐️ Bu satırı ekle
   
}
 

export default nextConfig;
