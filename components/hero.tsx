"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0c0b09]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#c9a227]/6 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#c9a227]/3 blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              <span className="text-xs tracking-[0.15em] uppercase text-[#f5f5f0]/50 font-medium">
                Ouverture partenaires fondateurs
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-[#f5f5f0] font-bold">
              Arrêtez de perdre
              <br />
              <span className="font-serif italic text-[#c9a227]">des réservations.</span>
            </h1>

            <div className="mt-8 mb-8 w-12 h-px bg-[#c9a227]/40" />

            <p className="text-lg text-[#f5f5f0]/55 leading-relaxed max-w-xl">
              Chaque soir de rush, un restaurant rate entre 8 et 12 appels.
              Burstflow répond à votre place en 10 secondes —{" "}
              <span className="text-[#f5f5f0]/80">SMS automatique, réservation confirmée, table attribuée.</span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-[#c9a227] hover:bg-[#b8922a] text-[#0c0b09] font-semibold px-7 rounded-xl h-12 text-sm">
                  Demander une démo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tarifs">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-[#f5f5f0]/70 border-[#f5f5f0]/12 hover:bg-[#f5f5f0]/5 hover:text-[#f5f5f0] rounded-xl h-12 text-sm">
                  Voir les tarifs
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {["Sans engagement", "Opérationnel en 7 jours", "Remboursé si insatisfait"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs text-[#f5f5f0]/40">
                  <span className="w-1 h-1 rounded-full bg-[#c9a227]/60" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[#c9a227]/5 blur-2xl" />
            <div className="relative bg-[#161410] border border-[#c9a227]/15 rounded-2xl overflow-hidden">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" />
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-[#f5f5f0]/30 tracking-wide">SMS automatique</span>
                  <span className="text-xs text-[#f5f5f0]/30">Jeudi 12 déc. · 19h47</span>
                </div>
                <div className="bg-[#1a3a28]/60 border border-[#40916c]/25 rounded-xl p-5 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#40916c]/20 flex items-center justify-center flex-shrink-0 text-sm">📱</div>
                    <div>
                      <p className="text-xs font-semibold text-[#f5f5f0]/80 mb-1">Le Petit Marché</p>
                      <p className="text-sm text-[#f5f5f0]/60 leading-relaxed">
                        Vous avez essayé de nous appeler. Réservez en 30 secondes :
                        <span className="text-[#c9a227]/80 ml-1">burstflow.fr/r/lpm</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-xs text-[#40916c]/70">Livré · SMS</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 h-px bg-[#f5f5f0]/8" />
                  <span className="text-xs text-[#f5f5f0]/30">3 minutes après</span>
                  <div className="flex-1 h-px bg-[#f5f5f0]/8" />
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#40916c]/10 border border-[#40916c]/20 rounded-lg mb-8">
                  <span className="text-[#40916c] text-sm">✓</span>
                  <span className="text-sm text-[#f5f5f0]/70">Table 4 · 2 pers · Vendredi 20h30</span>
                </div>
                <div className="pt-6 border-t border-[#f5f5f0]/8 flex items-baseline gap-3">
                  <span className="font-serif text-4xl font-bold text-[#c9a227]">+38%</span>
                  <span className="text-sm text-[#f5f5f0]/40 leading-snug">
                    de réservations récupérables<br />selon les données secteur
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
