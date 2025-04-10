import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-center px-0 py-12 text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/776e2f60e4fa04a57269a02ee127b1b2801c89e6"
            alt="Zebra icon"
            className="mb-8 h-[148px] w-[175px]"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold leading-[50px] text-neutral-700 max-sm:text-3xl max-sm:leading-10">
              <span>Sabi Sabi is a wildlife-rich</span>
              <br />
              <span>private reserve in the Greater</span>
            </h2>
            <p className="text-4xl font-bold leading-[52px] text-neutral-600 max-sm:text-3xl max-sm:leading-10">
              Kruger area with 4 luxury
            </p>
            <p className="text-4xl font-bold leading-[52px] text-stone-500 max-sm:text-3xl max-sm:leading-10">
              lodges, each with its own
            </p>
            <p className="text-4xl font-bold text-orange-400 leading-[52px] max-sm:text-3xl max-sm:leading-10">
              character and style
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a4cb204862155c151691ca0f0fba3982ef371b1"
          alt="Safari lodge"
        />
      </div>
    </div>
  );
};

export default FeatureSection;