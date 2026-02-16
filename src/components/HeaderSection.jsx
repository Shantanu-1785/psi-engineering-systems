import { images } from "../config/images";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const HeaderSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Products", path: "/#products" },
    { label: "Clientele", path: "/#clientele" },
    { label: "Contact Us", path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Change backdrop when scrolled past hero section (approximately 100vh)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-20 px-2 sm:px-4 lg:px-6 py-3 transition-all duration-300 ${
      isScrolled ? 'bg-black/20 backdrop-blur-md' : ''
    }`}>
      <div className="max-w-full mx-auto">
        <div className="flex items-center">
          {/* Logo - Keep position */}
          <div className="flex-shrink-0 mr-8">
            <img 
              src={images.companyLogo} 
              alt="PSI Engineering Systems"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation - Right aligned with increased gaps */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <div className="flex items-center justify-between bg-white/15 backdrop-blur-md rounded-full px-8 py-2.5 border border-white/25 shadow-lg">
              <nav className="flex space-x-16" role="navigation" aria-label="Main navigation">
                {navigationItems.map((item, index) => (
                  item.path.startsWith('/#') ? (
                    <a
                      key={index}
                      href={item.path}
                      className="text-white font-medium text-sm font-inter hover:text-[#fbcc00] transition-colors duration-300 whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={item.path}
                      className="text-white font-medium text-sm font-inter hover:text-[#fbcc00] transition-colors duration-300 whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>
              
              {/* Login Button - Increased distance from nav items */}
              <a
                href="#login"
                className="bg-[#fbcc00] hover:bg-[#e6b800] text-black font-semibold px-5 py-2 rounded-full transition-colors duration-300 text-sm font-inter whitespace-nowrap ml-40"
                aria-label="Login to your account"
              >
                Login
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 ml-auto z-30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Collapsible */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-white/15 backdrop-blur-md rounded-2xl p-3 border border-white/25 absolute left-2 right-2 z-20">
            <nav className="flex flex-col space-y-2" role="navigation" aria-label="Mobile navigation">
              {navigationItems.map((item, index) => (
                item.path.startsWith('/#') ? (
                  <a
                    key={index}
                    href={item.path}
                    className="text-white font-medium text-sm font-inter hover:text-[#fbcc00] transition-colors duration-300 py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-white font-medium text-sm font-inter hover:text-[#fbcc00] transition-colors duration-300 py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              {/* Mobile Login Button */}
              <a
                href="#login"
                className="bg-[#fbcc00] hover:bg-[#e6b800] text-black font-semibold px-5 py-2.5 rounded-full transition-colors duration-300 text-center mt-3 text-sm font-inter"
                aria-label="Login to your account"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};