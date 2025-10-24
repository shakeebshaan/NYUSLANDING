
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { AppIcon } from './Icons';

const Hero: React.FC = () => {
  const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.1 });

  const animationClass = (delay: string) => 
    `transition-all duration-1000 ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-start items-center text-center pt-20 md:pt-36 pb-4 md:pb-12 overflow-hidden">
      {/* Text content */}
      <div className="container mx-auto max-w-6xl px-4 z-20">
        <div 
          className={`mx-auto ${animationClass('delay-1')}`}
          style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 'clamp(2.5rem, 12vw, 14rem)',
            fontWeight: 'bold',
            color: '#6A4535',
            padding: '0.25rem 1rem',
            borderRadius: '1rem',
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
       <h1 className={`text-4xl sm:text-6xl md:text-8xl font-bold -mt-4 md:-mt-6 tracking-tighter ${animationClass('delay-200')}`}>
          <span className="text-primary-dark">Get the </span>
          <span className="text-primary-brand">App</span>
        </h1>
      </div>

      {/* Image container */}
      <div className="w-full flex-grow flex items-center justify-center z-10 mt-4 md:mt-0">
        <div className="relative w-full max-w-7xl h-[450px] sm:h-[550px] md:h-[1050px]">
          {/* Left Phone */}
          <img 
            src="/1.png" 
            alt="Seen App on iPhone lock screen" 
            className={`absolute top-1 left-1/2 w-auto h-full max-h-[400px] sm:max-h-[500px] md:max-h-[975px] z-0 ${animationClass('delay-[600ms]')} transform -translate-x-[105%] sm:-translate-x-[110%] md:-translate-x-[120%] -translate-y-1/2 -rotate-[12deg] md:-rotate-[15deg]`}
          />
          
          {/* Center Phone */}
          <img 
            src="/2.png" 
            alt="Seen App dashboard on iPhone" 
            className={`absolute top-1 left-1/2 w-auto h-full max-h-[450px] sm:max-h-[550px] md:max-h-[1050px] z-10 ${animationClass('delay-300')} transform -translate-x-1/2 -translate-y-[55%]`} 
          />
          
          {/* Right Phone */}
          <img 
            src="/3.png" 
            alt="Seen App digital card on iPhone" 
            className={`absolute top-1 left-1/2 w-auto h-full max-h-[400px] sm:max-h-[500px] md:max-h-[975px] z-0 ${animationClass('delay-[800ms]')} transform translate-x-[5%] sm:translate-x-[10%] md:translate-x-[20%] -translate-y-1/2 rotate-[12deg] md:rotate-[15deg]`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
