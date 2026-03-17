import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Essentiel",
    description: "Pour les petits établissements qui débutent leur digitalisation.",
    valueAnchor: "Récupérez le coût en 1 seule réservation supplémentaire par soir",
    price: "99",
    period: "/mois",
    features: [
      "Site web responsive",
      "QR Code menu digital",
      "Jusqu'à 50 plats",
      "Support par email",
      "Mises à jour incluses"
    ],
    cta: "Commencer",
    popular: false,
    recommended: false
  },
  {
    name: "Professionnel",
    description: "La solution complète pour les restaurants ambitieux.",
    valueAnchor: "ROI moyen estimé : +500€/mois dès le premier mois",
    price: "199",
    period: "/mois",
    features: [
      "Tout de l'offre Essentiel",
      "Système de réservation",
      "SMS automatiques",
      "Base de données clients",
      "Plats illimités",
      "Support prioritaire",
      "Statistiques avancées"
    ],
    cta: "Choisir ce plan",
    popular: true,
    recommended: true
  },
  {
    name: "Groupe",
    description: "Pour les groupes et chaînes de restaurants.",
    valueAnchor: "Tarif dégressif selon le nombre d'établissements",
    price: "Sur mesure",
    period: "",
    features: [
      "Tout de l'offre Professionnel",
      "Multi-établissements",
      "Newsletter & Fidélité",
      "API personnalisée",
      "Account manager dédié",
      "Formation sur site",
      "SLA garanti"
    ],
    cta: "Nous contacter",
    popular: false,
    recommended: false
  }
]

const faqs = [
  {
    question: "Y a-t-il des frais d'installation ?",
    answer: "Non, l'installation et la mise en place sont incluses dans tous nos forfaits. Notre équipe s'occupe de tout."
  },
  {
    question: "Puis-je changer de forfait ?",
    answer: "Oui, vous pouvez upgrader ou downgrader votre forfait à tout moment. La différence sera calculée au prorata."
  },
  {
    question: "Quelle est la durée d'engagement ?",
    answer: "Nos forfaits sont sans engagement. Vous pouvez résilier à tout moment avec un préavis de 30 jours."
  },
  {
    question: "Les mises à jour sont-elles incluses ?",
    answer: "Oui, toutes les mises à jour de fonctionnalités et de sécurité sont incluses dans votre abonnement."
  }
]

export default function TarifsPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f0e0c] text-balance">
            Tarifs Simples et Transparents
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#0f0e0c]/60 max-w-2xl mx-auto text-pretty">
            Choisissez le forfait adapté à votre établissement. 
            Sans engagement, sans surprise.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? "bg-[#0f0e0c] text-[#f5f5f0] ring-2 ring-[#c9a227]" 
                    : "bg-white border border-[#0f0e0c]/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c9a227] text-[#0f0e0c] text-sm font-medium rounded-full">
                    Le plus populaire
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className={`mt-2 text-sm ${plan.popular ? "text-[#f5f5f0]/70" : "text-[#0f0e0c]/60"}`}>
                    {plan.description}
                  </p>
                </div>
                
                {/* Value anchor */}
                <p className={`mt-4 text-xs ${plan.popular ? "text-[#c9a227]" : "text-[#0f0e0c]/50"}`}>
                  {plan.valueAnchor}
                </p>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.popular ? "text-[#f5f5f0]/70" : "text-[#0f0e0c]/60"}>
                    {plan.period}
                  </span>
                </div>
                
                {/* Recommended tag */}
                {plan.recommended && (
                  <p className="mt-2 text-xs text-[#c9a227] italic flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Recommandé pour un restaurant de 40 couverts et plus
                  </p>
                )}
                
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 shrink-0 ${plan.popular ? "text-[#c9a227]" : "text-[#0f0e0c]"}`} />
                      <span className={`text-sm ${plan.popular ? "text-[#f5f5f0]/90" : "text-[#0f0e0c]/80"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? "bg-[#c9a227] text-[#0f0e0c] hover:bg-[#b8922a]" 
                          : "bg-[#0f0e0c] text-[#f5f5f0] hover:bg-[#0f0e0c]/90"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#1a1916]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#f5f5f0]">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-[#0f0e0c] rounded-xl p-6 border border-[#f5f5f0]/10">
                <h3 className="font-semibold text-[#f5f5f0]">{faq.question}</h3>
                <p className="mt-2 text-[#f5f5f0]/70">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-[#f5f5f0]/60 mb-4">
              Vous avez d'autres questions ?
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-[#f5f5f0]/30 text-[#f5f5f0] hover:bg-[#f5f5f0]/10">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
