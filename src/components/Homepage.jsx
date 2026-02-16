import { ClientsSection } from "./ClientsSection";
import { FeaturedProductsSection } from "./FeaturedProductsSection";
import { Footer } from "./Footer";
import { HeaderSection } from "./HeaderSection";
import { WelcomeSection } from "./WelcomeSection";
import { images } from "../config/images";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const Homepage = () => {
  useScrollReveal();

  return (
    <div className="bg-white w-full">
      {/* Hero Section with Background */}
      <div 
        className="relative h-screen"
        style={{
          backgroundImage: `url(${images.heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <HeaderSection />
        <WelcomeSection />
      </div>
      
      {/* Main Content Sections */}
      <FeaturedProductsSection />

      {/* Clients Section with Yellow Background */}
      <section className="bg-[#eec755] py-16">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
            <ClientsSection />
            
            {/* Industrial Equipment Image */}
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src={images.clientsSectionImage} 
                alt="Clients Section"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-0.5 bg-dash-colour mt-16 mb-12" />

          {/* Client Logos Carousel - Continuous Horizontal Scroll */}
          <div className="scroll-reveal mt-16 overflow-hidden">
            <div className="flex animate-scroll gap-6">
              {/* First set of logos */}
              {[
                { id: 1, image: images.clientAlstom, alt: "Alstom" },
                { id: 2, image: images.clientBASF, alt: "BASF" },
                { id: 3, image: images.clientChevron, alt: "Chevron" },
                { id: 4, image: images.clientDoosan, alt: "Doosan" },
                { id: 5, image: images.clientEDF, alt: "EDF" },
                { id: 6, image: images.clientFlowserve, alt: "Flowserve" },
                { id: 7, image: images.clientKCP, alt: "KCP" },
                { id: 8, image: images.clientLarsenTurbo, alt: "Larsen & Turbo" },
                { id: 9, image: images.clientMHI, alt: "MHI" },
                { id: 10, image: images.clientPetronas, alt: "Petronas" },
                { id: 11, image: images.clientSiemens, alt: "Siemens" },
                { id: 12, image: images.clientSolenis, alt: "Solenis" },
                { id: 13, image: images.clientSRC, alt: "SRC" },
                { id: 14, image: images.clientTATA, alt: "TATA" },
                { id: 15, image: images.clientToyo, alt: "Toyo" },
                { id: 16, image: images.clientUR, alt: "UR" },
              ].map((client) => (
                <div
                  key={client.id}
                  className="bg-white rounded-2xl p-8 shadow-lg flex items-center justify-center flex-shrink-0 w-64 h-32"
                >
                  <img 
                    src={client.image} 
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { id: 17, image: images.clientAlstom, alt: "Alstom" },
                { id: 18, image: images.clientBASF, alt: "BASF" },
                { id: 19, image: images.clientChevron, alt: "Chevron" },
                { id: 20, image: images.clientDoosan, alt: "Doosan" },
                { id: 21, image: images.clientEDF, alt: "EDF" },
                { id: 22, image: images.clientFlowserve, alt: "Flowserve" },
                { id: 23, image: images.clientKCP, alt: "KCP" },
                { id: 24, image: images.clientLarsenTurbo, alt: "Larsen & Turbo" },
                { id: 25, image: images.clientMHI, alt: "MHI" },
                { id: 26, image: images.clientPetronas, alt: "Petronas" },
                { id: 27, image: images.clientSiemens, alt: "Siemens" },
                { id: 28, image: images.clientSolenis, alt: "Solenis" },
                { id: 29, image: images.clientSRC, alt: "SRC" },
                { id: 30, image: images.clientTATA, alt: "TATA" },
                { id: 31, image: images.clientToyo, alt: "Toyo" },
                { id: 32, image: images.clientUR, alt: "UR" },
              ].map((client) => (
                <div
                  key={client.id}
                  className="bg-white rounded-2xl p-8 shadow-lg flex items-center justify-center flex-shrink-0 w-64 h-32"
                >
                  <img 
                    src={client.image} 
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};