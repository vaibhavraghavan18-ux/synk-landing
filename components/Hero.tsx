'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container-prose pt-16 pb-20">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 badge mb-2">
            <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
            Travel that manages itself
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Your travel, <span className="text-brand-400">perfectly synchronised</span>.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            One AI that understands intent, plans ahead, books the best options, and
            quietly adjusts when plans change. From daily commutes to weekend getaways,
            Synk keeps rides, stays, and payments in lockstep.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#waitlist" className="btn-primary">Get early access</a>
            <a href="#how" className="btn-ghost">See how it works</a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-white/60">
            <span>Auto rebooking</span>
            <span>Smart wallet</span>
            <span>Zero app-hopping</span>
          </div>
        </div>
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-4"
          >
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-white/5" />
              <img
                src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1200&auto=format&fit=crop"
                alt="Product preview"
                className="w-full h-[360px] object-cover"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {[
                { title: "Understands", desc: "Natural-language plans" },
                { title: "Books", desc: "Cabs • Stays • Flights" },
                { title: "Adjusts", desc: "Delays → auto rebook" },
              ].map((i, idx) => (
                <div key={idx} className="glass rounded-xl p-4">
                  <p className="text-sm text-white/60">{i.title}</p>
                  <p className="font-medium">{i.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
