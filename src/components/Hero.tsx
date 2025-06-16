
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFull(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col lg:flex-row items-start justify-between px-6 py-10 gap-8">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap');

        .text-line {
          font-size: 12vw;
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 700;
          color: #ffffff;
          line-height: 0.8;
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }

        .text-uk {
          font-size: 12vw;
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 700;
          color: #ff4500;
          line-height: 0.8;
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }

        .move-up {
          animation: moveUp 1s ease-out forwards;
          font-family: 'Bebas Neue', sans-serif;
          color: #ffffff;
          font-size: 14vw;
          font-weight: bold;
          text-transform: uppercase;
          opacity: 0;
          display: inline-block;
        }

        .fade-in {
          animation: moveUp 1s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        @keyframes moveUp {
          0% {
            transform: translateY(60px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .text-line, .text-uk, .move-up {
            font-size: 16vw;
          }
        }

        @media (max-width: 480px) {
          .text-line, .text-uk, .move-up {
            font-size: 20vw;
          }
        }
        `}
      </style>

      {/* Left: Title Text */}
      <div className="order-1 lg:order-none">
        {!showFull ? (
          <span className="move-up">D!</span>
        ) : (
          <div className="fade-in">
            <p className="text-line">DESIGN</p>
            <p className="text-line">DECLARES</p>
            <p className="text-uk">UK</p>
          </div>
        )}
      </div>

      {/* Right or below (on mobile): Description */}
      <div className="order-2 lg:order-none max-w-xl text-gray-300 text-lg leading-relaxed fade-in">
        <p>
          Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
        </p>
      </div>
    </div>
  );
};

export default Hero;
