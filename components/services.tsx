import { Globe, QrCode, MessageSquare, CalendarCheck, Users, LayoutDashboard } from "lucide-react"

const services = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Réservation Intelligente",
    description: "Ne manquez plus aucune réservation. Un SMS avec lien de réservation est envoyé automatiquement.",
    extra: "Aucune action de votre part — le système détecte l'appel manqué et déclenche le SMS automatiquement.",
  },
  {
    icon: Users,
    number: "02",
    title: "Gestion Client & Fidélisation",
    description: "Gardez une trace de vos clients, identifiez vos VIP et personnalisez leur expérience.",
    extra: "Pas besoin de CRM compliqué — tout est pensé pour un restaurateur, pas un marketeur.",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Base de Données Client",
    description: "Historique complet, préférences, anniversaires... Tout pour offrir un service personnalisé.",
    extra: "Même si vous quittez Burstflow un jour, vos données restent les vôtres. Export en un clic.",
  },
  {
    icon: QrCode,
    number: "04",
    title: "Menu Digital QR",
    description: "Permettez à vos clients de consulter votre menu simplement en scannant un QR code sur leur table.",
    extra: "Fini les menus plastifiés déchirés ou les ardoises effacées — votre menu est toujours parfait.",
  },
  {
    icon: Globe,
    number: "05",
    title: "Site Web Sur-Mesure",
    description: "Des sites élégants et performants qui reflètent l'identité unique de votre établissement.",
    extra: "On s'occupe de tout : textes, photos, mise en ligne, référencement Google. Vous validez, c'est tout.",
  },
  {
    icon: LayoutDashboard,
    number: "06",
    title: "Tableau de Bord",
    description: "Visualisez vos performances, réservations et tendances en un coup d'œil.",
    extra: "Consultez vos stats le matin en buvant votre café — 2 minutes suffisent.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-28 bg-[#f5f2ea]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium text-[#c9a227] uppercase tracking-[0.2em] mb-4">Nos services</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0c0b09] max-w-xl">
            Une solution complète pour votre restaurant
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0c0b09]/8 rounded-2xl overflow-hidden border border-[#0c0b09]/8">
          {services.map((service) => (
            <div key={service.number}
              className="group bg-white hover:bg-[#faf8f4] transition-colors duration-200 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0c0b09]/5 group-hover:bg-[#c9a227] flex items-center justify-center transition-colors duration-200">
                  <service.icon className="h-5 w-5 text-[#0c0b09]/60 group-hover:text-[#0c0b09] transition-colors" />
                </div>
                <span className="text-3xl font-serif text-[#0c0b09]/8 group-hover:text-[#c9a227]/20 transition-colors">
                  {service.number}
                </span>
              </div>
              <h3 className="font-semibold text-[#0c0b09] mb-2 text-base">{service.title}</h3>
              <p className="text-sm text-[#0c0b09]/55 leading-relaxed mb-3">{service.description}</p>
              <p className="text-xs text-[#0c0b09]/35 italic leading-relaxed">{service.extra}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
