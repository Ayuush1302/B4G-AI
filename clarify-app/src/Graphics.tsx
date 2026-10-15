import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  theme?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ 
  width = 130, 
  height = 32, 
  theme = 'dark',
  className = '', 
  'aria-label': ariaLabel = 'B4G AI', 
  ...props 
}) => {
  const textColor = theme === 'light' ? '#ffffff' : 'currentColor';

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="2260 1515 2355 535" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      role="img" 
      aria-label={ariaLabel} 
      className={className} 
      {...props}
    >
      {/* Brand Yellow Dot */}
      <path 
        d="M3849.25 1917H3783.75C3769.53 1917 3758 1928.53 3758 1942.75V2008.25C3758 2022.47 3769.53 2034 3783.75 2034H3849.25C3863.47 2034 3875 2022.47 3875 2008.25V1942.75C3875 1928.53 3863.47 1917 3849.25 1917Z" 
        fill="#FFC83D"
      />
      {/* 'B' */}
      <path 
        d="M2264.5 2034V1530H2459.1C2580.2 1530 2637.6 1587.4 2637.6 1665.8C2637.6 1711.3 2618 1747.7 2577.4 1770.1C2632 1791.8 2658.6 1835.2 2658.6 1889.8C2658.6 1975.9 2601.2 2034 2480.1 2034H2264.5ZM2342.2 1966.8H2480.8C2549.4 1966.8 2580.2 1938.1 2580.2 1888.4C2580.2 1838.7 2549.4 1810 2480.8 1810H2342.2V1966.8ZM2342.2 1744.2H2462.6C2531.2 1744.2 2561.3 1715.5 2561.3 1670.7C2561.3 1625.9 2531.2 1597.2 2462.6 1597.2H2342.2V1744.2Z" 
        fill={textColor}
      />
      {/* '4' */}
      <path 
        d="M2750 1923.4V1850.6L2993.6 1530H3077.6V1855.5H3146.9V1923.4H3077.6V2034H2999.9V1923.4H2750ZM2825.6 1855.5H3000.6V1621.7L2825.6 1855.5Z" 
        fill={textColor}
      />
      {/* 'G' */}
      <path 
        d="M3427.2 2042.4C3271.8 2042.4 3188.5 1922.7 3188.5 1782C3188.5 1641.3 3271.8 1521.6 3432.8 1521.6C3563 1521.6 3644.2 1597.9 3661.7 1701.5H3581.9C3568.6 1637.8 3514.7 1592.3 3432.8 1592.3C3320.1 1592.3 3269.7 1679.1 3269.7 1782C3269.7 1884.9 3320.1 1971.7 3432.8 1971.7C3523.1 1971.7 3572.8 1916.4 3588.9 1835.2H3411.8V1768.7H3667.3V2034H3605V1945.1C3573.5 2005.3 3517.5 2042.4 3427.2 2042.4Z" 
        fill={textColor}
      />
      {/* 'A' */}
      <path 
        d="M4342.5 2034L4293.5 1904.5H4066L4017 2034H3935.8L4136 1530H4224.2L4425.8 2034H4342.5ZM4091.9 1836.6H4267.6L4180.1 1605.6L4091.9 1836.6Z" 
        fill={textColor}
      />
      {/* 'I' */}
      <path 
        d="M4532.5 2034V1530H4610.2V2034H4532.5Z" 
        fill={textColor}
      />
    </svg>
  );
};

export const FourMonolineGraphic: React.FC<React.SVGProps<SVGSVGElement> & { strokeColor?: string; strokeWidth?: number | string }> = ({ 
  strokeColor = '#EFEDEB', 
  strokeWidth = 1.5,
  className = '', 
  viewBox = "220 200 420 450",
  ...props 
}) => {
  return (
    <svg 
      viewBox={viewBox} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      role="img" 
      aria-hidden="true" 
      className={className} 
      {...props}
    >
      <path 
        d="M489 629 L489 229 L249 469 L609 469" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth} 
        vectorEffect="non-scaling-stroke" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit={10} 
      />
    </svg>
  );
};

export const HeroGraphic: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = '100%', height = '100%', className = '', ...props }) => {
  const strokeWidth = 1;
  const fillYellow = '#fbe57e';
  const cols = 12;
  const rows = 8;
  const cellW = 100 / cols;
  const cellH = 100 / rows;

  const noise = (x: number, y: number, seed: number) => {
    const n = Math.sin(x * 12.9898 + y * 78.233 + seed) * 43758.5453;
    return n - Math.floor(n);
  };

  const cells = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const cx = x * cellW + cellW / 2;
      const cy = y * cellH + cellH / 2;
      const dist = Math.sqrt(Math.pow(cx - 50, 2) + Math.pow(cy - 50, 2));
      const maxDist = Math.sqrt(50*50 + 50*50);
      const clarity = 1 - (dist / maxDist);
      const offsetX = (noise(x, y, 1) - 0.5) * cellW * 0.6 * (1 - clarity);
      const offsetY = (noise(x, y, 2) - 0.5) * cellH * 0.6 * (1 - clarity);
      const rectW = cellW * 0.7;
      const rectH = cellH * 0.7;
      const rot = (noise(x, y, 3) - 0.5) * 30 * (1 - clarity);

      cells.push(
        <g key={`${x}-${y}`} transform={`translate(${cx + offsetX}, ${cy + offsetY}) rotate(${rot})`}>
          <rect x={-rectW/2} y={-rectH/2} width={rectW} height={rectH} stroke="currentColor" strokeWidth={`${strokeWidth}%`} strokeOpacity={0.4 + clarity * 0.4} fill="none" rx="1%" ry="1%" />
          {clarity > 0.6 && noise(x, y, 4) > 0.7 && (
            <circle r={`${Math.max(0.5, clarity * 1.5)}%`} fill={fillYellow} fillOpacity={clarity} />
          )}
        </g>
      );
    }
  }

  return (
    <svg width={width} height={height} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
      <defs>
        <filter id="subtleBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feBlend in="SourceGraphic" in2="blur" mode="normal" />
        </filter>
      </defs>
      <g stroke="currentColor" strokeWidth="0.15%" strokeOpacity="0.15">
        {[...Array(cols + 1)].map((_, i) => <line key={i} x1={i * cellW} y1="0" x2={i * cellW} y2="100" />)}
        {[...Array(rows + 1)].map((_, i) => <line key={i} x1="0" y1={i * cellH} x2="100" y2={i * cellH} />)}
      </g>
      <g filter="url(#subtleBlur)">{cells}</g>
      <circle cx="50" cy="50" r="18%" stroke="currentColor" strokeWidth="1.5%" strokeOpacity="0.8" fill="none" />
      <circle cx="50" cy="50" r="6%" fill={fillYellow} fillOpacity="0.9" />
      <g stroke="currentColor" strokeWidth="0.5%" strokeOpacity="0.6">
        <line x1="50" y1="38%" x2="50" y2="44%" />
        <line x1="50" y1="56%" x2="50" y2="62%" />
        <line x1="38%" y1="50" x2="44%" y2="50" />
        <line x1="56%" y1="50" x2="62%" y2="50" />
      </g>
    </svg>
  );
};

