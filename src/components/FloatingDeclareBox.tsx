import React, { useState, useEffect } from 'react';
import { Home, User, Settings, FileText, X } from 'lucide-react';

interface FloatingDeclareBoxProps {
  className?: string;
}

const FloatingDeclareBox: React.FC<FloatingDeclareBoxProps> = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkFooterVisibility = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide the box when footer is visible
        const footerVisible = footerRect.top < windowHeight && footerRect.bottom > 0;
        setIsVisible(!footerVisible);
      }
    };

    window.addEventListener('scroll', checkFooterVisibility);
    window.addEventListener('resize', checkFooterVisibility);
    checkFooterVisibility(); // Initial check

    return () => {
      window.removeEventListener('scroll', checkFooterVisibility);
      window.removeEventListener('resize', checkFooterVisibility);
    };
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: User, label: 'Contact', href: '/profile' },
    { icon: FileText, label: 'Latest', href: '/documents' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  const handleMenuClick = (href: string) => {
    // Handle navigation here
    console.log('Navigate to:', href);
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-2 duration-200">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(item.href)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <item.icon size={20} className="text-gray-600" />
              <span className="text-gray-800 font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main Declare Box */}
      <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
        {/* Menu Header */}
        <div className="flex">
          <div className="flex-1 px-4 py-2 bg-gray-50 border-r border-gray-300">
            <span className="text-gray-800 font-semibold">Menu</span>
          </div>
          <button
            onClick={toggleExpanded}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors border-l border-gray-300"
          >
            {isExpanded ? (
              <X size={20} className="text-gray-600" />
            ) : (
              <span className="text-gray-600 text-xl font-bold">+</span>
            )}
          </button>
        </div>
        
        {/* Declare Now Button */}
        <button 
          className="w-full px-4 py-3 bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-colors"
          onClick={() => console.log('Declare Now clicked')}
        >
          Declare Now
        </button>
      </div>
    </div>
  );
};

export default FloatingDeclareBox;