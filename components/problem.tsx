import { PhoneOff, Armchair, Banknote } from "lucide-react"

export function Problem() {
  return (
    <section className="py-20 bg-[#0c0b09]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="font-serif text-2xl sm:text-3xl text-[#f5f5f0]/40 mb-12 italic">
          Ce soir, pendant que vous étiez en service...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {[
            { icon: PhoneOff, value: "9", label: "appels manqués" },
            { icon: Armchair, value: "18", label: "couverts potentiels" },
            { icon: Banknote, value: "540€", label: "envolés" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 p-6 bg-red-950/20 border border-red-900/20 rounded-xl">
              <Icon className="h-5 w-5 text-red-400/60 mb-1" />
              <span className="text-4xl font-bold text-red-400 font-serif tracking-tight">{value}</span>
              <span className="text-sm text-[#f5f5f0]/50">{label}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#f5f5f0]/30 max-w-sm mx-auto">
          Simulation pour un restaurant de 60 couverts à 30€ de panier moyen — un vendredi soir classique.
        </p>
      </div>
    </section>
  )
}
