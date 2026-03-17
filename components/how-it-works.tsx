import { Settings, CheckCircle2, Rocket } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Settings,
    title: "On configure tout",
    description: "Vous nous envoyez votre menu, vos horaires et vos photos. On s'occupe du reste. Aucune compétence technique requise.",
  },
  {
    number: "2",
    icon: CheckCircle2,
    title: "Vous validez",
    description: "On vous présente votre site, votre menu QR et votre tableau de bord. Vous donnez le feu vert. Délai moyen : 5 jours.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Ça tourne tout seul",
    description: "Les SMS partent automatiquement, les réservations entrent, vos clients sont trackés. Vous vous concentrez sur votre cuisine.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-28 bg-[#0c0b09]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium text-[#c9a227] uppercase tracking-[0.2em] mb-4">Processus</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f5f5f0]">
            Comment ça marche ?
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 h-px hidden md:block"
            style={{ backgroundImage: "repeating-linear-gradient(to right, rgba(201,162,39,0.3) 0, rgba(201,162,39,0.3) 8px, transparent 8px, transparent 18px)" }} />

          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Number circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#0c0b09] border border-[#c9a227]/30 flex items-center justify-center mb-6">
                <span className="font-serif text-2xl text-[#c9a227]">{step.number}</span>
              </div>

              <div className="w-10 h-10 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mb-4">
                <step.icon className="h-5 w-5 text-[#c9a227]" />
              </div>

              <h3 className="text-lg font-semibold text-[#f5f5f0] mb-2">{step.title}</h3>
              <p className="text-sm text-[#f5f5f0]/45 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
