"use client";
import { motion } from "framer-motion";

const steps = [
  { title: "Understands intent", desc: "You describe your plan in plain English." },
  { title: "Plans & compares", desc: "Velora finds optimal rides, flights, and stays." },
  { title: "Books & pays", desc: "Smart wallet applies offers and rewards." },
  { title: "Adjusts & updates", desc: "Delays? Everything auto rebooks." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="container-prose py-20">
      <h2 className="text-3xl font-semibold mb-8">How it works</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="card p-5"
          >
            <h3 className="text-xl font-medium mb-2">{step.title}</h3>
            <p className="text-white/70">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
