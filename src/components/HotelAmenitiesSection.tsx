import React, { useState, useEffect } from "react";

interface Room {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  capacity: number;
}

const roomData: Room[] = [
  {
    id: "1",
    name: "Canopy Suite",
    price: 890,
    category: "treehouse",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Elevated among ancient oaks, our signature treehouse features 360° forest views, a suspended net lounge, and outdoor copper tub.",
    capacity: 2
  },
  {
    id: "2",
    name: "Lakeview Villa",
    price: 1250,
    category: "lakeside",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Private dock, floor-to-ceiling windows, and a floating bedroom that extends over the water's edge for an immersive experience.",
    capacity: 4
  },
  {
    id: "3",
    name: "Cliffside Cabanas",
    price: 1750,
    category: "cliff",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Perched on granite cliffs with panoramic valley views, featuring an infinity pool that merges with the horizon.",
    capacity: 2
  }
];

const HotelAmnetiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(roomData);

  useEffect(() => {
    setFilteredRooms(
      activeFilter === "all"
        ? roomData
        : roomData.filter((room) => room.category === activeFilter)
    );
    setCurrentIndex(0);
  }, [activeFilter]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= filteredRooms.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(filteredRooms.length - 3, 0) : prevIndex - 3
    );
  };

  const visibleRooms = filteredRooms.slice(currentIndex, currentIndex + 3);

  return (
    <section id="accommodations" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-4">Our Amenities</h2>
          <div className="w-24 h-1 bg-bronze mx-auto mb-6"></div>
          <p className="text-lg text-base max-w-3xl mx-auto">
            Each retreat is a masterpiece of sustainable luxury, designed to bring you closer to nature without sacrificing comfort.
          </p>
        </div>

        <div className="flex mb-8 justify-center">
          {["all", "treehouse", "lakeside", "cliff"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 mx-2 relative group transition-all duration-300 hover:cursor-pointer text-[#2d1810] 
            ${activeFilter === filter
              ? "text-green-900"
              : "hover:text-[#45752a] "}
              `}
            >
              {filter === "all"
            ? "All"
            : filter === "treehouse"
            ? "Treehouses"
            : filter === "lakeside"
            ? "Lakeside"
            : "Cliffside"}
            
              {/* For active and hover states */}
              <span className={`absolute left-1/2 bottom-0 h-[2px]  transition-all duration-300 -translate-x-1/2
            ${activeFilter === filter ? 'w-full bg-green-900' : 'w-0 group-hover:w-full bg-[#45752a]'}`}>
              </span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[400px]">
          {filteredRooms.length > 0 ? (
            <>
              {filteredRooms.length > 3 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 z-10 bg-forest-dark text-cream rounded-full p-4 hover:bg-forest-light transition-colors duration-300"
                  aria-label="Previous rooms"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
                {visibleRooms.map((room) => (
                  <div
                    key={room.id}
                    className="room-card rounded-xl overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="relative h-64">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pl-5 pb-3">
                        <h3 className="text-xl font-bold text-white">{room.name}</h3>
                        <p className="text-white">From ${room.price}/night</p>
                      </div>
                    </div>
                    
                    <div className="p-5">
                        <div className="relative"></div>
                            <p className="text-base min-h-20 max-h-20 overflow-hidden">
                                {room.description.length > 120 
                                    ? `${room.description.substring(0, 100)}...`
                                    : room.description
                                }
                                {room.description.length > 120 && (
                                    <button 
                                        className="text-bronze hover:underline ml-1 focus:outline-none"
                                        // onClick={() => window.alert(room.description)}
                                    >
                                        see more
                                    </button>
                                )}
                            </p>
                        </div>
                        <div className="flex justify-between items-center pb-6 pl-6 pr-6">
                            <div className="flex items-center">
                                <i className="fas fa-user-friends text-bronze mr-1"></i>
                                <span className="text-base">
                                    {room.capacity} guest{room.capacity !== 1 ? 's' : ''}
                                </span>
                            </div>
                            <a
                                href="#"
                                className="text-bronze font-medium hover:underline transition-all duration-300"
                            >
                                View details
                            </a>
                        </div>
                  </div>
                ))}
              </div>

              {filteredRooms.length > 3 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 z-10 bg-forest-dark text-cream rounded-full p-4 hover:bg-forest-light transition-colors duration-300"
                  aria-label="Next rooms"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-base">
              <i className="fas fa-search text-4xl mb-4"></i>
              <p className="text-xl">No rooms found for the selected category.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-4 px-6 py-2 bg-forest-dark text-cream rounded-full hover:bg-forest-light transition-colors duration-300"
              >
                View all rooms
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-block bg-forest-dark hover:bg-forest-light text-cream px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
};

export default HotelAmnetiesSection;
