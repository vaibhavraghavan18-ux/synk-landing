"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container-prose pt-16 pb-20">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h1 className="text-5xl font-semibold leading-tight">
            Your travel, <span className="text-[#4da8ff]">perfectly synchronised</span>.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            One AI that plans, books, and adjusts every ride, stay, and trip — one seamless experience.
          </p>
          <div className="flex gap-3">
            <a href="#waitlist" className="btn-primary">Get early access</a>
            <a href="#how" className="btn-ghost">See how it works</a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <motion.img
            src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1200&auto=format&fit=crop"
            alt="Travel preview"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
