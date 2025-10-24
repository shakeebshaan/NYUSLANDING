import React, { useState, useEffect, useRef } from 'react';
import { PhoneMockup } from './Icons';

const getAssetUrl = (path: string) => {
    const base = (import.meta as any).env?.BASE_URL || '/';
    return `${base}${path}`;
};

// Slide 1: F1 Image
const Screen1Initial: React.FC = () => (
    <div className="w-full h-full bg-white flex items-center justify-center">
        <img 
            src={getAssetUrl('F1.png')}
            alt="Initial Feature" 
            className="w-full h-full object-contain"
        />
    </div>
);

// Slide 2: F1 Image
const Screen2Active: React.FC = () => (
    <div className="w-full h-full bg-white flex items-center justify-center">
        <img 
            src={getAssetUrl('F2.png')}
            alt="Digital Card Feature" 
            className="w-full h-full object-contain"
        />
    </div>
);

// Slide 3: F3 Image
const Screen3Link: React.FC = () => (
    <div className="w-full h-full bg-white flex items-center justify-center">
        <img 
            src={getAssetUrl('F3.png')}
            alt="Link Account Feature" 
            className="w-full h-full object-contain"
        />
    </div>
);

// Slide 4: F4 Image
const Screen4Pay: React.FC = () => (
    <div className="w-full h-full bg-white flex items-center justify-center">
        <img 
            src={getAssetUrl('F4.png')}
            alt="Autopay Feature" 
            className="w-full h-full object-contain"
        />
    </div>
);

// Slide 5: F5 Image
const Screen5Autopay: React.FC = () => (
    <div className="w-full h-full bg-white flex items-center justify-center">
        <img 
            src={getAssetUrl('F5.png')}
            alt="Autopay Setup Feature" 
            className="w-full h-full object-contain"
        />
    </div>
);

const showcaseData = [
    {
        id: 'initial',
        scale: 0.82,
        screen: <Screen1Initial />,
        leftText: 'Your complete fitness dashboard in one glance',
        rightText: 'Stay on top of your goals with a unified overview that tracks weight loss, meal completion, and workout sessions. See exactly where you stand today, and know what needs your attention.',
    },
    {
        id: 'active',
        scale: 0.92,
        screen: <Screen2Active />,
        leftText: 'Track your weight journey with precision and clarity',
         rightText: 'Log your weight in seconds. Visualize trends, watch your transformation unfold day by day. Your progress has never been clearer or more motivating.',

    },
    {
        id: 'link',
        scale: 1.0,
        screen: <Screen3Link />,
        leftText: 'Master your nutrition with intelligent macro tracking',
        rightText: 'Never guess your nutrition again. Coach track your daily protein, carbs, and fats. Personalized meal based on your input complete with detailed calorie and macro breakdowns for every bite.',

    },
    {
        id: 'pay',
        scale: 1.08,
        screen: <Screen4Pay />,
        leftText: 'Build strength with smart workout logging and PR tracking',
        rightText: 'Watch your strength soar with personal record tracking and predictive analytics. Log every set, track total volume lifted, and monitor monthly improvements. See your predicted 1 Rep Max grow as you crush your training goals and set new personal bests.',

    },
    {
        id: 'autopay',
        scale: 1.08,
        screen: <Screen5Autopay />,
        leftText: 'Get personalized support from your  coach, 24/7',
        rightText: 'Your always-available fitness companion. Update your training schedule, and dietary needs to receive instant, personalized advice. From meal adjustments to workout modifications.',
    },
];

const FeatureShowcase: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [stage, setStage] = useState(0);

    useEffect(() => {
        let rafId: number;
        
        const handleScroll = () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
            
            rafId = requestAnimationFrame(() => {
                const el = sectionRef.current;
                if (!el) return;

                const rect = el.getBoundingClientRect();
                const scrollableHeight = el.offsetHeight - window.innerHeight;
                
                if (rect.top > 0) {
                    setStage(0);
                    return;
                }
                if (rect.bottom < window.innerHeight) {
                    setStage(showcaseData.length - 1);
                    return;
                }

                const progress = Math.max(0, Math.min(1, (-rect.top) / scrollableHeight));
                const currentStage = Math.floor(progress * showcaseData.length);
                setStage(Math.min(showcaseData.length - 1, currentStage));
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, []);

    const activeData = showcaseData[stage];
    
    return (
        <section ref={sectionRef} className="relative h-[400vh] md:h-[500vh] bg-white">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4 md:px-8">
                <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-16">
                    {/* Left Text Column - Desktop Only */}
                    <div className="hidden lg:flex justify-end">
                        <div className="relative w-full max-w-sm h-32">
                            {showcaseData.map(({ leftText }, index) => (
                                <div
                                    key={`left-${index}`}
                                    className={`absolute inset-0 flex items-center justify-end transition-all duration-700 ease-out ${
                                        stage === index 
                                            ? 'opacity-100 translate-x-0' 
                                            : 'opacity-0 -translate-x-8'
                                    }`}
                                    style={{ transitionDelay: stage === index ? '100ms' : '0ms' }}
                                >
                                    {leftText && (
                                        <p className="text-right text-2xl font-medium text-gray-800 leading-tight">
                                            {leftText}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Phone Column */}
                    <div className="flex justify-center w-full lg:w-auto">
                        <div 
                            className="w-64 md:w-80 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" 
                            style={{ 
                                transform: `scale(${Math.min(activeData.scale, 1)})`,
                                willChange: 'transform'
                            }}
                        >
                            <div className="relative">
                                {showcaseData.map((data, index) => (
                                    <div
                                        key={data.id}
                                        className={`${index === 0 ? 'relative' : 'absolute inset-0'} transition-opacity duration-600 ease-in-out`}
                                        style={{ 
                                            opacity: stage === index ? 1 : 0,
                                            willChange: 'opacity'
                                        }}
                                    >
                                        <PhoneMockup>{data.screen}</PhoneMockup>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Mobile Text - Below Phone */}
                    <div className="lg:hidden w-full px-4 max-w-md mx-auto">
                        <div className="relative h-auto min-h-[120px]">
                            {showcaseData.map(({ leftText, rightText }, index) => (
                                <div
                                    key={`mobile-${index}`}
                                    className={`transition-all duration-700 ease-out ${
                                        stage === index 
                                            ? 'opacity-100' 
                                            : 'opacity-0 absolute inset-0'
                                    }`}
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                                        {leftText}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed text-center">
                                        {rightText}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right Text Column - Desktop Only */}
                    <div className="hidden lg:block">
                        <div className="relative w-full max-w-sm h-32">
                            {showcaseData.map(({ rightText }, index) => (
                                <div
                                    key={`right-${index}`}
                                    className={`absolute inset-0 flex items-center justify-start transition-all duration-700 ease-out ${
                                        stage === index 
                                            ? 'opacity-100 translate-x-0' 
                                            : 'opacity-0 translate-x-8'
                                    }`}
                                    style={{ transitionDelay: stage === index ? '150ms' : '0ms' }}
                                >
                                    {rightText && (
                                        <p className="text-left text-lg text-gray-600 leading-relaxed">
                                            {rightText}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;
