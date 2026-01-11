'use client';

import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisOptions = {
    lerp: 0.1,         
    duration: 1.4,     
    smoothWheel: true, 
    wheelMultiplier: 1, 
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}