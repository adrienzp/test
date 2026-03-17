import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { 
  Smartphone, 
  Bell, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe2,
  Clock,
  Palette,
  Database,
  RefreshCw,
  Lock,
  Headphones
} from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "100% Mobile First",
    description: "Toutes nos solutions sont optimisées pour mobile, offrant une expérience parfaite à vos clients."
  },
  {
    icon: Bell,
    title: "Notifications Intelligentes",
    description: "Alertes en temps réel pour les réservations, annulations et messages importants."
  },
  {
    icon: BarChart3,
    title: "Analytics Avancés",
    description: "Tableaux de bord complets pour suivre vos performances et prendre les bonnes décisions."
  },
  {
    icon: Shield,
    title: "Sécurité Maximale",
    description: "Données cryptées et sauvegardées. Conformité RGPD garantie."
  },
  {
    icon: Zap,
    title: "Performance Optimale",
    description: "Temps de chargement ultra-rapides pour ne jamais perdre un client impatient."
  },
  {
    icon: Globe2,
    title: "Multi-langues",
    description: "Vos menus et contenus traduits automatiquement pour accueillir les touristes."
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Vos clients peuvent réserver et consulter votre menu à tout moment."
  },
  {
    icon: Palette,
    title: "Personnalisation Totale",
    description: "Adaptez chaque élément à votre identité visuelle et à vos besoins."
  },
  {
    icon: Database,
    title: "Données Centralisées",
    description: "Toutes vos informations clients au même endroit, accessibles en un clic."
  },
  {
    icon: RefreshCw,
    title: "Mises à Jour Automatiques",
    description: "Nouvelles fonctionnalités déployées sans intervention de votre part."
  },
  {
    icon: Lock,
    title: "Backups Automatiques",
    description: "Vos données sauvegardées quotidiennement sur des serveurs sécurisés."
  },
  {
    icon: Headphones,
    title: "Support Dédié",
    description: "Une équipe à votre écoute pour vous accompagner au quotidien."
  }
]

const workflow = [
  {
    step: "01",
    title: "Un client appelle",
    description: "Vous êtes occupé en cuisine ou en service ? Pas de problème."
  },
  {
    step: "02",
    title: "SMS automatique",
    description: "Un SMS est immédiatement envoyé au client avec un lien de réservation."
  },
  {
    step: "03",
    title: "Réservation en ligne",
    description: "Le client réserve en quelques clics, 24h/24."
  },
  {
    step: "04",
    title: "Attribution de table",
    description: "Une table est automatiquement assignée selon vos critères."
  },
  {
    step: "05",
    title: "Confirmation",
    description: "Le client reçoit une confirmation avec tous les détails."
  },
  {
    step: "06",
    title: "Suivi client",
    description: "Les données sont enregistrées pour personnaliser les prochaines visites."
  }
]

export default function FonctionnalitesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Fonctionnalités
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez toutes les fonctionnalités qui font de Burstflow 
            la solution la plus complète pour les restaurateurs.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="p-6 rounded-2xl border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Comment ça marche ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Un exemple concret : la gestion des appels manqués et des réservations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-background p-6 rounded-2xl h-full">
                  <span className="text-5xl font-bold text-muted-foreground/20">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
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
