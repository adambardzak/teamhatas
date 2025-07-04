import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  timespan?: string;
  clientName?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'PŘED',
  afterLabel = 'PO',
  timespan,
  clientName,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      isDragging.current = false;
    };
    
    document.addEventListener('mouseup', handleMouseUpGlobal);
    return () => {
      document.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, []);

  return (
    <div className="relative group">
      {/* Client name and timespan - only shown if provided */}
      {(clientName || timespan) && (
        <div className="absolute -top-12 left-0 right-0 flex justify-between z-10">
          {clientName && (
            <span className="text-white font-bold uppercase bg-zinc-800 px-4 py-2 border-l-4 border-primary">
              {clientName}
            </span>
          )}
          {timespan && (
            <span className="text-white font-bold bg-primary px-4 py-2 text-sm uppercase tracking-wider">
              {timespan}
            </span>
          )}
        </div>
      )}
      
      <div 
        className="relative w-full h-full overflow-hidden shadow-lg cursor-ew-resize border-2 border-zinc-800"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* Before Image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative w-full h-full">
            {/* Actual before image */}
            {beforeImage ? (
              <div className="relative w-full h-full">
                <Image
                  src={beforeImage}
                  fill
                  alt="Before transformation"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                <span className="text-lg text-gray-500">Obrázek nenalezen</span>
              </div>
            )}
            <div className="absolute top-5 left-5 bg-zinc-900 text-white text-xs px-3 py-2 uppercase tracking-wider font-bold">
              {beforeLabel}
            </div>
          </div>
        </div>
        
        {/* After Image (clipped) */}
        <div 
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: `${100 / (sliderPosition/100)}%` }}>
            {/* Actual after image */}
            {afterImage ? (
              <div className="relative w-full h-full">
                <Image
                  src={afterImage}
                  fill
                  alt="After transformation"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-full bg-zinc-700 flex items-center justify-center">
                <span className="text-lg text-gray-400">Obrázek nenalezen</span>
              </div>
            )}
            <div className="absolute top-5 right-5 bg-primary text-white text-xs px-3 py-2 uppercase tracking-wider font-bold">
              {afterLabel}
            </div>
          </div>
        </div>
        
        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)] cursor-ew-resize z-10"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-white bg-primary shadow-lg flex items-center justify-center rounded-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
        
        {/* Timeline bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-zinc-800 z-10">
          <div className="h-full bg-gradient-to-r from-zinc-800 via-primary to-accent" style={{ width: `${sliderPosition}%` }}></div>
          <div className="absolute bottom-full left-0 mb-1 ml-1">
            <span className="text-xs text-white bg-zinc-900 px-1 py-0.5 uppercase tracking-wider font-bold">
              Den 1
            </span>
          </div>
          {timespan && (
            <div className="absolute bottom-full right-0 mb-1 mr-1">
              <span className="text-xs text-white bg-primary px-1 py-0.5 uppercase tracking-wider font-bold">
                {timespan}
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-3 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs bg-black/70 text-white px-3 py-1 uppercase tracking-wider">
          Posunutím zobrazíte transformaci
        </span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;