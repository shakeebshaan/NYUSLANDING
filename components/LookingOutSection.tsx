
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { SwipeIcon } from './Icons';

const FeatureCard: React.FC<{
  className?: string;
  bgContent: React.ReactNode;
  children: React.ReactNode;
  animationDelay?: string;
  isVisible: boolean;
}> = ({ className, bgContent, children, animationDelay = 'delay-0', isVisible }) => {
  return (
    <div 
      className={`absolute rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`} 
      style={{ transitionDelay: animationDelay }}
    >
      <div className="absolute inset-0">
        {bgContent}
      </div>
      <div className="absolute inset-0 bg-black/10"></div>
      <button className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {children}
      </div>
    </div>
  );
};

const LookingOutSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.2, triggerOnce: true });

    const titleAnimation = `transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

    return (
        <section ref={ref} className="bg-primary-background py-16 sm:py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto max-w-6xl px-4 text-center">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark ${titleAnimation}`}>
                    Looking out <span className="text-primary-brand">for you</span>
                </h2>
                <p className={`mt-3 sm:mt-4 text-base sm:text-lg text-text-gray max-w-xl mx-auto px-2 ${titleAnimation} delay-150`}>
                   A personalized app to help you reach your wellness goals. Start your transformation in as little as 2 minutes.
                </p>
                <button className={`mt-6 sm:mt-8 bg-white text-primary-dark font-semibold rounded-full px-6 sm:px-8 py-2.5 sm:py-3 hover:scale-105 transition-all duration-300 ${titleAnimation} delay-300`}>
                    GET STARTED
                </button>

                <div className="relative h-[420px] sm:h-[500px] md:h-[550px] mt-12 sm:mt-16 max-w-4xl mx-auto">
                    <FeatureCard
                        className="w-48 h-64 sm:w-60 sm:h-80 md:w-72 md:h-96 transform -rotate-12 left-[2%] sm:left-0 md:left-[5%] top-12 sm:top-10"
                        bgContent={<img src="/x1.png" alt="Mountain landscape" className="w-full h-full object-cover" />}
                        animationDelay="400ms"
                        isVisible={isVisible}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Free up time for what truly matters—your health.</h3>
                    </FeatureCard>
                    
                    
                    <FeatureCard
                        className="z-0 w-56 h-80 sm:w-72 sm:h-[400px] md:w-80 md:h-[480px] left-1/2 -translate-x-[15%] sm:-translate-x-[20%] top-8 sm:top-16 md:top-4 transform rotate-6"
                        bgContent={<img src="/x2.png" alt="Woman drinking coffee" className="w-full h-full object-cover" />}
                        animationDelay="0ms"
                        isVisible={isVisible}
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Build your custom plan</h3>
                        <p className="mt-1.5 sm:mt-2 text-sm sm:text-base">Connect with your coach, Get real-time support and guidance on your journey.</p>
                    </FeatureCard>

                  
                </div>
            </div>
        </section>
    );
};

export default LookingOutSection;
