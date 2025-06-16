import React from 'react';
import CountUp from 'react-countup';

const SignatoriesPage: React.FC = () => {
  const signatories = [
     "21-87", "Biomimicry Innovation Lab", "Design by Mondial", "Francis Rowland", "Isabella", "Mainlyphotography Studio", "Ohana Studio Ltd", "Sheffield Hallam University", "The Manufacturing Technology Centre",
    "216 Signs", "Bliss", "Design Council", "Frankie Theweil", "Jackie Malcolm", "Manj I", "Ok deploy", "Simone Cucchi", "Theo Dormer",
    "31% Wool", "Elliot Crayon", "Design For Good Club", "FranklinTill", "Jake Owen", "Mantra", "Ole Andersen Designlab", "Smole", "ThinkDo",
    "400", "Bold Studio", "Design for Joy", "Future Island-Island at", "James Kindred", "Mar Mar Co. Studio", "Olive Kennington", "Social Change", "Thinkpublic",
    "A-Side", "Boyle & Perks", "Design Native CIC", "Ulster University-led", "James Tooze", "Marsh Studio Ltd", "Oliver Lloyd", "Sophie Muckridge", "Thom Baker Consultancy",
    "Aalia Ahmed", "Brand Narrative at", "Design Science", "consortium", "Jamie Finkham", "Maria Elina", "Olivia Harris", "Sophie Reynolds", "Thomas Baraldi Cassaro",
    "Abbie-Williams", "Pentagram", "Design Truth", "Future Selves", "jan lewis creative", "Marion Rabe", "Onekind Creative", "Sophie Thomas", "Thomas Wylam",
    "abc", "Bravand", "DesignWright", "Furniture I CRE", "Jane Terlny", "Mark Hicks", "Optimist Works", "Spark & Bell", "thomas matthews",
    "ACRE – A Creative", "Breezign", "DH Design Studios Ltd", "Fynn", "Jason Bruges Studio", "Marta De Prisco", "Oracle Design", "Special Projects", "Thoughtcraft",
    "Endeavour Ltd", "Bright Signals Design at", "Dids Macdonaid", "G R Moore Limited", "Jason Mesut", "MARTA ROSATO", "Orangely", "Spotless", "Tijana Tasich",
    "Active Matter", "Bright Signals Ltd", "Dionne Griffith", "G3 Creative", "Jemima Duncalf", "INTERIORS", "ORCA", "Stuti Gidugu", "Tim Frenneaux & Co",
    "ADX", "Broadley Creative Ltd", "Diploma in Professional", "Gareth Neal Ltd", "Jess Baxter", "Martin Hopkins", "Osch", "Stuti Gidugu", "Tina Ramstein",
    "Adele Kelly", "Bronwen Rees", "Studies at London College", "Gareth Wild", "Jess Francis", "Martin Price", "Other Today", "Stefan Bassinq", "TLC",
    "AdesignStorie", "Buff Motion", "of Communication", "Garlic Agency", "JK Creative Company", "Martin Wright", "OURI Labs", "Still&Nimble", "Tokyo Calm",
    "Advocate Design Agency", "Butterfly", "DISOM", "Genevieve Bennett Ltd", "Jo Mansfield", "Mat Delney", "Out There", "Storo", "Tokyo Calm",
    "Aetha Design", "BuyDesign", "Dominik Birn", "Genuinely Conscious", "Joanna boehnet", "Materialise Interiors", "Papaya–Studio", "Straight Forward Design", "Tom Greenwood",
    "Aieron Design Ltd", "Carter Studio", "Dr Emma Powell", "George Charsley", "John Gilbert", "Materials Council", "Papillon Bleu", "Stuart Gough", "Tomas Gecim",
    "Alan Pitchforth", "Célibataire", "Dr Karl Jeffries", "George Rowland", "Joseph Folkes", "Materialsinformation Ltd", "Paul Bailey", "Studio Breuil", "Tommy Papaioannou",
    "Alex Kimber Design", "Charli Blighton", "Drew Kendrick", "GET LOST", "Josh Elgood", "Matt Hollands", "Paul Gibson Design", "Studio Casey Joy", "Tira Design",
    "Alexander Miller", "Charti Peake", "Drimme® Media", "Gianfranco Fagotto", "Joshua Tunsiti", "Matthew Menasace", "Pearson Lloyd", "Studio D", "Tristan Palmer Studio",
    "Alexandra Luna Studio", "Charlotte Eagle", "Dylan Wiener", "Gitta Gschwendtner Ltd", "Jude Pullen", "Matter + Perspective", "People Planet Product", "Studio Elma", "Two",
    "Alexandra Lunn Studio", "Charlotte Evans", "ecologicstudio", "Gulia Vila", "Juice by Design", "Matthew Mcullen", "Phase Two", "Studio Every", "Two Degrees Studio",
    "Alexis Sommer", "Cherry Anderson", "Edinuuund", "Glen Culverk", "Justine Wyness", "Max Fraser", "Pixel Fridge LTD", "Studio Gallant", "Ty Syml",
    "Alexis Bardini", "Freelance Design", "Electro Strategy", "Glimpse", "Kashum van der Berg", "Maya Designer", "Pollenze CIC", "Studio Joana", "Uberbrand",
    "Ali Afzar", "Chloé Portier", "Element Studio", "Good Design Works", "Kat Dalton", "Mia Altered", "ZolyZeta", "Studio Joana"


  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4">
            #
            <CountUp end={513} duration={2.5} />
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-lg">Signatories and counting in</span>
            <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">
              DI UK
            </span>
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
