import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    name: "Canopy Villa R1",
    price: 890,
    category: "treehouse",
    image: "https://images.unsplash.com/photo-1622968422538-efb01b75d5e8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elevated among ancient oaks, our signature treehouse features 360° forest views, a suspended net lounge, and outdoor copper tub.",
    capacity: 2
  },
  {
    id: "2",
    name: "Lakeview Suite R2",
    price: 1250,
    category: "lakeside",
    image: "https://images.unsplash.com/photo-1564013434775-f71db0030976?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Private dock, floor-to-ceiling windows, and a floating bedroom that extends over the water's edge for an immersive experience.",
    capacity: 4
  },
  {
    id: "3",
    name: "Cliffside Cabanas R3",
    price: 1750,
    category: "cliff",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Perched on granite cliffs with panoramic valley views, featuring an infinity pool that merges with the horizon.",
    capacity: 2
  },
  {
    id: "4",
    name: "Mountain Retreat R4",
    price: 1750,
    category: "cliff",
    image: "https://images.unsplash.com/photo-1724113390415-8dae6abe106c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Perched on granite cliffs with panoramic valley views, featuring an infinity pool that merges with the horizon.",
    capacity: 2
  },
  {
    id: "5",
    name: "Forest Haven R5",
    price: 1750,
    category: "cliff",
    image: "https://images.unsplash.com/photo-1643769577225-ed42858e5577?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Perched on granite cliffs with panoramic valley views, featuring an infinity pool that merges with the horizon.",
    capacity: 2
  }
];

const HotelAmenitiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(roomData);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calculate cards per view based on screen size
  const getCardsPerView = () => {
    if (windowWidth < 768) return 1; // Mobile: 1 card
    if (windowWidth < 1024) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  };

  const cardsPerView = getCardsPerView();

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update filtered rooms when filter changes
  useEffect(() => {
    setFilteredRooms(
      activeFilter === "all"
        ? roomData
        : roomData.filter((room) => room.category === activeFilter)
    );
    setCurrentIndex(0);
  }, [activeFilter]);

  // Handle smooth transitions
  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Match this with CSS transition duration
  };

  // Fixed next slide function
  const nextSlide = () => {
    // Check if we have fewer rooms than cards to display
    if (filteredRooms.length <= cardsPerView) {
      return; // No need to slide if all cards are already visible
    }
    
    const maxIndex = filteredRooms.length - cardsPerView;
    
    // If we're at the end, loop back to the beginning
    if (currentIndex >= maxIndex) {
      handleSlideChange(0);
    } else {
      // Otherwise, advance by 1 to show new cards progressively
      handleSlideChange(Math.min(maxIndex, currentIndex + 1));
    }
  };

  // Fixed prev slide function
  const prevSlide = () => {
    // Check if we have fewer rooms than cards to display
    if (filteredRooms.length <= cardsPerView) {
      return; // No need to slide if all cards are already visible
    }
    
    const maxIndex = filteredRooms.length - cardsPerView;
    
    // If we're at the beginning, loop to the end
    if (currentIndex <= 0) {
      handleSlideChange(maxIndex);
    } else {
      // Otherwise, go back by 1 to show previous cards progressively
      handleSlideChange(Math.max(0, currentIndex - 1));
    }
  };

  // Get the visible rooms based on the current index and cards per view
  const getVisibleRooms = () => {
    return filteredRooms.slice(currentIndex, currentIndex + cardsPerView);
  };

  const visibleRooms = getVisibleRooms();

  // Swipe functionality for mobile
  const touchStartX = useRef<number | null>(null);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    
    // Only respond to significant swipes (more than 50px)
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    touchStartX.current = null;
  };

  return (
    <section id="accommodations" className="py-12 md:py-20 HotelAmenitiesSection">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-dark mb-4">Our Amenities</h2>
          <div className="w-16 md:w-24 h-1 bg-bronze mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg max-w-3xl mx-auto">
            Each retreat is a masterpiece of sustainable luxury, designed to bring you closer to nature without sacrificing comfort.
          </p>
        </div>

        <div className="flex flex-wrap mb-6 md:mb-8 justify-center">
          {["all", "treehouse", "lakeside", "cliff"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 md:px-4 py-2 mx-1 md:mx-2 relative group transition-all duration-300 hover:cursor-pointer text-[#2d1810] 
              ${activeFilter === filter ? "text-green-900" : "hover:text-[#45752a]"}`}
            >
              {filter === "all"
                ? "All"
                : filter === "treehouse"
                ? "Treehouses"
                : filter === "lakeside"
                ? "Lakeside"
                : "Cliffside"}
              
              <span className={`absolute left-1/2 bottom-0 h-[2px] transition-all duration-300 -translate-x-1/2
                ${activeFilter === filter ? 'w-full bg-green-900' : 'w-0 group-hover:w-full bg-[#45752a]'}`}>
              </span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[350px] md:min-h-[400px]"
             onTouchStart={handleTouchStart}
             onTouchEnd={handleTouchEnd}>
          {filteredRooms.length > 0 ? (
            <>
              {filteredRooms.length > cardsPerView && (
                <>
                  <button
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:-ml-6 z-10 
                      bg-white/40 backdrop-blur-sm hover:bg-white
                      p-3 md:p-4 rounded-full shadow-lg
                      transition-all duration-300 ease-in-out
                      hover:scale-110 hover:shadow-xl
                      group disabled:opacity-70 disabled:cursor-not-allowed"
                    aria-label="Previous rooms"
                  >
                    <ArrowLeft className="h-5 w-5 md:h-6 md:w-6 text-forest-dark group-hover:text-bronze transition-colors duration-300" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:-mr-6 z-10 
                      bg-white/40 backdrop-blur-sm hover:bg-white
                      p-3 md:p-4 rounded-full shadow-lg
                      transition-all duration-300 ease-in-out
                      hover:scale-110 hover:shadow-xl
                      group disabled:opacity-70 disabled:cursor-not-allowed"
                    aria-label="Next rooms"
                  >
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-forest-dark group-hover:text-bronze transition-colors duration-300" />
                  </button>
                </>
              )}

              <div 
                ref={carouselRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 transition-transform duration-300 ease-in-out"
                style={{
                  transform: isTransitioning ? 'translateX(-8px)' : 'translateX(0)',
                  transitionProperty: 'transform'
                }}
              >
                {visibleRooms.map((room) => (
                  <div
                    key={room.id}
                    className="room-card rounded-xl overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="relative h-48 sm:h-56 md:h-64">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pl-4 md:pl-5 pb-3">
                        <h3 className="text-lg md:text-xl font-bold text-white">{room.name}</h3>
                        <p className="text-white text-sm md:text-base">From ${room.price}/night</p>
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-5">
                      <p className="text-sm md:text-base min-h-16 md:min-h-20 max-h-16 md:max-h-20 overflow-hidden">
                        {room.description.length > 120 
                          ? `${room.description.substring(0, 100)}...`
                          : room.description
                        }
                        {room.description.length > 120 && (
                          <span 
                            className="text-bronze hover:underline ml-1 focus:outline-none text-sm md:text-base"
                          >
                            see more
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex justify-between items-center pb-4 md:pb-6 pl-4 md:pl-6 pr-4 md:pr-6">
                      <div className="flex items-center">
                        <i className="fas fa-user-friends text-bronze mr-1"></i>
                        <span className="text-sm md:text-base">
                          {room.capacity} guest{room.capacity !== 1 ? 's' : ''}
                        </span>
                      </div>
                      <a
                        href="#"
                        className="text-bronze font-medium hover:underline transition-all duration-300 text-sm md:text-base"
                      >
                        View details
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[350px] md:min-h-[400px] text-base">
              <i className="fas fa-search text-3xl md:text-4xl mb-3 md:mb-4"></i>
              <p className="text-lg md:text-xl">No rooms found for the selected category.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-3 md:mt-4 px-5 md:px-6 py-2 bg-forest-dark rounded-full hover:bg-forest-light transition-colors duration-300"
              >
                View all rooms
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a
            href="#booking"
            className="inline-block bg-forest-dark hover:bg-forest-light px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
};

export default HotelAmenitiesSection;