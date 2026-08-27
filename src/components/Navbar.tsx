import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/#work', label: 'Work', hash: '#work' },
  { to: '/#about', label: 'About', hash: '#about' },
  { to: '/#toolkit', label: 'Toolkit', hash: '#toolkit' },
  { to: '/#experience', label: 'Experience', hash: '#experience' },
  { to: '/blog', label: 'Blog', isRoute: true },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

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

  // Update active section based on URL hash
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setActiveSection(hash);
    } else if (location.pathname === '/' || location.pathname === '') {
      // Reset active section when on home page without hash
      setActiveSection('');
    }
  }, [location.hash, location.pathname]);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    // If already on home page, scroll manually
    if (location.pathname === '/' || location.pathname === '') {
      e.preventDefault();
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Only show active section highlight on home page
  const isHomePage = location.pathname === '/' || location.pathname === '';

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 bg-surface/50 backdrop-blur-xl rounded-full mx-auto max-w-fit border border-white/10 shadow-[0_0_40px_rgba(0,219,231,0.1)] transition-all duration-500 ease-out">
      <Link
        to="/"
        className="font-display-lg-mobile text-primary tracking-tighter cursor-hover"
      >
        Sudenur Meydan
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {links.map(({ to, label, isRoute, hash }) => (
          isRoute ? (
            <Link
              key={to}
              to={to}
              className={`font-label-mono text-label-mono cursor-hover transition-colors duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,219,231,0.3)] ${
                location.pathname === to ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {label}
            </Link>
          ) : (
            <Link
              key={to}
              to={to}
              onClick={(e) => handleSectionClick(e, hash!)}
              className={`font-label-mono text-label-mono cursor-hover transition-colors duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,219,231,0.3)] ${
                isHomePage && activeSection === hash
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {label}
            </Link>
          )
        ))}
      </div>
      <Link 
        to="/connect" 
        className={`bg-primary-container text-on-primary-container font-label-mono text-label-mono px-6 py-2 rounded-full interactive-btn cursor-hover ml-4 hidden md:block transition-all duration-300 ${
          location.pathname === '/connect' ? 'ring-2 ring-primary' : ''
        }`}
      >
        Connect
      </Link>
    </nav>
  );
}
