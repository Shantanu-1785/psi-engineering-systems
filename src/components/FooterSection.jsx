import { Link } from "react-router-dom";

export const FooterSection = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-60 font-inter" >
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
  );
};