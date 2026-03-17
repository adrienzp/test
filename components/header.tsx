"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "/services", label: "Services" },
    { href: "/fonctionnalites", label: "Fonctionnalités" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#0c0b09]/92 backdrop-blur-md border-b border-[#c9a227]/10"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-sm text-[#f5f5f0]/50 hover:text-[#f5f5f0] transition-colors tracking-wide">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button size="sm" className="bg-[#c9a227] hover:bg-[#b8922a] text-[#0c0b09] font-semibold rounded-lg text-xs px-5 h-9">
                Demander un devis
              </Button>
            </Link>
          </div>

          <button className="md:hidden p-2 text-[#f5f5f0]/70" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#f5f5f0]/8">
            <div className="flex flex-col gap-5">
              {links.map((l) => (
                <Link key={l.href} href={l.href}
                  className="text-sm text-[#f5f5f0]/60 hover:text-[#f5f5f0] transition-colors"
                  onClick={() => setIsMenuOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#f5f5f0]/8">
                <Link href="/contact">
                  <Button size="sm" className="w-full bg-[#c9a227] hover:bg-[#b8922a] text-[#0c0b09] font-semibold rounded-lg">
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
