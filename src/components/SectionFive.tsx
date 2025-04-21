import { motion } from "framer-motion";

const safariHighlights = [
  {
    title: "Wilpattu Adventures",
    description: "Encounter majestic Sri Lankan leopards, elephants, and bears in the dense national park.",
    icon: "/elephantHd.png",
  },
  {
    title: "Bird Watcher's Paradise",
    description: "Spot over 140 bird species including barbets, hornbills, and babblers in their natural habitat.",
    icon: "/featherHd.png",
  },
  {
    title: "Wilderness Expertise",
    description: "Our experienced rangers share ancient tracking wisdom and fascinating stories of Sri Lankan wildlife.",
    icon: "/rangerCp.png",
  },
  {
    title: "Eco-Safari Experience",
    description: "Journey through pristine landscapes while supporting local conservation efforts and sustainable tourism.",
    icon: "/safariJp.png",
  },
  {
    title: "Scenic Picnic Stops",
    description: "Relax at picturesque spots in the wild with curated picnic experiences amidst breathtaking views.",
    icon: "/scenaryVw.png",
  },
];

export default function SecFiveSafariExperience() {
  return (
    <section className="px-6 md:px-16 relative overflow-hidden sectionFive">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {safariHighlights.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ 
              opacity: 0, 
              x: idx === safariHighlights.length - 1 && safariHighlights.length % 2 !== 0 
                ? 0 
                : idx % 2 === 0 ? -100 : 100 
            }}
            transition={{ type: "keyframes", ease: "easeIn", duration: 0.1, delay: idx * 0.1 }}
            className={`bg-gradient-to-b from-[#fdfaf3] to-[#f7efe4] bg-white/80 backdrop-blur-sm p-8 rounded-2xl flex items-center gap-6 hover:shadow-xl transition-all border border-amber-100 ${
              idx === safariHighlights.length - 1 && safariHighlights.length % 2 !== 0 
                ? 'md:col-span-2 md:w-1/2 md:mx-auto' 
                : ''
            }`}
          >
            <div className="bg-amber-50 p-4 rounded-full flex-shrink-0">
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#2d1810] mb-2">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
