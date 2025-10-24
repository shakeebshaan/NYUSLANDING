import React, { useState, useEffect, useRef } from 'react';
import { GooglePlayIcon, AppStoreIcon } from './Icons';

const text = "Step up your wellness game. Personalized nutrition and workouts designed for your goals. Download NYUS to track, connect, and transform.";
const words = text.split(' ');
const styles = [
  'gradient',     // Step
  'gradient',     // up
  'gradient', // your
  'gradient', // credit
  'gradient',     // game.
  'gradient',     // Designed
  'gradient', // to
  'gradient',     // support
  'gradient', // you
  'gradient',     // and
  'gradient', // your
  'gradient',     // goals.
  'gradient',     // Download
  'gradient', // the
  'gradient',     // app
  'gradient', // to
  'gradient',     // log
  'gradient', // in
  'gradient', // to
  'gradient', // your
  'gradient',     // account.
];

const wordsWithColorInfo = words.map((word, index) => ({
    word,
    styleType: styles[index] || 'blue'
}));


const DownloadLinks: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [animatedWordCount, setAnimatedWordCount] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            // The scrollable height is the total height of the section minus one viewport height.
            const scrollableHeight = sectionRef.current.offsetHeight - window.innerHeight;
            
            // Before the section is sticky, progress is 0.
            if (rect.top > 0) {
                setAnimatedWordCount(0);
                return;
            }
            
            // After the section is fully scrolled past, progress is 100%.
            if (rect.bottom < window.innerHeight) {
                setAnimatedWordCount(wordsWithColorInfo.length);
                return;
            }
            
            // During the sticky scroll, calculate progress.
            const progress = Math.max(0, Math.min(1, (-rect.top) / scrollableHeight));
            setAnimatedWordCount(Math.floor(progress * (wordsWithColorInfo.length + 1)));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial call to set state
        handleScroll(); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[200vh] md:h-[250vh]">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center px-4">
                <div className="container mx-auto max-w-6xl flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12">
                    
                    {/* Animated Text */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl mx-auto leading-tight text-center">
                        {wordsWithColorInfo.map(({ word, styleType }, i) => {
                            const isAnimated = i < animatedWordCount;
                            
                            let className = 'text-primary-blue';
                            let inlineStyle = {};

                            if (isAnimated) {
                                if (styleType === 'blue') {
                                    className = 'text-primary-blue';
                                } else if (styleType === 'gradient') {
                                    className = 'text-transparent bg-clip-text';
                                    inlineStyle = { backgroundImage: 'linear-gradient(to right, #000000ff, #706b6bff)' };
                                } else if (styleType === 'blue') {
                                    className = 'text-text-gray';
                                }
                            }
                            
                            return (
                                <span
                                    key={i}
                                    className={`transition-colors duration-500 ${className}`}
                                    style={inlineStyle}
                                >
                                    {word}{' '}
                                </span>
                            );
                        })}
                    </h2>

                    {/* Download Links and QR */}
                    <div className="flex flex-col items-center gap-4 sm:gap-6">
                         <div className="flex gap-3 sm:gap-4 scale-90 sm:scale-100">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><GooglePlayIcon /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><AppStoreIcon /></a>
                        </div>
                        <div className="bg-off-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-border-light flex items-center gap-3 sm:gap-4 max-w-[90vw]">
                            <img src="https://cdn.prod.website-files.com/64031c58bc443d09034abf4b/6514501c16ecb096b20701dc_app-qr.jpg" alt="QR Code to download Seen app" className="h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0"/>
                            <p className="text-text-gray text-xs sm:text-sm max-w-[180px] sm:max-w-[200px]">
                                Hold your device camera up to the QR code to download the app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadLinks;
