import { useState, useEffect } from 'react';

const links = [
  { to: '#work', label: 'Work' },
  { to: '#about', label: 'About' },
  { to: '#toolkit', label: 'Toolkit' },
  { to: '#experience', label: 'Experience' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'about', 'toolkit', 'experience'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 bg-surface/50 backdrop-blur-xl rounded-full mx-auto max-w-fit border border-white/10 shadow-[0_0_40px_rgba(0,219,231,0.1)] transition-all duration-500 ease-out">
      <a
        href="#"
        onClick={(e) => handleScrollTo(e, '#')}
        className="font-display-lg-mobile text-primary tracking-tighter cursor-hover"
      >
        Sudenur Meydan
      </a>
      <div className="hidden md:flex items-center gap-8">
        {links.map(({ to, label }) => (
          <a
            key={to}
            href={to}
            onClick={(e) => handleScrollTo(e, to)}
            className={`font-label-mono text-label-mono cursor-hover transition-colors duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,219,231,0.3)] ${
              activeSection === to
                ? 'text-primary font-bold border-b-2 border-primary pb-1'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {label}
          </a>
        ))}
      </div>
      <button className="bg-primary-container text-on-primary-container font-label-mono text-label-mono px-6 py-2 rounded-full interactive-btn cursor-hover ml-4 hidden md:block">
        Connect
      </button>
    </nav>
  );
}
