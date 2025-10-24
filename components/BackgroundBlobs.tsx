import React, { useState, useEffect, useRef } from 'react';

const BackgroundBlobs: React.FC = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [idleOffset, setIdleOffset] = useState({ x: 0, y: 0 });
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        setScrollPos(window.scrollY);
        setIsScrolling(true);
        
        // Clear existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        // Set new timeout to detect when scrolling stops
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Idle roaming animation
  useEffect(() => {
    if (!isScrolling) {
      let startTime: number | null = null;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        // Gentle sinusoidal movement
        const x = Math.sin(elapsed / 2000) * 20;
        const y = Math.cos(elapsed / 2500) * 15;
        
        setIdleOffset({ x, y });
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    } else {
      // Reset idle offset when scrolling
      setIdleOffset({ x: 0, y: 0 });
    }
  }, [isScrolling]);

  // Calculate blob positions based on scroll
  const getBlob1Style = () => {
    const baseTop = scrollPos + window.innerHeight * 0.25;
    return {
      top: `${baseTop + idleOffset.y}px`,
      left: `${25 + idleOffset.x * 0.5}%`,
      transform: isScrolling 
        ? 'scale(1)' 
        : `scale(${1 + Math.sin(Date.now() / 3000) * 0.05})`,
      transition: isScrolling 
        ? 'top 1s ease-out, left 1s ease-out' 
        : 'transform 2s ease-in-out'
    };
  };

  const getBlob2Style = () => {
    const baseTop = scrollPos + window.innerHeight * 0.5;
    return {
      top: `${baseTop + idleOffset.y * 1.5}px`,
      right: `${25 - idleOffset.x * 0.3}%`,
      transform: isScrolling 
        ? 'scale(1)' 
        : `scale(${1 + Math.cos(Date.now() / 3500) * 0.08})`,
      transition: isScrolling 
        ? 'top 1.2s ease-out, right 1.2s ease-out' 
        : 'transform 2.5s ease-in-out'
    };
  };

  const getBlob3Style = () => {
    const baseTop = scrollPos + window.innerHeight * 0.75;
    return {
      top: `${baseTop - idleOffset.y * 0.8}px`,
      left: `${35 + idleOffset.x * 0.7}%`,
      transform: isScrolling 
        ? 'scale(1)' 
        : `scale(${1 + Math.sin(Date.now() / 4000) * 0.06})`,
      transition: isScrolling 
        ? 'top 1.1s ease-out, left 1.1s ease-out' 
        : 'transform 2.2s ease-in-out'
    };
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Blob 1 - Blue */}
      <div 
        className="absolute w-96 h-96 bg-light-blue rounded-full opacity-60 filter blur-3xl"
        style={getBlob1Style()}
      ></div>
      
      {/* Blob 2 - Purple */}
      <div 
        className="absolute w-[28rem] h-[28rem] bg-secondary-purple rounded-full opacity-50 filter blur-3xl"
        style={getBlob2Style()}
      ></div>
      
      {/* Blob 3 - Brand */}
      <div 
        className="absolute w-80 h-80 bg-primary-brand rounded-full opacity-40 filter blur-3xl"
        style={getBlob3Style()}
      ></div>
    </div>
  );
};

export default BackgroundBlobs;
