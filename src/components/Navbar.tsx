import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Labs' },
  { to: '/blog', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 bg-surface/50 backdrop-blur-xl rounded-full mx-auto max-w-fit border border-white/10 shadow-[0_0_40px_rgba(0,219,231,0.1)] transition-all duration-500 ease-out">
      <Link to="/" className="font-display-lg-mobile text-primary tracking-tighter cursor-hover">
        Sudenur Meydan
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`font-label-mono text-label-mono cursor-hover transition-colors duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,219,231,0.3)] ${
              location.pathname === to
                ? 'text-primary font-bold border-b-2 border-primary pb-1'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <button className="bg-primary-container text-on-primary-container font-label-mono text-label-mono px-6 py-2 rounded-full interactive-btn cursor-hover ml-4 hidden md:block">
        Connect
      </button>
    </nav>
  );
}
