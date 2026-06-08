import { Resend } from "resend";

export async function POST(req: Request) {
  // Pindahkan inisialisasi ke dalam handler agar tidak dieksekusi saat build time
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validasi sederhana jika input kosong
    if (!name || !email || !message) {
      return Response.json(
        { error: "Semua kolom (name, email, message) wajib diisi." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["aripujayuwana@gmail.com"],
      subject: `Portfolio Contact - ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Menangani error respon spesifik dari API Resend
    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json(data);
  } catch (error: any) {
    return Response.json(
      { error: error.message || "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}
