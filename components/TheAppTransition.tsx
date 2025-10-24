import React, { useState, useEffect, useRef } from 'react';

const TheAppTransition: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const el = sectionRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            // The animation plays out over the scroll distance defined by the section's height minus one viewport.
            const scrollableHeight = el.offsetHeight - window.innerHeight;

            // Before the section is sticky (top is > 0), progress is 0.
            if (rect.top > 0) {
                setProgress(0);
                return;
            }
            
            // After scrolling past the section (bottom is < viewport height), progress is 1.
            if (rect.bottom < window.innerHeight) {
                setProgress(1);
                return;
            }
            
            // While sticky, calculate progress from 0 to 1 based on how much has been scrolled.
            const currentProgress = Math.max(0, Math.min(1, (-rect.top) / scrollableHeight));
            setProgress(currentProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Set initial state on mount
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Define animation values based on scroll progress
    const initialGap = 4; // Use vw for responsive spacing
    const finalGap = 28;  // The final, larger gap
    const currentGap = initialGap + (finalGap - initialGap) * progress;
    
    // "THE" moves left and fades out
    const theTranslateX = -progress * 100; // Move 100vw to the left
    const theOpacity = 1 - progress;
    
    // "APP" moves right and fades out
    const appTranslateX = progress * 100; // Move 100vw to the right
    const appOpacity = 1 - progress;
    
    // The subtitle fades in and scales up as the words move away
    const subtitleOpacity = progress;
    
    // Calculate scale: more conservative scaling for better mobile experience
    // On mobile, we want more controlled growth to maintain readability
    const minScale = 1;
    const maxScaleMobile = 4; // More conservative scale for mobile
    const maxScaleDesktop = 7; // Larger scale for desktop
    
    // Detect if we're on mobile (simplified check)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const maxScale = isMobile ? maxScaleMobile : maxScaleDesktop;
    
    const currentScale = minScale + (maxScale - minScale) * progress;

    return (
        <section ref={sectionRef} className="relative h-[150vh] md:h-[200vh] bg-off-white">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center px-4">
                <div className="relative flex items-center justify-center w-full max-w-7xl">
                    
                    <h2 
                        className="font-bold text-primary-dark text-[20vw] md:text-[20vw] whitespace-nowrap"
                        style={{
                            opacity: theOpacity,
                            transform: `translateX(${theTranslateX}vw)`,
                            transition: 'opacity 0.3s ease-out'
                        }}
                    >
                        NY
                    </h2>
                    
                    {/* An invisible div that grows to push the words apart */}
                    <div style={{ width: `${currentGap}vw`}} className="flex-shrink-0"></div>

                    <h2 
                        className="font-bold text-primary-dark text-[20vw] md:text-[20vw] whitespace-nowrap"
                        style={{
                            opacity: appOpacity,
                            transform: `translateX(${appTranslateX}vw)`,
                            transition: 'opacity 0.3s ease-out'
                        }}
                    >
                        US
                    </h2>

                    {/* The subtitle fades in and grows as the words move away */}
                    <p 
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-lg md:text-xl text-center text-text-dark max-w-[320px] md:max-w-md font-medium px-4 leading-snug"
                        style={{ 
                            opacity: subtitleOpacity,
                            transform: `translate(-50%, -50%) scale(${currentScale})`,
                            transformOrigin: 'center',
                            transition: 'opacity 0.3s ease-out'
                        }}
                    >
                        Features you need.
                        <br />
                        Nothing You don't Use
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TheAppTransition;
