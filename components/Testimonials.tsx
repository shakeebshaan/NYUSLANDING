
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { StarIcon } from './Icons';

const testimonials = [
    {
        quote: "Seen has completely changed how I manage my credit. The app is so intuitive and I feel more in control of my financial future than ever before.",
        avatar: "https://i.pravatar.cc/150?img=1",
        name: "Jessica M.",
        title: "Seen User",
    },
    {
        quote: "The instant card lock feature gives me so much peace of mind. Plus, the real-time alerts help me stay on top of every transaction. Highly recommended!",
        avatar: "https://i.pravatar.cc/150?img=2",
        name: "David R.",
        title: "Happy Customer",
    },
    {
        quote: "Finally, a credit building app that's designed for real people. The interface is clean, the features are useful, and customer support is top-notch.",
        avatar: "https://i.pravatar.cc/150?img=3",
        name: "Sarah L.",
        title: "Fintech Enthusiast",
    },
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0]; index: number }> = ({ testimonial, index }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });
    const delay = `${index * 150}ms`;

    return (
        <div
            ref={ref}
            className={`bg-white p-6 rounded-2xl shadow-lg border border-border-light transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: delay }}
        >
            <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="text-text-gray mt-4 italic">"{testimonial.quote}"</p>
            <div className="flex items-center mt-6">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                <div className="ml-4">
                    <p className="font-semibold text-text-dark">{testimonial.name}</p>
                    <p className="text-sm text-text-gray">{testimonial.title}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const [titleRef, isTitleVisible] = useOnScreen<HTMLHeadingElement>({ threshold: 0.5, triggerOnce: true });

    return (
        <section className="py-24 bg-light-blue/20">
            <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
                <h2
                    ref={titleRef}
                    className={`text-4xl md:text-5xl font-semibold text-center mb-16 transition-all duration-700 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <span className="text-primary-blue">Loved by users </span>
                    <span className="bg-gradient-to-r from-secondary-purple to-primary-blue text-transparent bg-clip-text">worldwide</span>
                </h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
