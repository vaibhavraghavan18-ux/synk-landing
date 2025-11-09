export default function Header() {
  return (
    <header className="container-prose pt-8 pb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" className="h-8 w-8" alt="Velora logo" />
        <span className="text-white/90 font-semibold tracking-wide">Velora</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-white/70">
        <a href="#story" className="hover:text-white">Story</a>
        <a href="#how" className="hover:text-white">How it works</a>
      </nav>
      <a href="#waitlist" className="btn-primary rounded-xl">Join waitlist</a>
    </header>
  );
}
