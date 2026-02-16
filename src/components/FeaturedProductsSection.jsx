import { images } from "../config/images";

export const FeaturedProductsSection = () => {
  const whoWeAreData = {
    title: "Who we are ?",
    description:
      "PSI Engineering Systems is a leading manufacturer of boiler and turbine auxiliary systems—critical components for power plants and industrial boiler applications. We specialize in modular, skid-mounted, ready-to-use equipment designed for reliability, efficiency, and seamless integration. In addition to the power sector, we serve industries such as paper mills, sugar mills, and other process industries where boilers are integral to operations.",
    highlights: [
      "Manufacturer of boiler & turbine auxiliary systems",
      "Modular, skid-mounted, ready-to-use solutions",
      "Serving power plants and process industries",
      "Custom-designed, high-tech equipment for specific customer needs",
    ],
  };

  const ourStrengthsData = {
    title: "Our Strengths",
    description:
      "Our strength lies in deep engineering expertise and decades of hands-on industry experience. With complete in-house design and development capabilities, we deliver end-to-end pumping and auxiliary system solutions tailored to customer requirements, backed by a proven track record of successful installations.",
    highlights: [
      "Specialized expertise in pump application engineering",
      "End-to-end pumping and auxiliary system solutions",
      "Strong in-house engineering and indigenous product development",
      "Over 35 years of industry experience",
      "3,000+ skid installations operating across India and abroad",
    ],
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h1 className="scroll-reveal text-left text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 font-fustat">
          <span className="text-black">Welcome To, </span>
          <span className="text-[#fbcc00]">PSI Engineering</span>
          <span className="text-black"> </span>
          <span className="text-[#fbcc00]">Systems</span>
        </h1>

        {/* Divider Line */}
        <div className="scroll-reveal w-full h-0.5 bg-gray-300 mb-16" />

        <div className="space-y-24">
          {/* Who We Are Section */}
          <article className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src={images.whoWeAre} 
                  alt="PSI Engineering Systems - Who We Are"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6 font-inter">
                {whoWeAreData.title}
              </h2>
              <p className="text-gray-text text-lg leading-relaxed mb-6 font-inter">
                {whoWeAreData.description}
              </p>
              <ul className="space-y-2">
                {whoWeAreData.highlights.map((highlight, index) => (
                  <li key={index} className="text-black text-lg flex items-start font-inter">
                    <span className="text-[#fbcc00] mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Our Strengths Section */}
          <article className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6 font-inter">
                {ourStrengthsData.title}
              </h2>
              <p className="text-gray-text text-lg leading-relaxed mb-6 font-inter">
                {ourStrengthsData.description}
              </p>
              <ul className="space-y-2">
                {ourStrengthsData.highlights.map((highlight, index) => (
                  <li key={index} className="text-black text-lg flex items-start font-inter">
                    <span className="text-[#fbcc00] mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src={images.ourStrength} 
                  alt="PSI Engineering Systems - Our Strengths"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </article>

          {/* Featured Products Gallery Section */}
          <article className="scroll-reveal mt-24">
            <h2 className="text-[60px] font-extrabold text-black mb-6 text-left font-fustat">
              <span className="text-black">Featured </span>
              <span className="text-[#fbcc00]">Products</span>
            </h2>
            
            {/* Divider Line */}
            <div className="w-full h-0.5 bg-gray-300 mb-12" />
            
            {/* Top Row - 3 Products */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Dosing System */}
              <div className="relative rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={images.dosingSystem} 
                    alt="Dosing System"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <button className="bg-[#fbcc00] rounded-lg p-2 mr-3 hover:bg-[#e6b800] transition-colors cursor-pointer">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <span className="text-white text-lg font-semibold font-inter">Dosing System</span>
                  </div>
                </div>
              </div>

              {/* Seal Auxiliary System */}
              <div className="relative rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={images.sealAuxiliary} 
                    alt="Seal Auxiliary System"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <button className="bg-[#fbcc00] rounded-lg p-2 mr-3 hover:bg-[#e6b800] transition-colors cursor-pointer">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <span className="text-white text-lg font-semibold font-inter">Seal auxiliary systems</span>
                  </div>
                </div>
              </div>

              {/* Control & Instrumentation */}
              <div className="relative rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={images.controlInstrumentation} 
                    alt="Control & Instrumentation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <button className="bg-[#fbcc00] rounded-lg p-2 mr-3 hover:bg-[#e6b800] transition-colors cursor-pointer">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <span className="text-white text-lg font-semibold font-inter">Control & Instrumentation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - 2 Products Centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {/* Lube Oil Systems */}
                <div className="relative rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={images.lubeOilSystems} 
                      alt="Lube Oil Systems"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {/* Text Overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center">
                      <button className="bg-[#fbcc00] rounded-lg p-2 mr-3 hover:bg-[#e6b800] transition-colors cursor-pointer">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                      <span className="text-white text-lg font-semibold font-inter">Lube Oil Systems</span>
                    </div>
                  </div>
                </div>

                {/* Fuel Oil Systems */}
                <div className="relative rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={images.fuelOilSystems} 
                      alt="Fuel Oil Systems"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {/* Text Overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center">
                      <button className="bg-[#fbcc00] rounded-lg p-2 mr-3 hover:bg-[#e6b800] transition-colors cursor-pointer">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                      <span className="text-white text-lg font-semibold font-inter">Fuel Oil Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};