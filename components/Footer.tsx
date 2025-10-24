
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-off-white border-t border-border-light pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-text-dark">The App</h4>
            <h4 className="font-bold text-lg text-text-dark">About</h4>
          </div>
          <div className="space-y-2 text-text-gray text-sm">
            <h4 className="font-bold text-lg text-text-dark mb-4">Contact</h4>
            <p>Email: support@nyus.com</p>
            <p>Available Monday - Friday, 9:00 a.m. - 9:00 p.m.</p>
          </div>
          <div className="md:col-span-2 flex flex-col items-start md:items-end">
            {/* Text content */}
            <div className="z-20">
              <div 
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 'bold',
                  color: '#6A4535',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0.5rem',
                  textShadow: `
                    0 0 10px rgba(255, 255, 255, 0.3),
                    0 0 20px rgba(255, 255, 255, 0.2),
                    2px 2px 4px rgba(0, 0, 0, 0.5),
                    -1px -1px 2px rgba(255, 255, 255, 0.1)
                  `,
                  letterSpacing: '0.05em',
                  display: 'inline-block'
                }}
              >
                NYUS
              </div>
            </div>
           
          </div>
        </div>
        <div className="border-t border-border-light mt-12 pt-8 text-xs text-text-gray space-y-4">
            <p>NYUS Inc. © all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