export const DotMotif: React.FC<React.SVGProps<SVGSVGElement> & { size?: number | string; fillColor?: string }> = ({ 
  size = 16, 
  fillColor = 'var(--color-brand-primary, #fbe57e)', 
  className = '',
  'aria-hidden': ariaHidden = 'true',
  ...props 
}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden={ariaHidden} {...props}>
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth={1.5} fill="none" />
    <circle cx="8" cy="8" r="3.5" fill={fillColor} />
  </svg>
);

const fakeNames = ['AURA', 'NEXUS', 'PRIME', 'VOID', 'FLUX', 'ZENITH', 'CORE'];
const letterPaths: Record<string, string> = {
  A: 'M2 14 L7 2 L12 14 M4 8 L10 8', U: 'M2 2 V12 C2 14 4 14 6 14', R: 'M2 2 V14 M2 2 H8 C10 2 11 4 11 6 C11 8 10 10 8 10 M8 10 L12 14',
  N: 'M2 14 V2 L12 14 V2', X: 'M2 2 L12 14 M12 2 L2 14', P: 'M2 2 V14 M2 2 H10 C12 2 13 4 13 6 C13 8 12 10 10 10',
  I: 'M7 2 V14', M: 'M2 14 V2 L7 7 L12 2 V14', E: 'M12 2 H2 V14 M2 8 H10',
  O: 'M6 2 C4 2 2 4 2 6 V10 C2 12 4 14 6 14 H10 C12 14 14 12 14 10 V6 C14 4 12 2 10 2 H6',
  V: 'M2 2 L7 14 L12 2', Z: 'M2 2 H12 L4 14 H14', H: 'M2 2 V14 M12 2 V14 M2 8 H12',
  T: 'M2 2 H12 M7 2 V14', D: 'M2 2 V14 M2 2 C6 2 10 4 10 8 C10 12 6 14 2 14',
  F: 'M12 2 H2 V14 M2 8 H8', L: 'M2 2 V14 H10', C: 'M12 2 H4 C2 2 2 4 2 6 V10 C2 12 4 14 6 14',
  S: 'M12 2 H4 C2 2 2 4 2 6 C2 8 4 10 6 10 M6 10 C8 10 10 12 12 12 V14 H4',
  Y: 'M2 2 L7 8 L12 2 M7 8 V14', Q: 'M6 2 C4 2 2 4 2 6 V10 C2 12 4 14 6 14 H10 C12 14 14 12 14 10 V6 C14 4 12 2 10 2 H6 M10 10 L14 14',
  G: 'M12 2 H6 C4 2 2 4 2 6 V10 C2 12 4 14 6 14 H10 V10', K: 'M2 2 V14 M2 8 L12 2 M2 8 L12 14', W: 'M2 2 V14 M6 14 L10 2 V14',
};
const getWordPath = (word: string, letterWidth = 14, gap = 2) => {
  let x = 0; let paths = '';
  for (const char of word) {
    const path = letterPaths[char];
    if (path) {
      paths += path.replace(/([MLHVCSQTAZ])([^MLHVCSQTAZ]*)/g, (_, cmd, coords) => {
        if (['M','L','C','S','Q','T'].includes(cmd)) {
          const nums = coords.trim().split(/\s+/).map(Number);
          return `${cmd} ${nums.map((n: number, i: number) => i % 2 === 0 ? n + x : n).join(' ')}`;
        }
        return `${cmd}${coords}`;
      }) + ' ';
    }
    x += letterWidth + gap;
  }
  return paths.trim();
};

export const ClientLogos: React.FC<{ className?: string; names?: string[] }> = ({ className = '', names = fakeNames }) => (
  <div className={`flex items-center gap-16 ${className}`} role="list" aria-label="Client logos">
    {names.map((name) => {
      const w = name.length * 16 + 4;
      return (
        <svg key={name} width={w} height={16} viewBox={`0 0 ${w} 16`} fill="none" xmlns="http://www.w3.org/2000/svg" role="listitem" aria-label={name} style={{ flexShrink: 0 }}>
          <path d={getWordPath(name)} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    })}
  </div>
);
