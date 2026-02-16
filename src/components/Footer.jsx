import { Link } from "react-router-dom";
import { images } from "../config/images";

export const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Services", path: "/#services" },
    { label: "Insights", path: "/#insights" },
    { label: "Blog", path: "/#blog" },
    { label: "Contact Us", path: "/#contact" },
  ];

  const products = [
    "Dosing System",
    "Seal Auxiliary System",
    "Control & Instrumentation",
    "Lube Oil System",
    "Fuel Oil System",
  ];

  return (
    <footer className="bg-[#0e0e0e] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="w-full max-w-sm h-28 rounded flex items-center justify-center mb-6 overflow-hidden">
              <img 
                src={images.companyLogo} 
                alt="PSI Engineering Systems"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-inter">
              We design and deliver reliable auxiliary systems for oil & gas,
              power, and process industries—ensuring efficiency, safety, and
              uninterrupted operations across every stage of your plant.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#fbcc00] transition-colors duration-300 group"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#fbcc00] transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#fbcc00] transition-colors duration-300 group"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#fbcc00] transition-colors duration-300 group"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-0 md:ml-60 font-inter">
              {/* Quick Links */}
              <nav aria-labelledby="quick-links-heading">
                <h2
                  id="quick-links-heading"
                  className="text-2xl sm:text-3xl font-extrabold font-fustat text-[#fbcc00] mb-6"
                >
                  Quick Links
                </h2>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      {link.path.startsWith('/#') ? (
                        <a
                          href={link.path}
                          className="text-gray-400 text-lg hover:text-[#fbcc00] transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-gray-400 text-lg hover:text-[#fbcc00] transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Products */}
              <nav aria-labelledby="products-heading">
                <h2
                  id="products-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#fbcc00] mb-6 font-fustat"
                >
                  Products
                </h2>
                <ul className="space-y-3">
                  {products.map((product, index) => (
                    <li key={index}>
                      <a
                        href={`#${product.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                        className="text-gray-400 text-lg hover:text-[#fbcc00] transition-colors duration-300"
                      >
                        {product}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <p className="text-center text-gray-400 text-lg font-inter">
            © Copyright ©2025 PSI. All Rights Reserved Copyright
          </p>
        </div>
      </div>
    </footer>
  );
};
