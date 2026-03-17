import Link from "next/link"

export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {/* Atom Icon in Rounded Square */}
      <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          className="w-5 h-5 text-background"
        >
          {/* Central nucleus */}
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
          {/* Orbital 1 - horizontal ellipse */}
          <ellipse cx="12" cy="12" rx="8" ry="3" />
          {/* Orbital 2 - tilted ellipse */}
          <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)" />
          {/* Orbital 3 - tilted ellipse */}
          <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(-60 12 12)" />
        </svg>
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight">burstflow</span>
      )}
    </Link>
  )
}

export function LogoLight({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {/* Atom Icon in Rounded Square */}
      <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          className="w-5 h-5 text-foreground"
        >
          {/* Central nucleus */}
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
          {/* Orbital 1 - horizontal ellipse */}
          <ellipse cx="12" cy="12" rx="8" ry="3" />
          {/* Orbital 2 - tilted ellipse */}
          <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)" />
          {/* Orbital 3 - tilted ellipse */}
          <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(-60 12 12)" />
        </svg>
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-background">burstflow</span>
      )}
    </Link>
  )
}
