import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Users, Target, Heart, Rocket } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet, chaque ligne de code, chaque interaction client."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Nous aimons la restauration autant que la technologie. Cette double passion guide notre travail."
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Nous sommes à vos côtés à chaque étape, du premier contact jusqu'au support quotidien."
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Nous investissons constamment dans la R&D pour vous offrir les meilleures solutions du marché."
  }
]

const team = [
  {
    name: "Marie Dubois",
    role: "CEO & Co-fondatrice",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Thomas Martin",
    role: "CTO & Co-fondateur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Sophie Laurent",
    role: "Directrice Commerciale",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Lucas Bernard",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  }
]

const milestones = [
  { year: "2020", event: "Création de Burstflow à Paris" },
  { year: "2021", event: "50 premiers clients restaurateurs" },
  { year: "2022", event: "Lancement du système de réservation" },
  { year: "2023", event: "100 000 menus scannés par mois" },
  { year: "2024", event: "Expansion en Belgique et Suisse" },
  { year: "2025", event: "150+ restaurants partenaires" }
]

export default function AProposPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Notre mission : digitaliser la restauration
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground text-pretty">
              Fondée en 2020, Burstflow est née d'un constat simple : les restaurateurs méritent 
              des outils digitaux aussi performants que ceux des grandes chaînes, mais adaptés 
              à leur réalité quotidienne.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Notre histoire
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Tout a commencé dans un petit restaurant parisien. Marie, notre CEO, 
                  observait son ami restaurateur jongler entre les réservations téléphoniques, 
                  les menus papier à réimprimer et les clients qui repartaient faute de place.
                </p>
                <p>
                  Avec Thomas, développeur passionné, ils ont décidé de créer la solution 
                  qu'ils auraient aimé voir exister : une plateforme complète, simple d'utilisation, 
                  et vraiment pensée pour les restaurateurs.
                </p>
                <p>
                  Aujourd'hui, plus de 150 restaurants nous font confiance et nous continuons 
                  d'innover chaque jour pour transformer leur quotidien.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="L'équipe Burstflow"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Nos valeurs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-6 rounded-2xl">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Notre parcours
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="bg-secondary p-4 rounded-xl">
                    <span className="text-sm font-medium text-muted-foreground">{milestone.year}</span>
                    <p className="font-semibold">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              L'équipe
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Des passionnés de tech et de gastronomie à votre service
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
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
