import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log('Newsletter subscription:', { email, isChecked });
  };

  return (
    <footer className="bg-red-500 text-black px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column - Logo */}
          <div className="flex items-start">
            <h1 className="text-6xl lg:text-7xl font-black leading-none tracking-tight">
              DESIGN<br />
              DECLARES
            </h1>
          </div>

          {/* Middle Column - Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="hover:underline cursor-pointer">Instagram</div>
                <div className="hover:underline cursor-pointer">LinkedIn</div>
                <div className="hover:underline cursor-pointer">Privacy Policy</div>
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Sign up to the D! Newsletter</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email:*
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-2 border-black focus:outline-none focus:ring-0"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mt-1 w-6 h-6 border-2 border-black bg-transparent focus:ring-0"
                />
                <div className="text-sm leading-relaxed">
                  I would like to be added to the Design Declares! newsletter and receive further updates.
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="text-sm underline hover:no-underline bg-transparent border-none cursor-pointer">
                  View our Privacy Policy
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors border-none cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 space-y-6">
          <div className="text-sm leading-relaxed">
            <p>
              This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and 
              on demand.{' '}
              <span className="underline cursor-pointer hover:no-underline">
                Learn more about our carbon footprint.
              </span>
            </p>
          </div>


          <div className="flex items-center justify-between">
            <div className="text-sm">
              Empowered by{' '}
              <span className="underline cursor-pointer hover:no-underline">
                Driftime®
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
