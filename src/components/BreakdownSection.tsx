// import React, { useState } from "react";

// const sections = [
//   { title: "The Role of Design", content: "Design has the power to influence systems and behaviour." },
//   { title: "Time for Change", content: "It's time for radical design thinking to meet ecological needs." },
//   { title: "Act with Urgency", content: "We must act fast to avoid irreversible damage." },
// ];

// const BreakdownSection = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-black text-white px-6 md:px-20 py-24 min-h-screen grid md:grid-cols-2 gap-10 items-start">
      
//       {/* Left Section Text */}
//       <div className="text-3xl md:text-4xl font-bold leading-tight">
//         This is Breakdown
//       </div>

//       {/* Right Content */}
//       <div className="text-4xl md:text-6xl font-light leading-tight">
//         <p>
//           The science is settled. We are in an emergency of climate and nature.
//           The world is past breaking point; the breakdown has begun...
//         </p>

//         {/* Accordions */}
//         <div className="mt-10 space-y-4">
//           {sections.map((sec, index) => (
//             <div key={index} className="border-t border-white/50 pt-4">
//               <button
//                 onClick={() => toggle(index)}
//                 className="flex justify-between w-full text-left text-xl"
//               >
//                 <span>{sec.title}</span>
//                 <span>{openIndex === index ? "˄" : "˅"}</span>
//               </button>
//               {openIndex === index && (
//                 <div className="mt-2 text-base text-white/80">{sec.content}</div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="mt-10">
//           <button className="bg-white text-black rounded-full px-6 py-3 font-semibold text-lg">
//             View our D! Intro Video
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BreakdownSection;
import React, { useState } from "react";

const sections = [
  { title: "The Role of Design", content: "Design has the power to influence systems and behaviour." },
  { title: "Time for Change", content: "It's time for radical design thinking to meet ecological needs." },
  { title: "Act with Urgency", content: "We must act fast to avoid irreversible damage." },
];

const BreakdownSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-6 md:px-20 py-24 min-h-screen grid md:grid-cols-2 gap-10 items-start">
      
      {/* Sticky Left Section Text */}
      <div className="text-3xl md:text-4xl font-bold leading-tight sticky top-0 self-start">
        This is Breakdown
      </div>

      {/* Right Content */}
      <div className="text-4xl md:text-6xl font-light leading-tight">
        <p>
          The science is settled. We are in an emergency of climate and nature.
          The world is past breaking point; the breakdown has begun...
        </p>

        {/* Accordions */}
        <div className="mt-10 space-y-4">
          {sections.map((sec, index) => (
            <div key={index} className="border-t border-white/50 pt-4">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between w-full text-left text-xl"
              >
                <span>{sec.title}</span>
                <span>{openIndex === index ? "˄" : "˅"}</span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-base text-white/80">{sec.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-white text-black rounded-full px-6 py-3 font-semibold text-lg">
            View our D! Intro Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default BreakdownSection;
