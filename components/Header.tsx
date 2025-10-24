
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-off-white border-b border-border-light">
      <div className="container mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
        {/* Text content */}
        <div className="z-20">
          <div 
            style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 'clamp(1.5rem, 3vw, 1.5rem)',
              fontWeight: 'bold',
              color: '#000000ff',
              padding: '0.25rem 0.75rem',
              borderRadius: '0.5rem',
              
              letterSpacing: '0.05em',
              display: 'inline-block'
            }}
          >
            NYUS
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-gray">
          {/* <a href="#" className="relative group transition-colors duration-300 hover:text-primary-brand">
            THE CARD
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
          </a> */}
          {/* <a href="#" className="text-primary-dark font-bold relative">
            GET THE APP
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-dark rounded-full"></span>
          </a> */}
          {/* <a href="#" className="relative group transition-colors duration-300 hover:text-primary-brand">
            ABOUT
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
          </a> */}
        </nav>
        <div className="flex items-center gap-4">
          {/* <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold text-text-dark border border-primary-dark/50 rounded-full px-4 py-2 hover:bg-primary-background transition-all">
              SEE IF I PREQUALIFY
            </button>
            <a href="#" className="text-sm font-semibold text-text-dark hover:text-primary-brand transition-colors">
              RESPOND TO OFFER
            </a>
          </div> */}
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
