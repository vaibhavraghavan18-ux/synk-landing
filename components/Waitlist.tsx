'use client';
import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "ok" | "err">(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Replace with your Formspree endpoint or Google Form action
      const endpoint = "https://formspree.io/f/xbldjvke"; // placeholder – create your form and replace
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) setEmail("");
    } catch {
      setStatus("err");
    }
  };

  return (
    <section id="waitlist" className="container-prose py-20">
      <div className="card p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Be among the first 500</h2>
            <p className="text-white/70 mt-3">
              Join the beta and get early access when we open Synk to travellers.
              You’ll receive a welcome email with next steps.
            </p>
          </div>
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-xl bg-white/5 border border-white/15 px-4 py-3 outline-none focus:border-brand-400"
            />
            <button className="btn-primary">Join waitlist</button>
          </form>
        </div>
        {status === "ok" && (
          <p className="text-green-400 mt-4">Thanks! Check your inbox for a welcome email.</p>
        )}
        {status === "err" && (
          <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
