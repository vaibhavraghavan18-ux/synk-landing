export default function Footer() {
  return (
    <footer className="container-prose py-10 text-white/60 text-sm">
      <hr className="divider" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" className="h-5 w-5" alt="Synk logo" />
          <span>Synk</span>
          <span className="text-white/30">•</span>
          <span>Built for The Ken Challenge</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
