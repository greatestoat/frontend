
import React from "react";

const DonateSection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-24 min-h-screen grid md:grid-cols-2 gap-10 items-start">
      {/* Sticky Left Side */}
      <div className="text-3xl md:text-4xl font-bold sticky top-0 self-start">
        Donate to D!
      </div>

      {/* Right Side */}
      <div>
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
          Design Declares is a CIC and would not exist without our dedicated team of co-steers, 
          volunteers, and our passionate community working towards change in the creative industry. 
          Your support can go a long way, and helps us too continue the valuable work needed in 
          tackling the climate crises. If you believe in the work we do, please consider a small 
          donation to help us on our journey for a more equitable and just planet.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full">
            Donate £10
          </button>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full">
            Donate £20
          </button>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full">
            Donate £50
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
