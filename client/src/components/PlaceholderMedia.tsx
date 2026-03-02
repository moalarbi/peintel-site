import React from 'react';

interface PlaceholderMediaProps {
  width?: number;
  height?: number;
  aspectRatio?: 'hero-desktop' | 'hero-mobile' | 'service-card' | 'before-after' | 'projects' | 'square';
  label?: string;
  className?: string;
}

const aspectRatios: Record<string, { width: number; height: number }> = {
  'hero-desktop': { width: 1600, height: 900 },
  'hero-mobile': { width: 1080, height: 1350 },
  'service-card': { width: 800, height: 600 },
  'before-after': { width: 1200, height: 900 },
  'projects': { width: 1400, height: 1000 },
  'square': { width: 400, height: 400 },
};

export function PlaceholderMedia({
  width,
  height,
  aspectRatio = 'square',
  label,
  className = '',
}: PlaceholderMediaProps) {
  const dimensions = width && height ? { width, height } : aspectRatios[aspectRatio];
  const paddingBottom = (dimensions.height / dimensions.width) * 100;

  return (
    <div
      className={`placeholder-media relative w-full overflow-hidden rounded-lg ${className}`}
      style={{
        paddingBottom: `${paddingBottom}%`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="text-center">
          <div className="text-blue-300 dark:text-blue-700 text-sm font-medium">
            {label ? `[${label}]` : `[${dimensions.width}x${dimensions.height}]`}
          </div>
        </div>
      </div>
    </div>
  );
}
