export default function Story() {
  return (
    <section id="story" className="container-prose py-20">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold">The broken experience</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Booking a cab to the airport, finding the right flight, picking a hotel—
            each step happens in a different app. Then plans change and you re-do
            everything: cancel here, rebook there, fix payments somewhere else.
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            Synk stitches the whole journey together. It understands your intent,
            compares options, books the smartest combo, and keeps everything in sync.
            If your flight is delayed, the hotel and airport ride update—automatically.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="card p-6 space-y-4">
            <h3 className="font-medium text-white/80">One surprising insight</h3>
            <p className="text-white/60">
              Most travellers switch between 3–5 apps per trip, yet <em>no single place</em>
              coordinates the whole experience. We’re building that missing layer.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="glass rounded-xl p-4">
                <p className="text-white/60">Today</p>
                <p className="font-medium">Siloed apps, manual fixes</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-white/60">With Synk</p>
                <p className="font-medium">One continuous flow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
