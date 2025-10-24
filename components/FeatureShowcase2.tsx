
import React from 'react';
import Scrollytelling from './Scrollytelling';
import { PhoneMockup } from './Icons';
import type { ScrollytellingStep } from '../types';

const steps: ScrollytellingStep[] = [
  {
    id: 'lock',
    title: 'Instant card lock',
    description: "Lock your card with one tap, whether you think it's misplaced, lost or stolen.",
    phoneContent: <PhoneMockup content="cardLock" />,
  },
  {
    id: 'alerts',
    title: 'Real-time alerts',
    description: 'Turn on instant push notifications to stay on top of your account activity.',
    phoneContent: <PhoneMockup content="lockScreen" />,
  },
];

const FeatureShowcase2: React.FC = () => {
  return <Scrollytelling steps={steps} />;
};

export default FeatureShowcase2;
