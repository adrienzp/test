import { Check } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Menu digital interactif",
    description: "Vos clients scannent un QR code unique sur chaque table et accèdent instantanément à votre menu. Mises à jour en temps réel, photos des plats, informations allergènes.",
    demo: "https://mellifluous-pasca-ad1172.netlify.app/menu-mobile.html",
    points: [
      "QR code personnalisé par table",
      "Mise à jour instantanée du menu",
      "Photos et descriptions détaillées",
      "Informations allergènes intégrées",
    ],
  },
  {
    title: "Réservation intelligente",
    description: "Quand vous ne pouvez pas répondre au téléphone, un SMS est automatiquement envoyé avec un lien de réservation. Le client réserve en ligne et se voit attribuer une table automatiquement.",
    points: [
      "SMS automatique avec lien de réservation",
      "Attribution automatique des tables",
      "Confirmation instantanée",
      "Rappels automatiques",
    ],
  },
  {
    title: "Gestion client & fidélisation",
    description: "Constituez une base de données complète de vos clients. Identifiez vos habitués, marquez vos VIP et lancez des campagnes de newsletters pour les faire revenir.",
    points: [
      "Historique complet des visites",
      "Système de statut VIP",
      "Campagnes email personnalisées",
      "Analyse du comportement client",
    ],
  },
]

export function Features() {
  return (
    <section id="fonctionnalites" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-xs font-medium text-[#c9a227] uppercase tracking-[0.2em] mb-4">Fonctionnalités</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0c0b09] max-w-xl">
            Allier innovation, simplicité et efficacité
          </h2>
        </div>

        <div className="space-y-28">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
            >
              {/* Visual placeholder */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0c0b09]/4 border border-[#0c0b09]/8 flex items-center justify-center">
                  {feature.demo ? (
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 bg-[#0c0b09] rounded-2xl flex items-center justify-center">
                        {/* QR code visual hint */}
                        <div className="grid grid-cols-3 gap-1">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className={`w-5 h-5 rounded-sm ${[0,2,6,8,4].includes(i) ? "bg-[#c9a227]" : "bg-white/20"}`} />
                          ))}
                        </div>
                      </div>
                      <a href={feature.demo} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-[#c9a227] underline underline-offset-4">
                        Voir la démo du menu →
                      </a>
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-[#0c0b09]/10 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#c9a227]/30" />
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0c0b09] mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-[#0c0b09]/55 leading-relaxed mb-8">
                  {feature.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#0c0b09]/65">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="text-sm text-[#0c0b09]/50 hover:text-[#0c0b09] transition-colors underline underline-offset-4 decoration-[#0c0b09]/20">
                  En savoir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
