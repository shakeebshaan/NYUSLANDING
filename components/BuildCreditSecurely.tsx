
import React from 'react';
import { SecureLockIcon } from './Icons';
import { useOnScreen } from '../hooks/useOnScreen';

const BuildCreditSecurely: React.FC = () => {
    const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.3, triggerOnce: true });

    const animationClass = (delay: string) => 
        `transition-all duration-700 ease-out ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

    return (
        <section ref={ref} className="py-24 md:py-32 bg-white">
            <div className="container mx-auto max-w-6xl px-4 flex flex-col items-center text-center">
                <div className={`text-primary-brand ${animationClass('delay-0')}`}>
                    <SecureLockIcon />
                </div>

                <h2 className={`text-4xl md:text-5xl font-bold mt-6 ${animationClass('delay-200')}`}>
                    <span className="text-primary-dark">Build credit </span>
                    <span className="text-primary-brand">securely</span>
                </h2>
                <p className={`mt-4 text-text-gray max-w-md mx-auto ${animationClass('delay-400')}`}>
                    We safeguard your data with end-to-end encryption and security features designed to protect your privacy.
                </p>
                <button className={`mt-8 bg-primary-background text-primary-dark font-semibold rounded-full px-8 py-3 hover:scale-105 transition-transform ${animationClass('delay-600')}`}>
                    DOWNLOAD THE APP
                </button>
            </div>
        </section>
    );
};

export default BuildCreditSecurely;
