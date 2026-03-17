import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-32 bg-[#0c0b09] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a227]/6 blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-medium text-[#c9a227] uppercase tracking-[0.2em] mb-6">Prêt ?</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f5f5f0] leading-tight mb-6">
          Votre prochain vendredi soir{" "}
          <span className="font-serif italic text-[#c9a227]">avec zéro réservation perdue.</span>
        </h2>
        <p className="text-base text-[#f5f5f0]/45 max-w-xl mx-auto leading-relaxed mb-10">
          Faites partie des premiers restaurants à adopter Burstflow et bénéficiez d'un accompagnement personnalisé.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact">
            <Button size="lg" className="bg-[#c9a227] hover:bg-[#b8922a] text-[#0c0b09] font-semibold rounded-xl px-8 h-12">
              Demander une démo gratuite
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/tarifs">
            <Button size="lg" variant="outline" className="bg-transparent text-[#f5f5f0]/70 border-[#f5f5f0]/15 hover:bg-[#f5f5f0]/5 hover:text-[#f5f5f0] rounded-xl h-12">
              Voir les tarifs
            </Button>
          </Link>
        </div>
        <p className="mt-6 text-xs text-[#f5f5f0]/30">
          Réponse sous 2h en semaine · Démo en 30 min · Aucune carte bancaire requise
        </p>
      </div>
    </section>
  )
}
