import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Globe, QrCode, MessageSquare, Calendar, Users, Mail, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "sites-web",
    icon: Globe,
    title: "Sites Web Sur-Mesure",
    description: "Un site web professionnel qui reflète l'identité de votre restaurant et attire de nouveaux clients.",
    features: [
      "Design personnalisé à votre image",
      "Responsive mobile et tablette",
      "Optimisation SEO local",
      "Galerie photos et vidéos",
      "Intégration réseaux sociaux",
      "Hébergement et maintenance inclus"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: "qr-codes",
    icon: QrCode,
    title: "QR Codes Menus",
    description: "Permettez à vos clients de consulter votre menu directement depuis leur smartphone.",
    features: [
      "Menu digital interactif",
      "Mise à jour en temps réel",
      "Photos des plats",
      "Allergènes et informations nutritionnelles",
      "Multi-langues automatique",
      "QR codes personnalisés à votre image"
    ],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop"
  },
  {
    id: "reservations",
    icon: Calendar,
    title: "Système de Réservation",
    description: "Gérez vos réservations automatiquement et ne perdez plus jamais un client.",
    features: [
      "Réservation en ligne 24h/24",
      "Attribution automatique des tables",
      "Confirmations par email et SMS",
      "Rappels automatiques",
      "Gestion des no-shows",
      "Calendrier synchronisé"
    ],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "sms-auto",
    icon: MessageSquare,
    title: "SMS Automatiques",
    description: "Ne manquez jamais un appel grâce aux SMS automatiques envoyés quand vous ne pouvez pas répondre.",
    features: [
      "Détection des appels manqués",
      "SMS personnalisé automatique",
      "Lien de réservation inclus",
      "Statistiques des conversions",
      "Messages programmables",
      "Multi-numéros supportés"
    ],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "crm",
    icon: Users,
    title: "Base de Données Clients",
    description: "Centralisez toutes les informations de vos clients pour un suivi personnalisé.",
    features: [
      "Fiches clients complètes",
      "Historique des visites",
      "Préférences et allergies",
      "Système de fidélité VIP",
      "Segmentation automatique",
      "Export des données"
    ],
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "newsletters",
    icon: Mail,
    title: "Newsletters & Relances",
    description: "Gardez le contact avec vos clients et faites-les revenir grâce aux newsletters ciblées.",
    features: [
      "Templates professionnels",
      "Campagnes automatisées",
      "Segmentation par profil",
      "Offres personnalisées",
      "Statistiques détaillées",
      "Conformité RGPD"
    ],
    image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?q=80&w=1974&auto=format&fit=crop"
  }
]

export default function ServicesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Nos Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une suite complète de solutions digitales pour transformer votre restaurant 
            et offrir une expérience exceptionnelle à vos clients.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground text-background mb-6">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/contact">
                      <Button>
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
