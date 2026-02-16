import { images } from "../config/images";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const AboutUs = () => {
  useScrollReveal();

  const aboutUsPoints = [
    "Family-owned enterprise with over 35 years of industry experience",
    "Strong technical fundamentals and proven project execution capability",
    "Supplying to global projects across Asia, Africa, and the Americas",
    "In-house export packing with third-party inspections by Lloyd's & SGS",
  ];

  const engineeringServices = [
    {
      title: "Engineering",
      titleHighlight: " & Design Services",
      image: images.engineeringDesign,
      description: [
        "Basic fluid handling engineering",
        "Detailed fluid handling engineering",
        "Specialized fluid system design",
      ],
    },
    {
      title: "System",
      titleHighlight: " Engineering Fluid Handling",
      image: images.systemEngineering,
      description: [
        "End-to-end system engineering",
        "Engineering data for execution",
      ],
    },
    {
      title: "Documentation",
      titleHighlight: " & Drafting Services",
      image: images.documentation,
      description: [
        "Process Flow Diagrams (PFDs)",
        "General Arrangement (GA) drawings",
        "Plant layout drawings",
      ],
    },
    {
      title: "Analysis",
      titleHighlight: " & Validation Services",
      image: images.analysisValidation,
      description: [
        "Design validation and technical review",
        "3D system modeling",
        "Structural stress analysis",
      ],
    },
  ];

  const qualityEnvironmentPoints = [
    "Strong top management commitment with clearly defined quality targets",
    "Well-structured, fine-tuned physical systems supporting consistent quality",
    "Well-maintained machinery and neat facilities ensuring reliable production",
    "Stage-wise inspections with 100% testing before product dispatch",
  ];

  const advantages = [
    "Extensive engineering resources",
    "Highly qualified engineering staff",
    "Strict quality control procedures",
    "Consistently high product quality",
    "Short production lead times",
    "Competitive pricings",
    "Continuous product support",
  ];

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[460px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.aboutUsHeader})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="scroll-reveal text-white font-black text-6xl sm:text-7xl lg:text-8xl font-inter">
            About Us
          </h1>
          <div className="scroll-reveal w-full max-w-2xl h-3 bg-[#fbcc00]" />
        </div>
      </section>

      {/* About Ourselves Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 font-fustat">
                <span className="text-black">About </span>
                <span className="text-[#fbcc00]">Ourselves</span>
              </h2>
              
              <p className="text-gray-text text-l leading-normal mb-6 font-inter">
                We are a family-owned business with operations based in Chennai, India
                and Sharjah, UAE, built on strong technical expertise and a legacy
                that spans over 35 years. Founded in 1975, our group has consistently
                delivered reliable, high-quality solutions to international markets. With a proven track record across Asia, Africa, and the Americas, we
                follow strict quality standards, supported by inspections from
                globally recognized authorities such as Lloyd's Register and SGS. Our
                in-house export packing and container stuffing facilities ensure safe,
                efficient, and timely deliveries worldwide.
              </p>

              <ul className="space-y-3">
                {aboutUsPoints.map((point, index) => (
                  <li key={index} className="text-black text-lg flex items-start font-inter leading-tight">
                    <span className="text-[#fbcc00] mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="scroll-reveal">
              <div className="w-full aspect-[4/3] bg-[#f3cd4e] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={images.aboutUsImage} 
                  alt="About PSI Engineering Systems"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal w-full h-0.5 bg-gray-300" />
      </div>

      {/* Engineering Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="scroll-reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-left font-fustat">
            <span className="text-black">Engineering </span>
            <span className="text-[#fbcc00]">Services</span>
          </h2>

          <p className="scroll-reveal text-gray-text text-lg leading-relaxed mb-12 text-left max-w-8xl mx-auto font-inter ml-0">
            We have a fully equipped design centre, where we do detailed design
            engineering for all types of fluid handling systems, such as Dosing
            Systems, Fuel Oil Systems, Lube Oil systems, Oxygen Dosing Systems,
            etc. We specialize in basic as well as detail engineering of these
            systems, and we can generate process flow diagrams, GA drawings, plant
            layouts, etc., as well as generate engineering data for the same.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineeringServices.map((service, index) => (
              <div 
                key={index} 
                className="scroll-reveal rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 relative group"
                style={{
                  background: 'radial-gradient(circle at 50% 100%, #525252 0%, #2C2B2B 73%)',
                  height: '375px'
                }}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 font-inter">
                    <span className="text-[#fbcc00]">{service.title}</span>
                    <span className="text-white">{service.titleHighlight}</span>
                  </h3>
                  
                  <ul className="space-y-2">
                    {service.description.map((item, i) => (
                      <li key={i} className="text-white/80 text-xs font-inter leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image at bottom - absolute positioning */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end overflow-hidden">
                  <div className="w-40 h-40 flex items-end justify-center">
                    <img 
                      src={service.image} 
                      alt={`${service.title}${service.titleHighlight}`}
                      className="w-full h-full object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Systems & Environment Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Quality Systems - Yellow Background */}
          <div className="scroll-reveal bg-[#f3cd4e] p-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 font-fustat text-black">
              Quality Systems
            </h2>
            <div className="w-full h-0.5 bg-dash-colour mb-6" />
            
            <p className="text-black/50 text-s leading-relaxed mb-8 font-inter">
              Our Systems confirm to most accepted international standards like
              ASTM, ASME, DIN, etc., and are manufactured according to approved
              quality plans. Components are sourced from the best international
              suppliers. Quality Control checks are carried out at every stage.
              Our products have been accepted by all leading inspection agencies
              and major users/OEM's.
            </p>

            {/* Certification Images */}
            <div className="flex gap-16 mt-8">
              <div className="bg-white rounded-lg p-4 w-32 h-32 flex items-center justify-center shadow-md">
                <img 
                  src={images.certificationUKAS} 
                  alt="UKAS Certification"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="bg-white rounded-lg p-4 w-32 h-32 flex items-center justify-center shadow-md">
                <img 
                  src={images.certificationNABCB} 
                  alt="NABCB Certification"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="bg-white rounded-lg p-4 w-32 h-32 flex items-center justify-center shadow-md">
                <img 
                  src={images.certificationISO} 
                  alt="ISO 9001 Certification"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Quality Environment - Dark Background with Image */}
          <div 
            className="scroll-reveal bg-[#2C2B2B] p-12 relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images.qualityEnvironmentBg})` }}
          >
            {/* Dark overlay - adjust /70 to control image visibility (lower = more visible, higher = less visible) */}
            <div className="absolute inset-0 bg-[#2C2B2B]/35" />
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 font-fustat text-white">
                Quality Environment
              </h2>
              <div className="w-full h-0.5 bg-white/15 mb-6" />
              
              <ul className="space-y-3">
                {qualityEnvironmentPoints.map((point, index) => (
                  <li key={index} className="text-white/50 text-s flex items-start font-inter leading-tight">
                    <span className="text-[#fbcc00] mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="scroll-reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-12 font-fustat text-black">
            Advantages
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Extensive engineering resources */}
            <div className="scroll-reveal bg-white rounded-2xl shadow-lg p-6 w-40 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#fbcc00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-600 text-xs text-center font-inter leading-tight">
                Extensive engineering resources
              </p>
            </div>

            {/* Highly qualified engineering staff */}
            <div className="scroll-reveal bg-white rounded-2xl shadow-lg p-6 w-40 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#fbcc00]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <p className="text-gray-600 text-xs text-center font-inter leading-tight">
                Highly qualified engineering staff
              </p>
            </div>

            {/* Strict quality control procedures */}
            <div className="scroll-reveal bg-white rounded-2xl shadow-lg p-6 w-40 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#fbcc00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-600 text-xs text-center font-inter leading-tight">
                Strict quality control procedures
              </p>
            </div>

            {/* Consistently high product quality */}
            <div className="scroll-reveal bg-white rounded-2xl shadow-lg p-6 w-40 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#fbcc00]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-600 text-xs text-center font-inter leading-tight">
                Consistently high product quality
              </p>
            </div>

            {/* Short production lead times */}
            <div className="scroll-reveal bg-white rounded-2xl shadow-lg p-6 w-40 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#fbcc00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-600 text-xs text-center font-inter leading-tight">
                Short production lead times
              </p>
            </div>

            {/* Competitive pricings */}
            <div className="scroll-reveal bg-white rounded-2xl shadow-lg p-6 w-40 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#fbcc00]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-600 text-xs text-center font-inter leading-tight">
                Competitive pricings
              </p>
            </div>

            {/* Continuous product support */}
            <div className="scroll-reveal bg-white rounded-2xl shadow-lg p-6 w-40 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#fbcc00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-600 text-xs text-center font-inter leading-tight">
                Continuous product support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
