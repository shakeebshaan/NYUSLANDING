
import React from 'react';
import { GooglePlayIcon, AppStoreIcon } from './Icons';

const CtaBanners: React.FC = () => {
  return (
    <>
      <section className="bg-primary-brand text-white py-12 sm:py-14 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 sm:gap-8">
            <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Get started</h2>
                <p className="mt-2 text-base sm:text-lg opacity-80">Download and start in as little as 2 minutes</p>
            </div>
            <button className="bg-white text-primary-dark font-bold rounded-xl px-6 sm:px-8 py-2.5 sm:py-3 hover:scale-105 transition-transform flex-shrink-0 text-sm sm:text-base">
                DOWNLOAD NOW
            </button>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4">
              <div 
                  className="relative p-6 sm:p-8 md:p-12 rounded-2xl bg-cover bg-center overflow-hidden min-h-[240px] sm:h-64 flex flex-col justify-center items-center text-center"
                  style={{ backgroundImage: "url('https://picsum.photos/seed/clothes/1200/400')" }}
                >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative text-white">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">It's time Show</h3>
                    <p className="mt-2 text-sm sm:text-base">Download the NYUS Mobile app, today.</p>
                    <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 scale-90 sm:scale-100">
                        <a href="#" className="hover:scale-105 transition-transform"><GooglePlayIcon /></a>
                        <a href="#" className="hover:scale-105 transition-transform"><AppStoreIcon /></a>
                    </div>
                </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default CtaBanners;
