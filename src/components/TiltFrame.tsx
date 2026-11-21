import React, { useRef, useState } from 'react';

interface TiltFrameProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltFrame({
  children,
  className = '',
  maxTilt = 4.5,
}: TiltFrameProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>(
    'perspective(1100px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px)'
  );
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - y) * (maxTilt * 2);

    setTransformStyle(
      `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) translate3d(0px, -2px, 6px)`
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle(
      'perspective(1100px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px)'
    );
  };

  return (
    <div className={`perspective-stage ${className}`}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transformStyle,
          transition: isHovered
            ? 'transform 140ms cubic-bezier(0.16, 1, 0.3, 1)'
            : 'transform 360ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="tilt-card-surface preserve-3d h-full w-full will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
