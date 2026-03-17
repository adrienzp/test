import { Handshake, Lock, Rocket } from "lucide-react"

const cards = [
  {
    icon: Handshake,
    title: "Conçu avec le terrain",
    description: "Chaque feature a été validée avec de vrais restaurateurs avant d'être développée.",
  },
  {
    icon: Lock,
    title: "Vos données vous appartiennent",
    description: "Export complet à tout moment. Aucun lock-in. Vous partez quand vous voulez.",
  },
  {
    icon: Rocket,
    title: "Lancement progressif",
    description: "Nous démarrons avec un nombre limité de restaurants pour garantir un onboarding parfait.",
  },
]

export function Testimonials() {
  return (
    <section className="py-28 bg-[#f5f2ea]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium text-[#c9a227] uppercase tracking-[0.2em] mb-4">Notre approche</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0c0b09] max-w-xl">
            Conçu avec{" "}
            <span className="font-serif italic text-[#c9a227]">des restaurateurs.</span>
          </h2>
          <p className="mt-4 text-base text-[#0c0b09]/50 max-w-2xl leading-relaxed">
            Burstflow a été pensé en travaillant directement avec des gérants de restaurants. Chaque fonctionnalité répond à un problème réel du terrain. Nous sommes en phase de lancement et cherchons nos premiers partenaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white border border-[#0c0b09]/8 rounded-2xl p-8 hover:border-[#c9a227]/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#c9a227]/10 flex items-center justify-center mb-6">
                <card.icon className="h-5 w-5 text-[#c9a227]" />
              </div>
              <h3 className="font-semibold text-[#0c0b09] mb-2">{card.title}</h3>
              <p className="text-sm text-[#0c0b09]/50 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
