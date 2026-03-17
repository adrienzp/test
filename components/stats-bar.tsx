import { Phone, Euro, Clock, ShieldCheck } from "lucide-react"

const stats = [
  { icon: Phone, value: "8–12", label: "appels manqués/soir en moyenne" },
  { icon: Euro, value: "30€", label: "panier moyen en restauration" },
  { icon: Clock, value: "7j", label: "pour être opérationnel" },
  { icon: ShieldCheck, value: "30j", label: "remboursé si pas convaincu" },
]

export function StatsBar() {
  return (
    <section className="border-y border-[#c9a227]/12 bg-[#0f0e0b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#f5f5f0]/6">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 py-5 px-6 first:pl-0 last:pr-0">
              <stat.icon className="h-4 w-4 text-[#c9a227]/60 flex-shrink-0" />
              <div>
                <p className="text-xl font-bold text-[#f5f5f0] font-serif tracking-tight">{stat.value}</p>
                <p className="text-xs text-[#f5f5f0]/40 mt-0.5 leading-tight">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
