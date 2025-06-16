// import React from "react";

// const DeclareEmergencyNow: React.FC = () => {
//   return (
//     <section className="min-h-screen px-6 py-12 bg-black text-white">
//       <h1 className="text-3xl md:text-4xl font-bold mb-6">Declare Emergency Now</h1>

//       <div className="md:flex gap-10">
//         {/* Left Side Text */}
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <p className="text-lg leading-relaxed">
//             Design Declares is open to individuals and institutions working in industrial, digital, graphic,
//             communication and service design. To declare here, you must be a company with an office in the UK
//             employing at least one full-time designer. We also welcome declarations from practising freelance
//             designers who are registered as self-employed in the UK, and global supporters from other countries.
//             All declarations will be named and published on this site.
//           </p>
//         </div>

//         {/* Right Side Form */}
//         <form className="md:w-1/2 space-y-4 border p-6 border-white bg-black text-white">
//           <h2 className="text-4xl font-semibold">I am Declaring Emergency</h2>

//           {/* Checkboxes */}
//           <div className="flex gap-4 flex-wrap">
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="accent-white" />
//               As a business
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="accent-white" />
//               As an individual
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="accent-white" />
//               As a public institution
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="accent-white" />
//               As a team or department
//             </label>
//           </div>

//           {/* Inputs */}
//           <input type="text" placeholder="Website:*" className="w-full bg-black border border-white p-2" />
//           <select className="w-full bg-black border border-white p-2 text-white">
//             <option>Country:*</option>
//             <option>United Kingdom</option>
//             <option>Other</option>
//           </select>
//           <select className="w-full bg-black border border-white p-2 text-white">
//             <option>Discipline:*</option>
//             <option>Design</option>
//             <option>Engineering</option>
//             <option>Architecture</option>
//           </select>
//           <input type="email" placeholder="Email:*" className="w-full bg-black border border-white p-2" />
//           <textarea
//             placeholder="Why are you declaring?"
//             className="w-full bg-black border border-white p-2"
//           ></textarea>

//           {/* Consent Checkboxes */}
//           <label className="flex items-start gap-2 text-sm">
//             <input type="checkbox" className="accent-white mt-1" />
//             I consent for my data to be used for the purpose of the Declaration, and for my name and reason for
//             joining to be used in the promotion of the Declaration on this site and across our social channels.
//           </label>
//           <label className="flex items-start gap-2 text-sm">
//             <input type="checkbox" className="accent-white mt-1" />
//             I would like to be added to the Design Declares! newsletter and receive further updates.
//           </label>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-white text-black px-6 py-2 font-bold mt-4 rounded-full hover:bg-gray-200"
//           >
//             Declare Emergency Now
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default DeclareEmergencyNow;
import React from "react";

const DeclareEmergencyNow: React.FC = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-black text-white">
      <div className="md:flex gap-10">
        {/* Sticky Left Side Title */}
        <div className="md:w-1/2 mb-8 md:mb-0 sticky top-0 self-start">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Declare Emergency Now</h1>
          <p className="text-lg leading-relaxed">
            Design Declares is open to individuals and institutions working in industrial, digital, graphic,
            communication and service design. To declare here, you must be a company with an office in the UK
            employing at least one full-time designer. We also welcome declarations from practising freelance
            designers who are registered as self-employed in the UK, and global supporters from other countries.
            All declarations will be named and published on this site.
          </p>
        </div>

        {/* Right Side Form */}
        <form className="md:w-1/2 space-y-4 border p-6 border-white bg-black text-white">
          <h2 className="text-4xl font-semibold">I am Declaring Emergency</h2>

          {/* Checkboxes */}
          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              As a business
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              As an individual
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              As a public institution
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              As a team or department
            </label>
          </div>

          {/* Inputs */}
          <input type="text" placeholder="Website:*" className="w-full bg-black border border-white p-2" />
          <select className="w-full bg-black border border-white p-2 text-white">
            <option>Country:*</option>
            <option>United Kingdom</option>
            <option>Other</option>
          </select>
          <select className="w-full bg-black border border-white p-2 text-white">
            <option>Discipline:*</option>
            <option>Design</option>
            <option>Engineering</option>
            <option>Architecture</option>
          </select>
          <input type="email" placeholder="Email:*" className="w-full bg-black border border-white p-2" />
          <textarea
            placeholder="Why are you declaring?"
            className="w-full bg-black border border-white p-2"
          ></textarea>

          {/* Consent Checkboxes */}
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="accent-white mt-1" />
            I consent for my data to be used for the purpose of the Declaration, and for my name and reason for
            joining to be used in the promotion of the Declaration on this site and across our social channels.
          </label>
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="accent-white mt-1" />
            I would like to be added to the Design Declares! newsletter and receive further updates.
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 font-bold mt-4 rounded-full hover:bg-gray-200"
          >
            Declare Emergency Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default DeclareEmergencyNow;
