import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { FingerprintIcon, PaperlessIcon, LockIcon } from './Icons';


const SecurityFeature: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 text-primary-brand">{icon}</div>
        <div>
            <h4 className="font-semibold text-text-dark">{title}</h4>
            <p className="text-sm text-text-gray mt-1">{children}</p>
        </div>
    </div>
);


const SecuritySection: React.FC = () => {
    // FIX: Specified the element type for the useOnScreen hook to fix a type mismatch on the ref prop.
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });

    const animationClass = `transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
    const contentAnimationClass = (delay: string) => `transition-all duration-700 ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`;

    return (
        <section className="py-24">
            <div ref={ref} className="container mx-auto max-w-6xl px-4">
                <div className={`bg-primary-background p-8 md:p-12 rounded-2xl grid md:grid-cols-2 gap-12 items-center ${animationClass}`}>
                    <div className={contentAnimationClass('delay-200')}>
                        <h3 className="text-3xl md:text-4xl font-semibold text-primary-dark">Security you can count on</h3>
                        <button className="mt-6 bg-primary-brand text-white font-semibold rounded-full px-6 py-3 hover:scale-105 transition-transform">
                            RESPOND TO OFFER
                        </button>
                    </div>
                    <div className={`space-y-8 ${contentAnimationClass('delay-400')}`}>
                        <SecurityFeature icon={<FingerprintIcon />} title="Fingerprint and facial recognition">
                            You can use your biometric data to ensure that only you can log into your app.
                        </SecurityFeature>
                        <SecurityFeature icon={<PaperlessIcon />} title="Go Paperless">
                            Receive your monthly statements by email to increase account security.
                        </SecurityFeature>
                        <SecurityFeature icon={<LockIcon />} title="Full protection for peace of mind">
                            Your information is secured by 256-bit encryption and other security features.
                        </SecurityFeature>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
