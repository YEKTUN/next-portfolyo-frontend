"use client";
import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// 📌 Zod Validasyon Şeması
const contactSchema = z.object({
  name: z.string().min(2, "Ad en az 2 karakter olmalıdır."),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "Telefon numarası 10 veya 11 haneli olmalıdır."),
  email: z.string().email("Geçerli bir e-posta adresi girin."),
  subject: z.string().min(3, "Konu en az 3 karakter olmalıdır."),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır."),
});

export default function ContactForm() {
  // 📌 Form state'leri
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});

  // 📌 Input değişikliklerini takip eden fonksiyon
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Kullanıcı yazdıkça hatayı temizle
  };

  // 📌 Form Gönderme Fonksiyonu
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setErrors({});

    // 📌 Validasyon Kontrolü
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const newErrors = {};
      validation.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/contact", formData);

      setSuccess(response.data.message);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      setErrors({
        form: err.response?.data?.message || err.message || "Bir hata oluştu!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full mt-10 max-w-3xl mx-auto bg-gray-200 dark:bg-[#16181d] text-black dark:text-white border-none rounded-2xl shadow-md shadow-emerald-300 p-6">
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* 📌 Genel Form Hataları */}
          {errors.form && <p className="text-red-500 text-sm">{errors.form}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          {/* 📌 Ad ve Telefon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-black dark:text-gray-300 mb-2">
                Adınız
              </Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Adınız"
                className="bg-gray-200 dark:bg-[#0d0f14] text-black dark:text-white border-gray-700"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <Label className="text-black dark:text-gray-300 mb-2">
                Telefon
              </Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon"
                className="bg-gray-200 dark:bg-[#0d0f14] text-black dark:text-white border-gray-700"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* 📌 E-posta ve Konu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-black dark:text-gray-300 mb-2">
                E-posta
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-posta"
                className="bg-gray-200 dark:bg-[#0d0f14] text-black dark:text-white border-gray-700"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <Label className="text-black dark:text-gray-300 mb-2">Konu</Label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Konu"
                className="bg-gray-200 dark:bg-[#0d0f14] text-black dark:text-white border-gray-700"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
              )}
            </div>
          </div>

          {/* 📌 Mesaj Alanı */}
          <div>
            <Label className="text-black dark:text-gray-300 mb-2">Mesaj</Label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mesajınız..."
              className="bg-gray-200 dark:bg-[#0d0f14] text-black dark:text-white border-gray-700 h-32"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* 📌 Gönder Butonu */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-900 dark:bg-emerald-400 text-black font-bold py-3 rounded-md hover:bg-emerald-500 transition"
          >
            {loading ? "Gönderiliyor..." : "Mesaj Gönder"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
