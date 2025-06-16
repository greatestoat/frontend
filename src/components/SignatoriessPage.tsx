// import React from 'react';

// const SignatoriesPage: React.FC = () => {
//   const signatories = [
//     "Argentina", "RMIT University", "Fluyd", "VIRGINIA CORNELSEN", "Entain", "Emberlight", "Sasha Sykes Studio", "Andrew Roberts", "PATRICIA SALCEDO",
//     "Celina Hilbert", "Samuel Yu", "Francisco Albuquerque", "Viscorama", "", "Em Daly", "Self employed - Nichola", "Clark Bardsley Design", "The Hatch Studio",
//     "", "Seek & Design", "GABRIEL ESTEVES DE", "Wagner Lucio", "Guatemala", "Emma Nolan", "Wolfe.com", "Dani Bond", "",
//     "Australia", "Snug House", "OLIVEIRA LEITAO", "weme", "Fabrizio Constanza", "EPIC Interpretive Design", "Serena Chille", "", "Sweden",
//     "Alena Smith Interior", "Society for Responsible", "George Rutherford", "", "", "Fly Bird Design", "Shane Casey", "Nicaragua", "Antrop",
//     "Design", "Design Inc.", "GIOVANA LORENA", "Bulgaria", "India", "FUSE Graphic Design Ltd", "Sharon Maxwell", "Bernardo van de Schepopp", "Simone De Vivo",
//     "Andrew Sloan", "Sophie", "FAZIONI", "Ivelina Dimitrova", "A BLUNT STORY", "Global Creative at", "Signal Type Foundry", "", "",
//     "Andrew Vaughan", "Stephanie Mulder", "Green Mandarin", "", "Aboa Hasa Foundation", "Johnson Controls", "SLMD", "Nigeria", "Switzerland",
//     "Andy Marks", "Steve Baty", "Green Mandarin", "Canada", "Dinu Prasanna Kenneth", "Good As Gold", "So Studio", "Nuel Wogundu", "Blitz & Donner",
//     "Anelle Breit", "STUDIO PERISCOPE", "Greg Lopes", "Arleshir Amini", "DxE Inc.", "Grace", "Sorcha Fitzgerald", "Ridwan Awujoola", "Cerca Research & Design",
//     "Art Disrupt", "Studio Regina", "IMK Arquitectura e", "Cassie Ltd", "LOCAL", "Graphic Design [•] at", "Stefan Faz", "", "Lab",
//     "Austin Smith", "studiojolian", "Engenharia", "Eliane Bowden", "Minto Joy", "MDT", "Studio Kosmos", "Palestine", "Reform GmbH",
//     "AUTHENTIC DESIGN", "Tanisha Maria Naik", "Jaakko Tammela", "Fletcher Scott Studio Inc.", "Sai Challa", "Graphic Design", "Studio Saol", "Petchy", "Sarah Santacroce",
//     "ALLIANCE (ADA)", "The Design Thinkers", "Jennie Rodrigues", "Meghan Hellstern", "Shona Sinha", "Communication at LSAD", "studjoen", "Respira", "she explores tech",
//     "Ben Rennie", "UNEND", "Juan Solis Cundin", "PITCH PR", "Shreya Salian", "at TUS", "Superfolk", "", "Swiss Design Association",
//     "BETTER FUTURE", "United Studio", "JULIA RESENDE", "PITCH PR", "", "Griffith College Design", "Susan Carberry", "Pakistan", "Valerie Muller r Kabbard",
//     "Boldran Demiak & Co Pty", "verti design", "Julia Timponi", "Project 42", "Indonesia", "Image Now", "Sweet Graphic Design", "Ali Murtaza", "",
//     "Ltd - PROSPECT, SA", "Wendy Fountain", "JULIANA SIDSAMER", "Ryan Mayer", "Andira Dyah Pramudya", "Image Now", "The Factory", "Syed Faizan Raza", "Thailand",
//     "Brand & Communications", "X+O", "Julianny abel rativa", "SUPERFORT Creative", "Wardani", "Imagine Lab", "The FACTORY", "", "Tijaponti",
//     "at Edge Impact", "Ys", "Junior Magalhães", "Agency", "Nice To Meet You Studio", "Iman", "The Public House", "Philippines", "Tharawongthawat",
//     "Breathe Architecture", "Zero Co pty Ltd", "KAREN TIE KAWAGAMI", "", "Skemasocial", "Ingrid Smyth", "THINKHOUSE", "Darwin Antipolo", "",
//     "BWD Strategic", "", "Karla Scheirer", "China", "", "Institute of Designers", "Together We Create", "Jesi Sumog-ang", "Turkey",
//     "Cameron Tonkinwise", "Austria", "Larissa Nunes", "Campaign Design", "Ireland", "Ireland", "Treetop Studio", "Mathijs Sterrenburg", "Bilal Munnar",
//     "Carbon Creative", "Lusin", "", "Orange Creatives", "A Worthy Cause", "Ironworking", "Tuominen Design", "TAYO Change Agency", "Gaye Poçan"
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-6xl font-bold mb-4">#661</h1>
//           <div className="flex items-center gap-4">
//             <span className="text-lg">Global Supporters</span>
//           </div>
//         </div>

