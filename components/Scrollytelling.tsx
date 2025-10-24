import React, { useState, useRef, useEffect } from 'react';
import type { ScrollytellingStep } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

interface ScrollytellingProps {
  steps: ScrollytellingStep[];
}

const Scrollytelling: React.FC<ScrollytellingProps> = ({ steps }) => {
  const [activeStepId, setActiveStepId] = useState<string>(steps[0].id);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [sectionRef, isSectionVisible] = useOnScreen<HTMLElement>({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = entry.target.getAttribute('data-step-id');
            if (stepId) {
              setActiveStepId(stepId);
            }
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [steps]);

  const activePhoneContent = steps.find(step => step.id === activeStepId)?.phoneContent;

  return (
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="md:grid md:grid-cols-2 md:gap-20">
          <div className="md:order-2 flex justify-center">
            <div className={`md:sticky md:top-1/4 w-64 md:w-72 transition-all duration-700 ease-in-out ${isSectionVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
               {activePhoneContent}
            </div>
          </div>
          <div className="md:order-1 mt-12 md:mt-0">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => { stepRefs.current[index] = el; }}
                data-step-id={step.id}
                className="min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center"
              >
                <h3 className="text-3xl md:text-4xl font-semibold text-primary-blue leading-tight">{step.title}</h3>
                <p className="mt-4 text-text-gray">{step.description}</p>
              </div>
            ))}
            <div className="h-[30vh]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scrollytelling;
