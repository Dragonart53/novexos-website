'use client'

export default function HeroMobile() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-cyber-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-cyber-purple/20 via-cyber-black to-cyber-black animate-pulse-slow"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Floating particles CSS */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 scanlines">
        <div className="grain absolute inset-0"></div>
        
        <div className="relative z-20 max-w-md">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-24 h-24 border-4 border-cyber-blue rotate-45 animate-spin-slow">
              <div className="absolute inset-2 border-2 border-cyber-purple"></div>
              <div className="absolute inset-4 border border-cyber-pink"></div>
            </div>
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl font-black mb-4 glitch tracking-tight">
            NOVEX<span className="text-cyber-blue">OS</span>
          </h1>
          
          <p className="text-base sm:text-lg font-body text-gray-300 mb-3 tracking-wider">
            NEXT GENERATION OS
          </p>
          
          <p className="text-sm font-body text-cyber-blue mb-8">
            Built from scratch. Zero compromises.
          </p>
          
          <div className="flex flex-col gap-4 items-center">
            <a
              href="#download"
              className="w-full max-w-xs group relative px-8 py-3 bg-transparent border-2 border-cyber-blue font-display text-base font-bold tracking-wider overflow-hidden active:scale-95 transition-transform"
            >
              <span className="relative z-10 group-active:text-cyber-black transition-colors duration-300">
                DOWNLOAD
              </span>
              <div className="absolute inset-0 bg-cyber-blue transform scale-x-0 group-active:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            
            <a
              href="https://github.com/omegadevelopmentsfr/NovexOS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs group relative px-8 py-3 bg-transparent border-2 border-cyber-pink font-display text-base font-bold tracking-wider overflow-hidden active:scale-95 transition-transform"
            >
              <span className="relative z-10 group-active:text-cyber-black transition-colors duration-300">
                VIEW SOURCE
              </span>
              <div className="absolute inset-0 bg-cyber-pink transform scale-x-0 group-active:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="group">
              <div className="text-2xl font-display font-black text-cyber-blue">
                0.7.1
              </div>
              <div className="text-xs font-body text-gray-400 mt-1">VERSION</div>
            </div>
            <div className="group">
              <div className="text-2xl font-display font-black text-cyber-purple">
                ALPHA
              </div>
              <div className="text-xs font-body text-gray-400 mt-1">STATUS</div>
            </div>
            <div className="group">
              <div className="text-2xl font-display font-black text-cyber-green">
                100%
              </div>
              <div className="text-xs font-body text-gray-400 mt-1">CUSTOM</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyber-black to-transparent z-10"></div>
    </div>
  )
}
