import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHoveredButton, setIsHoveredButton] = useState(false);
  const [isHoveredLink, setIsHoveredLink] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      const isTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Target detection
      const target = e.target as HTMLElement | null;
      if (target) {
        const isBtn = !!target.closest('button, [role="button"], input[type="submit"]');
        const isLnk = !!target.closest('a, [data-cursor="link"]');
        setIsHoveredButton(isBtn);
        setIsHoveredLink(isLnk);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth trail animation
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrameId: number;

    const animateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    animationFrameId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="custom-cursor-element pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer subtle follower ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,background-color,border-color] duration-150 ease-out ${
          isHoveredButton
            ? 'h-12 w-12 border-black/80 bg-black/10'
            : isHoveredLink
            ? 'h-9 w-9 border-black/60 bg-transparent'
            : isClicking
            ? 'h-6 w-6 border-black/80 bg-black/20'
            : 'h-8 w-8 border-black/30 bg-transparent'
        }`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
        }}
      />

      {/* Center sharp dot */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-black transition-transform duration-75 ${
          isHoveredButton ? 'scale-150' : isHoveredLink ? 'scale-125' : isClicking ? 'scale-75' : 'scale-100'
        } h-1.5 w-1.5`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
};
