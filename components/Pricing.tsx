export default function Pricing() {
  return (
    <section id="pricing" className="container-prose py-20">
      <h2 className="text-3xl sm:text-4xl font-semibold text-balance">Simple pricing that pays for itself</h2>
      <p className="text-white/70 mt-3 max-w-2xl">
        Compared to juggling multiple apps (and missing offers), Synk’s smart wallet and time saved more than
        offset the cost for frequent travellers.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card p-6">
          <h3 className="font-semibold">Now (multiple apps)</h3>
          <ul className="text-white/70 mt-3 space-y-2">
            <li>Wasted time + missed cashback</li>
            <li>Manual comparisons across apps</li>
            <li>Rebooking fees on changes</li>
          </ul>
        </div>
        <div className="card p-6 border-brand-400/40">
          <div className="badge mb-2">Recommended</div>
          <h3 className="font-semibold">Synk Pro — ₹199/month</h3>
          <ul className="text-white/70 mt-3 space-y-2">
            <li>Auto planning & rebooking</li>
            <li>Smart wallet — best card per booking</li>
            <li>Priority support & early features</li>
          </ul>
        </div>
      </div>
      <p className="text-xs text-white/50 mt-4">*Indicative pricing for beta; final tiers may change.</p>
    </section>
  );
}
