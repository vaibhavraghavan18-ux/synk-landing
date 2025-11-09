'use client';
import { motion } from "framer-motion";

const steps = [
  { title: "Understands intent", desc: "Tell Synk your plan in plain English.", tag: "NLP" },
  { title: "Plans & compares", desc: "Finds the best combo of cabs, flights, stays.", tag: "Planner" },
  { title: "Books & pays", desc: "Smart wallet applies offers and rewards.", tag: "Wallet" },
  { title: "Monitors & adjusts", desc: "Delays? Auto rebook and notify.", tag: "Autopilot" }
];

export default function HowItWorks() {
  return (
    <section id="how" className="container-prose py-20">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-8">How it works</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="card p-5"
          >
            <span className="badge mb-3">{s.tag}</span>
            <h3 className="font-semibold text-xl">{s.title}</h3>
            <p className="text-white/65 mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
