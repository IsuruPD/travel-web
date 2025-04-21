import React from 'react';
import { PawPrint, Heart, Feather, Bird, ArrowRight } from "lucide-react";

const WildlifeSection = () => {
    return (
        <section className="wildlife-section py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 playfair">Wilpattu's Wildlife</h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        Wilpattu National Park is home to an incredible diversity of flora and fauna. Spot these magnificent creatures during your stay with us.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                        <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <PawPrint className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">Sri Lankan Leopard</h3>
                        <p className="text-center text-gray-300">
                            Wilpattu has one of the highest leopard densities in Sri Lanka, with frequent sightings near our cabanas.
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                        <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <Heart className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">Asian Elephant</h3>
                        <p className="text-center text-gray-300">
                            Herds of elephants are commonly seen bathing in the park's many villus (natural lakes).
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                        <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <Feather className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">Sloth Bear</h3>
                        <p className="text-center text-gray-300">
                            This rare and elusive species can sometimes be spotted foraging in the early mornings.
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                        <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <Bird className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">Birdlife</h3>
                        <p className="text-center text-gray-300">
                            Over 200 species including the Sri Lanka junglefowl, painted stork, and crested serpent eagle.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="inline-flex items-center text-white font-medium border-b border-white pb-1">
                        WILDLIFE GUIDE
                        <ArrowRight className="h-5 w-5 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WildlifeSection;
