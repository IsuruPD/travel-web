import React from "react";

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-stone GallerySection">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-4">Moments at Wildhaven</h2>
                <div className="w-24 h-1 bg-bronze mx-auto mb-6"></div>
                <p className="text-lg text-forest-medium max-w-3xl mx-auto">
                    A visual journey through the landscapes, wildlife, and luxurious details that define our retreat.
                </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="gallery-item overflow-hidden rounded-lg cursor-pointer transform transition duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Forest Path" className="w-full h-64 object-cover"/>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <i className="fas fa-search text-cream text-2xl"></i>
                    </div>
                </div>
                
                <div className="gallery-item overflow-hidden rounded-lg cursor-pointer transform transition duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1530488562579-7c1dd2e6667b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sunset" className="w-full h-64 object-cover"/>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <i className="fas fa-search text-cream text-2xl"></i>
                    </div>
                </div>
                
                <div className="gallery-item overflow-hidden rounded-lg cursor-pointer transform transition duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Deer" className="w-full h-64 object-cover"/>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <i className="fas fa-search text-cream text-2xl"></i>
                    </div>
                </div>
                
                <div className="gallery-item overflow-hidden rounded-lg cursor-pointer transform transition duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Spa" className="w-full h-64 object-cover"/>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <i className="fas fa-search text-cream text-2xl"></i>
                    </div>
                </div>
                
                <div className="gallery-item overflow-hidden rounded-lg cursor-pointer transform transition duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Lake" className="w-full h-64 object-cover"/>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <i className="fas fa-search text-cream text-2xl"></i>
                    </div>
                </div>
                
                <div className="gallery-item overflow-hidden rounded-lg cursor-pointer transform transition duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cliffside" className="w-full h-64 object-cover"/>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <i className="fas fa-search text-cream text-2xl"></i>
                    </div>
                </div>
                
                <div className="gallery-item overflow-hidden rounded-lg cursor-pointer transform transition duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Dining" className="w-full h-64 object-cover"/>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <i className="fas fa-search text-cream text-2xl"></i>
                    </div>
                </div>
                
                <div className="gallery-item overflow-hidden rounded-lg cursor-pointer transform transition duration-500 hover:scale-105">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Lakeside" className="w-full h-64 object-cover"/>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <i className="fas fa-search text-cream text-2xl"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default GallerySection;
