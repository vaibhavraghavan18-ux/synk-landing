export default function VisualCompare() {
  return (
    <section className="container-prose py-20">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-8">See the difference</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Before</h3>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Juggle Uber, Ola, MMT, airline & hotel apps</li>
            <li>Re-enter details and compare manually</li>
            <li>Plans change → cancel & rebook everywhere</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">After (with Synk)</h3>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Describe the plan once</li>
            <li>AI plans, books, and pays with the best offers</li>
            <li>Delays trigger automatic rebookings & notifications</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
