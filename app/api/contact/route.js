import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

// 📌 Bağlantı kontrolü
console.log("MONGODB_URI:", MONGODB_URI);

async function connectDB() {
 
  await mongoose.connect(MONGODB_URI); // ✅ yeterli

  
}

// 📌 Schema ve Model
const ContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

// 📌 POST isteğini işle
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, subject, message } = body;

    await connectDB();

    const existing = await Contact.findOne({ $or: [{ email }, { phone }] });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "Bu e-posta veya telefon zaten kayıtlı." },
        { status: 400 }
      );
    }

    await Contact.create({ name, phone, email, subject, message });
    return NextResponse.json(
      { success: true, message: "Mesaj başarıyla gönderildi." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