//         {/* Signatories Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 gap-y-0 text-sm leading-tight">
//           {signatories.map((signatory, index) => (
//             <div key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
//               {signatory}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignatoriesPage;
import React from 'react';
import CountUp from 'react-countup';

const SignatoriesPage: React.FC = () => {
  const signatories = [
      "Argentina", "RMIT University", "Fluyd", "VIRGINIA CORNELSEN", "Entain", "Emberlight", "Sasha Sykes Studio", "Andrew Roberts", "PATRICIA SALCEDO",
    "Celina Hilbert", "Samuel Yu", "Francisco Albuquerque", "Viscorama", "", "Em Daly", "Self employed - Nichola", "Clark Bardsley Design", "The Hatch Studio",
    "", "Seek & Design", "GABRIEL ESTEVES DE", "Wagner Lucio", "Guatemala", "Emma Nolan", "Wolfe.com", "Dani Bond", "",
    "Australia", "Snug House", "OLIVEIRA LEITAO", "weme", "Fabrizio Constanza", "EPIC Interpretive Design", "Serena Chille", "", "Sweden",
    "Alena Smith Interior", "Society for Responsible", "George Rutherford", "", "", "Fly Bird Design", "Shane Casey", "Nicaragua", "Antrop",
    "Design", "Design Inc.", "GIOVANA LORENA", "Bulgaria", "India", "FUSE Graphic Design Ltd", "Sharon Maxwell", "Bernardo van de Schepopp", "Simone De Vivo",
    "Andrew Sloan", "Sophie", "FAZIONI", "Ivelina Dimitrova", "A BLUNT STORY", "Global Creative at", "Signal Type Foundry", "", "",
    "Andrew Vaughan", "Stephanie Mulder", "Green Mandarin", "", "Aboa Hasa Foundation", "Johnson Controls", "SLMD", "Nigeria", "Switzerland",
    "Andy Marks", "Steve Baty", "Green Mandarin", "Canada", "Dinu Prasanna Kenneth", "Good As Gold", "So Studio", "Nuel Wogundu", "Blitz & Donner",
    "Anelle Breit", "STUDIO PERISCOPE", "Greg Lopes", "Arleshir Amini", "DxE Inc.", "Grace", "Sorcha Fitzgerald", "Ridwan Awujoola", "Cerca Research & Design",
    "Art Disrupt", "Studio Regina", "IMK Arquitectura e", "Cassie Ltd", "LOCAL", "Graphic Design [•] at", "Stefan Faz", "", "Lab",
    "Austin Smith", "studiojolian", "Engenharia", "Eliane Bowden", "Minto Joy", "MDT", "Studio Kosmos", "Palestine", "Reform GmbH",
    "AUTHENTIC DESIGN", "Tanisha Maria Naik", "Jaakko Tammela", "Fletcher Scott Studio Inc.", "Sai Challa", "Graphic Design", "Studio Saol", "Petchy", "Sarah Santacroce",
    "ALLIANCE (ADA)", "The Design Thinkers", "Jennie Rodrigues", "Meghan Hellstern", "Shona Sinha", "Communication at LSAD", "studjoen", "Respira", "she explores tech",
    "Ben Rennie", "UNEND", "Juan Solis Cundin", "PITCH PR", "Shreya Salian", "at TUS", "Superfolk", "", "Swiss Design Association",
    "BETTER FUTURE", "United Studio", "JULIA RESENDE", "PITCH PR", "", "Griffith College Design", "Susan Carberry", "Pakistan", "Valerie Muller r Kabbard",
    "Boldran Demiak & Co Pty", "verti design", "Julia Timponi", "Project 42", "Indonesia", "Image Now", "Sweet Graphic Design", "Ali Murtaza", "",
    "Ltd - PROSPECT, SA", "Wendy Fountain", "JULIANA SIDSAMER", "Ryan Mayer", "Andira Dyah Pramudya", "Image Now", "The Factory", "Syed Faizan Raza", "Thailand",
    "Brand & Communications", "X+O", "Julianny abel rativa", "SUPERFORT Creative", "Wardani", "Imagine Lab", "The FACTORY", "", "Tijaponti",
    "at Edge Impact", "Ys", "Junior Magalhães", "Agency", "Nice To Meet You Studio", "Iman", "The Public House", "Philippines", "Tharawongthawat",
    "Breathe Architecture", "Zero Co pty Ltd", "KAREN TIE KAWAGAMI", "", "Skemasocial", "Ingrid Smyth", "THINKHOUSE", "Darwin Antipolo", "",
    "BWD Strategic", "", "Karla Scheirer", "China", "", "Institute of Designers", "Together We Create", "Jesi Sumog-ang", "Turkey",
    "Cameron Tonkinwise", "Austria", "Larissa Nunes", "Campaign Design", "Ireland", "Ireland", "Treetop Studio", "Mathijs Sterrenburg", "Bilal Munnar",
    "Carbon Creative", "Lusin", "", "Orange Creatives", "A Worthy Cause", "Ironworking", "Tuominen Design", "TAYO Change Agency", "Gaye Poçan"
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4">
            #
            <CountUp end={661} duration={2.5} />
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-lg">Global Supporters</span>
          </div>
        </div>

        {/* Signatories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 gap-y-0 text-sm leading-tight">
          {signatories.map((signatory, index) => (
            <div key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              {signatory}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignatoriesPage;
