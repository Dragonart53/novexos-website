// Modern cyber-tech SVG icons for NovexOS features

export const CustomKernelIcon = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* CPU/Chip icon with cyber details */}
    <rect x="16" y="16" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="22" y="22" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
    
    {/* CPU pins */}
    <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="2"/>
    <line x1="8" y1="28" x2="16" y2="28" stroke="currentColor" strokeWidth="2"/>
    <line x1="8" y1="36" x2="16" y2="36" stroke="currentColor" strokeWidth="2"/>
    <line x1="8" y1="44" x2="16" y2="44" stroke="currentColor" strokeWidth="2"/>
    
    <line x1="48" y1="20" x2="56" y2="20" stroke="currentColor" strokeWidth="2"/>
    <line x1="48" y1="28" x2="56" y2="28" stroke="currentColor" strokeWidth="2"/>
    <line x1="48" y1="36" x2="56" y2="36" stroke="currentColor" strokeWidth="2"/>
    <line x1="48" y1="44" x2="56" y2="44" stroke="currentColor" strokeWidth="2"/>
    
    <line x1="20" y1="8" x2="20" y2="16" stroke="currentColor" strokeWidth="2"/>
    <line x1="28" y1="8" x2="28" y2="16" stroke="currentColor" strokeWidth="2"/>
    <line x1="36" y1="8" x2="36" y2="16" stroke="currentColor" strokeWidth="2"/>
    <line x1="44" y1="8" x2="44" y2="16" stroke="currentColor" strokeWidth="2"/>
    
    <line x1="20" y1="48" x2="20" y2="56" stroke="currentColor" strokeWidth="2"/>
    <line x1="28" y1="48" x2="28" y2="56" stroke="currentColor" strokeWidth="2"/>
    <line x1="36" y1="48" x2="36" y2="56" stroke="currentColor" strokeWidth="2"/>
    <line x1="44" y1="48" x2="44" y2="56" stroke="currentColor" strokeWidth="2"/>
    
    {/* Central pattern */}
    <circle cx="32" cy="32" r="4" fill="currentColor"/>
    <line x1="28" y1="32" x2="22" y2="32" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="36" y1="32" x2="42" y2="32" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="32" y1="28" x2="32" y2="22" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="32" y1="36" x2="32" y2="42" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const SecureIcon = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield with lock */}
    <path d="M32 8L16 16V28C16 40 24 48 32 56C40 48 48 40 48 28V16L32 8Z" 
          stroke="currentColor" strokeWidth="2" fill="none"/>
    
    {/* Lock */}
    <rect x="26" y="30" width="12" height="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M28 30V26C28 23.79 29.79 22 32 22C34.21 22 36 23.79 36 26V30" 
          stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="35" r="1.5" fill="currentColor"/>
    
    {/* Corner accents */}
    <line x1="20" y1="18" x2="24" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
    <line x1="40" y1="18" x2="44" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
  </svg>
)

export const PerformanceIcon = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Speedometer/gauge */}
    <circle cx="32" cy="36" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="36" r="14" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none"/>
    
    {/* Gauge marks */}
    <line x1="18" y1="28" x2="20" y2="30" stroke="currentColor" strokeWidth="2"/>
    <line x1="14" y1="36" x2="18" y2="36" stroke="currentColor" strokeWidth="2"/>
    <line x1="18" y1="44" x2="20" y2="42" stroke="currentColor" strokeWidth="2"/>
    
    <line x1="46" y1="28" x2="44" y2="30" stroke="currentColor" strokeWidth="2"/>
    <line x1="50" y1="36" x2="46" y2="36" stroke="currentColor" strokeWidth="2"/>
    <line x1="46" y1="44" x2="44" y2="42" stroke="currentColor" strokeWidth="2"/>
    
    <line x1="32" y1="18" x2="32" y2="22" stroke="currentColor" strokeWidth="2"/>
    
    {/* Needle pointing to max speed */}
    <line x1="32" y1="36" x2="42" y2="26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="36" r="3" fill="currentColor"/>
    
    {/* Lightning bolts for speed */}
    <path d="M28 10L26 14H30L28 18" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
    <path d="M36 10L34 14H38L36 18" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
  </svg>
)

export const OpenSourceIcon = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Code brackets with git-like branches */}
    <path d="M20 16L12 32L20 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 16L52 32L44 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Git branch visualization */}
    <circle cx="32" cy="20" r="3" fill="currentColor"/>
    <line x1="32" y1="23" x2="32" y2="28" stroke="currentColor" strokeWidth="2"/>
    
    <circle cx="26" cy="32" r="3" fill="currentColor"/>
    <circle cx="38" cy="32" r="3" fill="currentColor"/>
    
    <line x1="32" y1="28" x2="26" y2="32" stroke="currentColor" strokeWidth="2"/>
    <line x1="32" y1="28" x2="38" y2="32" stroke="currentColor" strokeWidth="2"/>
    
    <line x1="26" y1="35" x2="32" y2="41" stroke="currentColor" strokeWidth="2"/>
    <line x1="38" y1="35" x2="32" y2="41" stroke="currentColor" strokeWidth="2"/>
    
    <circle cx="32" cy="44" r="3" fill="currentColor"/>
    
    {/* Terminal cursor */}
    <rect x="28" y="54" width="8" height="2" fill="currentColor" opacity="0.6"/>
  </svg>
)
