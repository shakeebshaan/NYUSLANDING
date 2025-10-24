import React, { useState, useEffect, useRef } from 'react';
import { PhoneMockup } from './Icons';

// Slide 1: Instant Card Lock Feature
const Screen1CardLock: React.FC = () => (
    <div className="w-full h-full bg-white p-4 pt-10 flex flex-col items-center text-xs">
        <p className="font-medium text-gray-800 text-xs mb-1">Credit Card <span className="text-gray-400">*3894</span></p>
        
        {/* Navy Card with Toggle */}
        <div className="w-full max-w-[200px] aspect-[1.586] bg-gradient-to-br from-primary-dark to-gray-800 rounded-xl mt-3 flex flex-col justify-between p-4 shadow-lg">
            <div className="flex justify-start">
                <img src="https://seeklogo.com/images/M/mastercard-logo-4736E77342-seeklogo.com.png" alt="Mastercard" className="w-8" />
            </div>
            <h1 className="text-5xl font-bold text-white self-center tracking-tight">NYUS</h1>
            <div className="h-4"></div>
        </div>
        
        {/* Card Active Toggle */}
        <div className="w-full max-w-[200px] mt-4 bg-gray-50 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 text-xs">🔒</span>
                </div>
                <div className="text-left">
                    <p className="font-semibold text-gray-900 text-[10px]">Card is active</p>
                    <p className="text-gray-500 text-[8px]">Tap to lock your card anytime</p>
                </div>
            </div>
            <div className="w-12 h-6 bg-primary-brand rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
        </div>
        
        {/* Card Options */}
        <div className="w-full max-w-[200px] mt-4 space-y-3">
            <div className="flex items-center justify-between text-gray-700 py-2">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary-brand/10 flex items-center justify-center">
                        <span className="text-primary-brand text-xs">ⓘ</span>
                    </div>
                    <div>
                        <p className="font-semibold text-xs">Card details</p>
                        <p className="text-[9px] text-gray-500">View card number, expiration date and CVC</p>
                    </div>
                </div>
                <button className="text-gray-400">›</button>
            </div>
            
            <div className="flex items-center justify-between text-gray-700 py-2">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary-brand/10 flex items-center justify-center">
                        <span className="text-primary-brand text-xs">⚙</span>
                    </div>
                    <div>
                        <p className="font-semibold text-xs">Card settings</p>
                        <p className="text-[9px] text-gray-500">Report card as lost or stolen and order a new card</p>
                    </div>
                </div>
                <button className="text-gray-400">›</button>
            </div>
        </div>
    </div>
);

// Slide 2: Real-time Alerts on Lock Screen
const Screen2Alerts: React.FC = () => (
    <div className="w-full h-full bg-gray-100 p-0 flex flex-col relative overflow-hidden">
        {/* Lock Screen Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?w=400&h=800&fit=crop" 
                alt="Background" 
                className="w-full h-full object-cover opacity-60"
            />
        </div>
        
        {/* Time Display */}
        <div className="relative z-10 pt-8 pb-6 text-center text-white">
            <p className="text-xs font-medium">Monday, June 6</p>
            <p className="text-7xl font-light tracking-tight">11:03</p>
        </div>
        
        {/* Notifications */}
        <div className="relative z-10 px-4 space-y-3 mt-auto mb-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl p-3 shadow-lg">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-brand flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">S</span>
                    </div>
                    <div className="flex-grow">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-xs text-gray-900">Nike</p>
                            <p className="text-[9px] text-gray-500">34m ago</p>
                        </div>
                        <p className="text-[10px] text-gray-600 mt-0.5">Charged: $28.99 at Nike</p>
                    </div>
                </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur rounded-2xl p-3 shadow-lg">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-brand flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">S</span>
                    </div>
                    <div className="flex-grow">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-xs text-gray-900">Target</p>
                            <p className="text-[9px] text-gray-500">48m ago</p>
                        </div>
                        <p className="text-[10px] text-gray-600 mt-0.5">Charged: $15.99 at Target</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Bottom Actions */}
        <div className="relative z-10 flex justify-center gap-16 pb-6">
            <button className="w-12 h-12 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
                <span className="text-white text-xl">💡</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
                <span className="text-white text-xl">📷</span>
            </button>
        </div>
    </div>
);

// Slide 3: Security Features
const Screen3Security: React.FC = () => (
    <div className="w-full h-full bg-gradient-to-br from-primary-background to-secondary-purple p-6 flex flex-col justify-center">
        <div className="space-y-6">
            {/* Fingerprint */}
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-brand flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🔐</span>
                </div>
                <div>
                    <p className="font-bold text-sm text-gray-900">Fingerprint and facial recognition</p>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        You can use your biometric data to ensure that only you can log into your app.
                    </p>
                </div>
            </div>
            
            {/* Go Paperless */}
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-brand flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">✈️</span>
                </div>
                <div>
                    <p className="font-bold text-sm text-gray-900">Go Paperless</p>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        Receive your monthly statements by email to increase account security.
                    </p>
                </div>
            </div>
            
            {/* Full Protection */}
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-brand flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🔒</span>
                </div>
                <div>
                    <p className="font-bold text-sm text-gray-900">Full protection for peace of mind</p>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        Your information is secured by 256-bit encryption and other security features.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

// Slide 4: Get Started CTA
const Screen4GetStarted: React.FC = () => (
    <div className="w-full h-full bg-gradient-to-br from-primary-brand to-primary-background p-6 flex flex-col justify-between text-white">
        <div className="flex-grow flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Get started</h2>
            <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-lg">⚡</span>
                    </div>
                    <p>Download and start in as little as 2 minutes</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-lg">💳</span>
                    </div>
                    <p>Get a digital card instantly to start (re)building your credit.*</p>
                </div>
            </div>
        </div>
        
        <button className="w-full py-3 bg-white text-primary-dark font-bold rounded-full text-sm shadow-lg">
            DOWNLOAD NOW
        </button>
    </div>
);

const showcaseData = [
    {
        id: 'card-lock',
        scale: 0.82,
        screen: <Screen1CardLock />,
        leftText: 'Instant card lock',
        rightText: 'Lock your card with one tap, whether you think it\'s misplaced, lost or stolen.',
    },
    {
        id: 'alerts',
        scale: 0.92,
        screen: <Screen2Alerts />,
        leftText: 'Real-time alerts',
        rightText: 'Turn on instant push notifications to stay on top of every transaction as it happens.',
    },
    {
        id: 'security',
        scale: 1.0,
        screen: <Screen3Security />,
        leftText: 'Security you can count on',
        rightText: 'We safeguard your data with end-to-end encryption and security features designed to protect your privacy.',
    },
    {
        id: 'get-started',
        scale: 1.08,
        screen: <Screen4GetStarted />,
        leftText: 'Start building credit today',
        rightText: 'Download the app and open an account in minutes. Begin your journey to better credit.',
    },
];

const FeatureShowcaseDuplicate: React.FC = () => {
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
        <section ref={sectionRef} className="relative h-[400vh] bg-white">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-8">
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-12 lg:gap-16">
                    {/* Left Text Column */}
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
                    <div className="flex justify-center">
                        <div 
                            className="w-80 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" 
                            style={{ 
                                transform: `scale(${activeData.scale})`,
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
                    
                    {/* Right Text Column */}
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

export default FeatureShowcaseDuplicate;
