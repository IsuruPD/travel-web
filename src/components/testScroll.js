import React, { useState, useEffect, useRef, TouchEvent } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

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
    name: "Canopy Villa",
    price: 890,
    category: "treehouse",
    image: "https://images.unsplash.com/photo-1622968422538-efb01b75d5e8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elevated among ancient oaks, our signature treehouse features 360° forest views, a suspended net lounge, and outdoor copper tub.",
    capacity: 2
  },
  {
    id: "2",
    name: "Lakeview Suite",
    price: 1250,
    category: "lakeside",
    image: "https://images.unsplash.com/photo-1564013434775-f71db0030976?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  },
  {
    id: "4",
    name: "Cliffside Cabanas",
    price: 1750,
    category: "cliff",
    image: "https://images.unsplash.com/photo-1724113390415-8dae6abe106c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Perched on granite cliffs with panoramic valley views, featuring an infinity pool that merges with the horizon.",
    capacity: 2
  },
  {
    id: "5",
    name: "Cliffside Cabanas",
    price: 1750,
    category: "cliff",
    image: "https://images.unsplash.com/photo-1643769577225-ed42858e5577?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Perched on granite cliffs with panoramic valley views, featuring an infinity pool that merges with the horizon.",
    capacity: 2
  }
];

const HotelAmnetiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(roomData);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [autoplay, setAutoplay] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Determine items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter rooms when active filter changes
  useEffect(() => {
    setFilteredRooms(
      activeFilter === "all"
        ? roomData
        : roomData.filter((room) => room.category === activeFilter)
    );
    setCurrentIndex(0);
    setIsTransitioning(false);
  }, [activeFilter]);

  // Handle autoplay
  useEffect(() => {
    if (autoplay && filteredRooms.length > itemsToShow) {
      autoplayIntervalRef.current = setInterval(() => {
        handleNextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [autoplay, filteredRooms, currentIndex, itemsToShow]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && filteredRooms.length > itemsToShow) {
      autoplayIntervalRef.current = setInterval(() => {
        handleNextSlide();
      }, 5000);
    }
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    
    if (diff > threshold) {
      // Swiped left, go to next
      handleNextSlide();
    } else if (diff < -threshold) {
      // Swiped right, go to previous
      handlePrevSlide();
    }
    
    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleNextSlide = () => {
    if (isTransitioning || filteredRooms.length <= itemsToShow) return;
    
    setDirection("right");
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + itemsToShow;
        return nextIndex >= filteredRooms.length ? 0 : nextIndex;
      });
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrevSlide = () => {
    if (isTransitioning || filteredRooms.length <= itemsToShow) return;
    
    setDirection("left");
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const prevGroupIndex = prevIndex - itemsToShow;
        if (prevGroupIndex < 0) {
          const remainder = filteredRooms.length % itemsToShow;
          return remainder === 0 
            ? filteredRooms.length - itemsToShow 
            : Math.max(filteredRooms.length - remainder, 0);
        }
        return prevGroupIndex;
      });
      setIsTransitioning(false);
    }, 300);
  };

  // Get visible rooms with proper wrapping for end of array
  const getVisibleRooms = () => {
    const result: Room[] = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % filteredRooms.length;
      if (index < filteredRooms.length) {
        result.push(filteredRooms[index]);
      }
      if (result.length === itemsToShow || result.length === filteredRooms.length) break;
    }
    return result;
  };

  const visibleRooms = getVisibleRooms();

  // Calculate CSS classes for slide transitions
  const getSliderClasses = () => {
    let baseClasses = "transition-transform duration-300 ease-in-out";
    
    if (isTransitioning) {
      return `${baseClasses} ${direction === "right" ? "translate-x-full opacity-0" : "-translate-x-full opacity-0"}`;
    }
    
    return baseClasses;
  };

  // Toggle autoplay function
  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  };

  return (
    <section id="accommodations" className="py-20 HotelAmenitiesSection">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-4">Our Amenities</h2>
          <div className="w-24 h-1 bg-bronze mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each retreat is a masterpiece of sustainable luxury, designed to bring you closer to nature without sacrificing comfort.
          </p>
        </div>

        <div className="flex mb-8 justify-center flex-wrap">
          {["all", "treehouse", "lakeside", "cliff"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 mx-2 mb-2 relative group transition-all duration-300 hover:cursor-pointer text-[#2d1810] 
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
              <span className={`absolute left-1/2 bottom-0 h-[2px] transition-all duration-300 -translate-x-1/2
                ${activeFilter === filter ? 'w-full bg-green-900' : 'w-0 group-hover:w-full bg-[#45752a]'}`}>
              </span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[400px]">
          {filteredRooms.length > 0 ? (
            <>
              <div 
                className="relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                ref={sliderRef}
              >
                <div className={getSliderClasses()}>
                  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(3, itemsToShow)} gap-4 md:gap-6 lg:gap-8`}>
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
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pl-5 pb-3">
                            <h3 className="text-lg md:text-xl font-bold text-white">{room.name}</h3>
                            <p className="text-white">From ${room.price}/night</p>
                          </div>
                        </div>
                      
                        <div className="p-4 md:p-5">
                          <p className="text-sm md:text-base min-h-16 md:min-h-20 max-h-16 md:max-h-20 overflow-hidden">
                            {room.description.length > 120 
                              ? `${room.description.substring(0, 100)}...`
                              : room.description
                            }
                            {room.description.length > 120 && (
                              <button 
                                className="text-bronze hover:underline ml-1 focus:outline-none"
                              >
                                see more
                              </button>
                            )}
                          </p>
                        </div>
                        <div className="flex justify-between items-center pb-4 md:pb-6 px-4 md:px-6">
                          <div className="flex items-center">
                            <i className="fas fa-user-friends text-bronze mr-1"></i>
                            <span className="text-sm md:text-base">
                              {room.capacity} guest{room.capacity !== 1 ? 's' : ''}
                            </span>
                          </div>
                          <a
                            href="#"
                            className="text-bronze text-sm md:text-base font-medium hover:underline transition-all duration-300"
                          >
                            View details
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                {filteredRooms.length > itemsToShow && (
                  <>
                    <button
                      onClick={handlePrevSlide}
                      className="bg-white/40 backdrop-blur-sm hover:bg-white
                      p-3 rounded-full shadow-md
                      transition-all duration-300 ease-in-out
                      hover:scale-110 hover:shadow-xl
                      group focus:outline-none"
                      aria-label="Previous rooms"
                      disabled={isTransitioning}
                    >
                      <ArrowLeft className="h-5 w-5 text-forest-dark group-hover:text-bronze transition-colors duration-300" />
                    </button>

                    <button
                      onClick={toggleAutoplay}
                      className="bg-white/40 backdrop-blur-sm hover:bg-white
                      p-2 rounded-full shadow-md
                      transition-all duration-300 ease-in-out
                      hover:scale-110 hover:shadow-xl
                      group focus:outline-none"
                      aria-label={autoplay ? "Pause autoplay" : "Start autoplay"}
                    >
                      {autoplay ? (
                        <Pause className="h-4 w-4 text-forest-dark group-hover:text-bronze transition-colors duration-300" />
                      ) : (
                        <Play className="h-4 w-4 text-forest-dark group-hover:text-bronze transition-colors duration-300" />
                      )}
                    </button>

                    <button
                      onClick={handleNextSlide}
                      className="bg-white/40 backdrop-blur-sm hover:bg-white
                      p-3 rounded-full shadow-md
                      transition-all duration-300 ease-in-out
                      hover:scale-110 hover:shadow-xl
                      group focus:outline-none"
                      aria-label="Next rooms"
                      disabled={isTransitioning}
                    >
                      <ArrowRight className="h-5 w-5 text-forest-dark group-hover:text-bronze transition-colors duration-300" />
                    </button>
                  </>
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-gray-600">
              <i className="fas fa-search text-4xl mb-4"></i>
              <p className="text-xl">No rooms found for the selected category.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-4 px-6 py-2 bg-forest-dark text-white rounded-full hover:bg-forest-light transition-colors duration-300"
              >
                View all rooms
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-block bg-forest-dark text-white hover:bg-forest-light px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
};

export default HotelAmnetiesSection;