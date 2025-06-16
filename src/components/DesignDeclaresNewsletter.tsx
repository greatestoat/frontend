
// import React, { useState } from 'react';

// const DesignDeclaresNewsletter: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [isChecked, setIsChecked] = useState<boolean>(false);

//   const handleSubmit = () => {
//     console.log('Form submitted:', { email, isChecked });
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-start justify-center px-4 py-10 relative">
//       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Sticky Left Title */}
//         <div className="sticky top-0 self-start">
//           <h1 className="text-3xl font-semibold leading-tight">
//             The Design Declares Newsletter and
//             <br />
//             Toolkit
//           </h1>
//         </div>

//         {/* Right Content + Form */}
//         <div className="space-y-8">
//           <div className="space-y-6">
//             <p className="text-base leading-relaxed">
//               Subscribe to the Design Declares UK newsletter to receive the latest 
//               news and updates. By signing up you will also gain access to The 
//               Design Declares Toolkit, a live and evolving Notion site co-created with 
//               our community. It is filled with the latest resources and methods to help 
//               you on your journey to climate-positive design.
//             </p>
//             <p className="text-sm leading-relaxed opacity-90">
//               Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to 
//               declare emergency quite yet, you can still access the Toolkit - just register below.
//             </p>
//           </div>

//           {/* Form */}
//           <div className="space-y-6">
//             <div>
//               <div className="block text-sm font-medium mb-2">Email:*</div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-none focus:border-white focus:outline-none transition-colors"
//               />
//             </div>

//             <div className="flex items-start space-x-3">
//               <input
//                 type="checkbox"
//                 checked={isChecked}
//                 onChange={(e) => setIsChecked(e.target.checked)}
//                 className="mt-1 w-4 h-4 bg-transparent border border-gray-600 rounded-none focus:ring-0 focus:ring-offset-0"
//               />
//               <div className="text-sm leading-relaxed">
//                 I would like to be added to the Design Declares! newsletter and receive further updates.
//               </div>
//             </div>

//             <div className="pt-2">
//               <button className="text-sm underline hover:no-underline transition-all bg-transparent border-none cursor-pointer">
//                 View our Privacy Policy
//               </button>
//             </div>

//             <button
//               onClick={handleSubmit}
//               className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer border-none"
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DesignDeclaresNewsletter;
import React, { useState } from 'react';
import newsletterImage from '../assets/newsletter-image.webp'; // Update the path and file name as needed

const DesignDeclaresNewsletter: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log('Form submitted:', { email, isChecked });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-start justify-center px-4 py-10 relative">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Sticky Left Title */}
        <div className="sticky top-0 self-start">
          <h1 className="text-3xl font-semibold leading-tight">
            The Design Declares Newsletter and
            <br />
            Toolkit
          </h1>
        </div>

        {/* Right Content + Form */}
        <div className="space-y-8">
          <div className="space-y-6">
            <img
              src={newsletterImage}
              alt="Newsletter Visual"
              className="w-full rounded-lg"
            />

            <p className="text-base leading-relaxed">
              Subscribe to the Design Declares UK newsletter to receive the latest 
              news and updates. By signing up you will also gain access to The 
              Design Declares Toolkit, a live and evolving Notion site co-created with 
              our community. It is filled with the latest resources and methods to help 
              you on your journey to climate-positive design.
            </p>
            <p className="text-sm leading-relaxed opacity-90">
              Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to 
              declare emergency quite yet, you can still access the Toolkit - just register below.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div>
              <div className="block text-sm font-medium mb-2">Email:*</div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-none focus:border-white focus:outline-none transition-colors"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mt-1 w-4 h-4 bg-transparent border border-gray-600 rounded-none focus:ring-0 focus:ring-offset-0"
              />
              <div className="text-sm leading-relaxed">
                I would like to be added to the Design Declares! newsletter and receive further updates.
              </div>
            </div>

            <div className="pt-2">
              <button className="text-sm underline hover:no-underline transition-all bg-transparent border-none cursor-pointer">
                View our Privacy Policy
              </button>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer border-none"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDeclaresNewsletter;
