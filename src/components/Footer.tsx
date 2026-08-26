export default function Footer() {
  return (
    <footer className="w-full py-20 px-16 flex flex-col md:flex-row justify-between items-center border-t border-white/5 bg-gradient-to-t from-primary/10 to-transparent bg-background mt-32 relative z-10 cursor-none hover:tracking-widest transition-all duration-700">
      <div className="text-headline-md font-headline-md text-primary mb-8 md:mb-0">
        SM.
      </div>
      <div className="flex gap-8 mb-8 md:mb-0">
        <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-secondary-fixed-dim transition-colors cursor-hover" href="#">Github</a>
        <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-secondary-fixed-dim transition-colors cursor-hover" href="#">LinkedIn</a>
        <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-secondary-fixed-dim transition-colors cursor-hover" href="#">Read.cv</a>
        <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-secondary-fixed-dim transition-colors cursor-hover" href="#">Source</a>
      </div>
      <div className="font-label-mono text-label-mono text-on-surface-variant text-sm">
        © 2026 DESIGNED BY dasKindMitKeinemAuto
      </div>
    </footer>
  );
}
