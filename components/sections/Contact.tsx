"use client";

import {
  Mail,
  Send,
  MessageCircle,
  Globe,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="border-t py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium text-primary">
            Contact
          </p>

          <h2 className="text-5xl font-bold tracking-tight">
            Let's Build Something Great Together
          </h2>

          <p className="mt-6 text-muted-foreground">
            Interested in collaboration, freelance
            projects, or professional opportunities?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-3xl border bg-background/50 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-2xl font-semibold">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>

                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
              >
                <Send size={18} />

                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {success && (
                <p className="text-sm text-green-600">
                  Message sent successfully.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="rounded-3xl border bg-background/50 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-2xl font-semibold">
              Contact Information
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:aripujayuwana@gmail.com"
                className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-muted"
              >
                <Mail size={20} />
                aripujayuwana@gmail.com
              </a>

              <a
                href="https://wa.me/6282123925828"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-muted"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-muted"
              >
                <Globe size={20} />
                LinkedIn
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-muted"
              >
                <Globe size={20} />
                GitHub
              </a>
            </div>

            <div className="mt-10 rounded-2xl border p-6">
              <p className="font-medium">
                Available For
              </p>

              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• IT System Specialist</li>
                <li>• Infrastructure Projects</li>
                <li>• Monitoring Solutions</li>
                <li>• Web Development</li>
                <li>• Technical Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}