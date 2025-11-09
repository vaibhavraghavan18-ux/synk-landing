export default function Proof() {
  return (
    <section id="proof" className="container-prose py-20">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold">Early signals & social proof</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { quote: "Finally, travel that fixes itself. My flight moved and everything else adjusted on its own.", name: "Ishita, Consultant" },
              { quote: "It’s like having an ops team for every trip. I don’t open 4 apps anymore.", name: "Rohit, Product Manager" },
              { quote: "The wallet picks the best card every time. Real savings without effort.", name: "Meera, Frequent Flyer" },
            ].map((t, idx) => (
              <div key={idx} className="card p-5">
                <p className="text-white/80">“{t.quote}”</p>
                <p className="text-white/50 mt-2 text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="card p-6 space-y-4">
            <p className="text-white/70">Where our first users hang out</p>
            <div className="grid grid-cols-3 gap-3 text-white/70 text-sm">
              {["Product Hunt", "Reddit Travel", "Nomad List", "SPJIMR", "LinkedIn", "Twitter"].map((n) => (
                <div key={n} className="glass rounded-xl py-3 px-4 text-center">{n}</div>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              We’re prioritising road warriors, frequent city travellers, and couples planning quick getaways.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
