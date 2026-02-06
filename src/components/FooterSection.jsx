export const FooterSection = () => {
  const quickLinks = [
    "Home",
    "About Us",
    "Services",
    "Insights",
    "Blog",
    "Contact Us",
  ];

  const products = [
    "Dosing System",
    "Seal Auxiliary System",
    "Control & Instrumentation",
    "Lube Oil System",
    "Fuel Oil System",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Quick Links */}
      <nav aria-labelledby="quick-links-heading">
        <h2
          id="quick-links-heading"
          className="text-2xl sm:text-3xl font-extrabold text-[#fbcc00] mb-6"
        >
          Quick Links
        </h2>
        <ul className="space-y-3">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-400 text-lg hover:text-[#fbcc00] transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Products */}
      <nav aria-labelledby="products-heading">
        <h2
          id="products-heading"
          className="text-2xl sm:text-3xl font-extrabold text-[#fbcc00] mb-6"
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