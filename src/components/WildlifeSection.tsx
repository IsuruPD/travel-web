import { Bone, PawPrint, Shell, Feather, Binoculars, ArrowRight } from "lucide-react";

const WildlifeSection = () => {
  // Create a lookup object for icon names
  const iconMap: { [key: string]: React.ElementType } = {
    Bone,
    PawPrint,
    Shell,
    Feather,
    Binoculars,
  };

  const cards = [
    {
      Icon: "Bone",
      title: "Sri Lankan Leopard",
      desc: "Wilpattu has one of the highest leopard densities in Sri Lanka, with frequent sightings near our cabanas.",
    },
    {
      Icon: "Shell",
      title: "Asian Elephant",
      desc: "Herds of elephants are commonly seen bathing in the park's many villus (natural lakes).",
    },
    {
      Icon: "PawPrint",
      title: "Bear",
      desc: "This rare and elusive species can sometimes be spotted foraging in the early mornings.",
    },
    {
      Icon: "Binoculars",
      title: "Birdlife",
      desc: "Over 200 species including the Sri Lanka junglefowl, painted stork, and crested serpent eagle.",
    },
  ];

  return (
    <section className="relative overflow-hidden text-white">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/safari43.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">
            Wilpattu's Wildlife
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Wilpattu National Park is home to an incredible diversity of flora and fauna. Spot these magnificent creatures during your stay with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ Icon, title, desc }, i) => {
            const LucideIcon = iconMap[Icon];
            return (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20"
              >
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <LucideIcon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
                <p className="text-center text-gray-300">{desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center text-white font-medium border-b border-white pb-1"
          >
            WILDLIFE GUIDE
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WildlifeSection;
