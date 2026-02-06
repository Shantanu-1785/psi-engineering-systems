export const WelcomeSection = () => {
  const buttons = [
    {
      id: 1,
      text: "Our Services",
      variant: "primary",
      bgClass: "bg-white hover:bg-gray-100",
      textClass: "text-black",
      borderClass: "",
    },
    {
      id: 2,
      text: "Contact Us",
      variant: "secondary",
      bgClass: "bg-transparent hover:bg-white/10",
      textClass: "text-white",
      borderClass: "border-2 border-white",
    },
  ];

  return (
    <section className="flex items-center min-h-screen px-2 sm:px-4 lg:px-6 pt-24 sm:pt-20 lg:pt-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Content positioned to the left and moved up */}
        <div className="flex justify-start">
          <div className="max-w-2xl">
            {/* Industrial Reliability Badge */}
            <div className="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-4 py-2 border border-white/25 mb-4">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium font-inter">
                Industrial Reliability
              </span>
            </div>

            {/* Main Heading - Using Fustat ExtraBold */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fustat font-extrabold leading-tight mb-4">
              <span className="text-white">Engineering Precision</span>
              <br />
              <span className="text-white">for </span>
              <span className="text-[#fbcc00]">Critical Industrial</span>
              <br />
              <span className="text-white">Systems</span>
            </h1>

            {/* Description - Using Inter */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-5 max-w-xl font-inter">
              We design and deliver reliable auxiliary systems for oil & gas,
              power, and process industries—ensuring efficiency, safety, and
              uninterrupted operations across every stage of your plant.
            </p>

            {/* Action Buttons - Using Inter */}
            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  className={`px-6 sm:px-8 py-3 rounded-full font-medium text-sm sm:text-base font-inter transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${button.bgClass} ${button.textClass} ${button.borderClass}`}
                  aria-label={button.text}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};