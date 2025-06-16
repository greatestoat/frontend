import React from "react";

const acts = [
  {
    title: "Sound the Alarm",
    description:
      "Acknowledge and raise awareness of the climate and ecological crisis – including its roots in systems of oppression – in our organisations and our practice.",
  },
  {
    title: "Start the Journey",
    description:
      "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
  },
  {
    title: "Bring Clients with Us",
    description:
      "Meaningfully consider environmental and social impacts as part of every brief and production process. Not every design output will be carbon neutral or environmentally friendly, but every project is an opportunity to make real progress.",
  },
  {
    title: "Innovate & Educate",
    description:
      "Share tools, strategies and stories of change to help grow collective knowledge and push the boundaries of design’s role in crisis.",
  },
  {
    title: "Redefine 'Good'",
    description:
      "Rethink what success looks like and challenge current design standards that prioritise profit over people and planet.",
  },
  {
    title: "Design for Justice",
    description:
      "Ensure that equity, inclusivity and accessibility are central to our work, considering both who is impacted and who is included.",
  },
  {
    title: "Support Ecologies",
    description:
      "Design in ways that regenerate natural systems rather than depleting them, and advocate for practices that protect nature.",
  },
  {
    title: "Amplify Voices for Change",
    description:
      "Use our platforms, skills and networks to support and elevate communities and movements working for climate and social justice.",
  },
];

const EightActs = () => {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-24 min-h-screen">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sticky Left Side */}
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold sticky top-20">
            8 Acts of Emergency
          </h2>
        </div>

        {/* Scrollable Right Side */}
        <div className="md:w-2/3 space-y-6">
          <p className="text-lg text-white/90 max-w-3xl mb-4">
            What does it take to Declare? It’s accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:
          </p>

          {acts.map((act, index) => (
            <div key={index} className="bg-gray-200 text-black">
              <div className="grid grid-cols-[50px_1fr] items-center border border-black p-4">
                <div className="text-3xl font-semibold">{index + 1}</div>
                <div className="text-2xl md:text-3xl font-medium">{act.title}</div>
              </div>
              <div className="border border-black border-t-0 p-4 text-lg">
                {act.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EightActs;
