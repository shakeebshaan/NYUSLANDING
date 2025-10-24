
import React from 'react';
import Scrollytelling from './Scrollytelling';
import { PhoneMockup } from './Icons';
import type { ScrollytellingStep } from '../types';

const ImageInPhone: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="w-full h-full flex items-center justify-center p-6 bg-gray-100">
        <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
    </div>
);

const steps: ScrollytellingStep[] = [
  {
    id: 'qr-code',
    title: 'Scan to Get Started',
    description: 'Simply point your camera at the QR code. It\'s the fastest way to get the NYUS app on your device and begin your journey to better fitness.',
    phoneContent: <PhoneMockup><ImageInPhone src="https://cdn.prod.website-files.com/64031c58bc443d09034abf4b/6514501c16ecb096b20701dc_app-qr.jpg" alt="QR Code for NYUS App" /></PhoneMockup>,
  },
  {
    id: 'google-play',
    title: 'Available on Google Play',
    description: 'Android user? We\'ve got you covered. Download the NYUS app from the Google Play Store to access all features on the go.',
    phoneContent: <PhoneMockup><ImageInPhone src="https://cdn.prod.website-files.com/64031c58bc443d09034abf4b/65144f926f1e360eb8835962_app-google-play.svg" alt="Google Play Store" /></PhoneMockup>,
  },
  {
    id: 'app-store',
    title: 'Download on the App Store',
    description: 'Get the NYUS app on your iPhone or iPad. Head over to the Apple App Store and step up your fitness game today.',
    phoneContent: <PhoneMockup><ImageInPhone src="https://cdn.prod.website-files.com/64031c58bc443d09034abf4b/65144f8ecf9d72aa76b2238b_app-app-store.svg" alt="Apple App Store" /></PhoneMockup>,
  },
];

const FeatureShowcase1: React.FC = () => {
  return <Scrollytelling steps={steps} />;
};

export default FeatureShowcase1;
