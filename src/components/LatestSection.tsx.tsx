
// import React from "react";
// import { motion } from "framer-motion";

// type Article = {
//   tags: string[];
//   date: string;
//   title: string;
//   subtitle: string;
//   linkTitle: string;
//   linkHref: string;
// };

// const articles: Article[] = [
//   {
//     tags: ["Events", "D! UK"],
//     date: "24.04.2025, 03 AM:00",
//     title: "SD4P Collective: How can Service Design drive meaningful sustainability impact",
//     subtitle: "Recap: SD4P Collective working session – 28th March 2025",
//     linkTitle: "Read story",
//     linkHref: "#",
//   },
//   {
//     tags: ["Events", "D! UK"],
//     date: "06.12.2024, 01 AM:00",
//     title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
//     subtitle:
//       "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
//     linkTitle: "Read story",
//     linkHref: "#",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const LatestSection = () => {
//   return (
//     <div className="bg-black text-white py-16 px-6 md:px-20">
//       <div className="flex flex-col md:flex-row gap-16">
//         {/* Left */}
//         <div className="md:w-1/4">
//           <motion.h2
//             className="text-4xl font-bold"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             Latest
//           </motion.h2>
//         </div>

//         {/* Right */}
//         <div className="md:w-3/4 space-y-16">
//           {articles.map((article, idx) => (
//             <motion.div
//               key={idx}
//               className="flex flex-col md:flex-row justify-between gap-8"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeUp}
//             >
//               <div className="md:w-2/3">
//                 <div className="flex gap-2 mb-2">
//                   {article.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="bg-neutral-800 px-3 py-1 rounded-full text-sm font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <p className="text-sm text-gray-400 mb-2">{article.date}</p>
//                 <h3 className="text-2xl font-semibold leading-tight">{article.title}</h3>
//               </div>
//               <div className="md:w-1/3">
//                 <p className="mb-2 text-base">{article.subtitle}</p>
//                 <a href={article.linkHref} className="underline hover:text-gray-300">
//                   {article.linkTitle}
//                 </a>
//               </div>
//             </motion.div>
//           ))}

//           <motion.div
//             className="flex justify-center"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200">
//               See all the latest
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestSection;
import React from "react";
import { motion } from "framer-motion";

type Article = {
  tags: string[];
  date: string;
  title: string;
  subtitle: string;
  linkTitle: string;
  linkHref: string;
};

const articles: Article[] = [
  {
    tags: ["Events", "D! UK"],
    date: "24.04.2025, 03 AM:00",
    title: "SD4P Collective: How can Service Design drive meaningful sustainability impact",
    subtitle: "Recap: SD4P Collective working session – 28th March 2025",
    linkTitle: "Read story",
    linkHref: "#",
  },
  {
    tags: ["Events", "D! UK"],
    date: "06.12.2024, 01 AM:00",
    title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
    subtitle: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
    linkTitle: "Read story",
    linkHref: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const LatestSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Sticky Left */}
        <div className="md:w-1/4 sticky top-0 self-start">
          <motion.h2
            className="text-3xl font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Latest
          </motion.h2>
        </div>

        {/* Right */}
        <div className="md:w-3/4 space-y-16">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row justify-between gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="md:w-2/3">
                <div className="flex gap-2 mb-2">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-neutral-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mb-2">{article.date}</p>
                <h3 className="text-2xl font-semibold leading-tight">{article.title}</h3>
              </div>
              <div className="md:w-1/3">
                <p className="mb-2 text-base">{article.subtitle}</p>
                <a href={article.linkHref} className="underline hover:text-gray-300">
                  {article.linkTitle}
                </a>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200">
              See all the latest
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestSection;
