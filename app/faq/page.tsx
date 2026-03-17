"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqCategories = [
  {
    name: "Général",
    questions: [
      {
        q: "Qu'est-ce que Burstflow ?",
        a: "Burstflow est une solution digitale complète pour les restaurateurs. Nous proposons des sites web sur-mesure, des QR codes pour les menus, des systèmes de réservation automatisés, des SMS automatiques, une gestion de base de données clients et des outils de newsletter."
      },
      {
        q: "À qui s'adresse Burstflow ?",
        a: "Nos solutions s'adressent à tous les types de restaurateurs : restaurants gastronomiques, bistrots, brasseries, fast-foods, cafés, bars à vin... Que vous ayez un ou plusieurs établissements, nous avons une offre adaptée."
      },
      {
        q: "Combien de temps faut-il pour mettre en place les solutions ?",
        a: "Le délai dépend de la complexité du projet. Un QR code menu peut être opérationnel en 24h, tandis qu'un site web complet avec système de réservation prend généralement 5 à 7 jours."
      },
      {
        q: "Je ne suis pas à l'aise avec la technologie, est-ce fait pour moi ?",
        a: "C'est exactement pour vous. Burstflow a été conçu pour des restaurateurs, pas des ingénieurs. Si vous savez envoyer un SMS, vous savez utiliser Burstflow."
      },
      {
        q: "Vous êtes une jeune entreprise — comment savoir si vous serez là dans 2 ans ?",
        a: "Question légitime. C'est pourquoi on ne vous demande aucun engagement long terme. Résiliez quand vous voulez, vos données vous appartiennent. Notre pérennité se construit sur vos résultats, pas sur des contrats."
      }
    ]
  },
  {
    name: "Sites Web",
    questions: [
      {
        q: "Puis-je modifier mon site moi-même ?",
        a: "Oui, nous vous fournissons un back-office simple et intuitif pour modifier vos contenus, photos, menus et horaires. Pour les modifications plus importantes, notre équipe reste disponible."
      },
      {
        q: "Mon site sera-t-il optimisé pour Google ?",
        a: "Absolument. Tous nos sites sont optimisés pour le référencement local (SEO). Nous travaillons notamment sur Google My Business, les balises Schema, la vitesse de chargement et le responsive design."
      },
      {
        q: "L'hébergement est-il inclus ?",
        a: "Oui, l'hébergement sur nos serveurs sécurisés est inclus dans tous nos forfaits, ainsi que le certificat SSL (https) et les sauvegardes automatiques."
      }
    ]
  },
  {
    name: "QR Codes & Menus",
    questions: [
      {
        q: "Comment fonctionnent les QR codes menus ?",
        a: "Vos clients scannent le QR code avec leur smartphone et accèdent instantanément à votre menu digital. Pas besoin d'application à télécharger. Le menu s'affiche dans leur navigateur."
      },
      {
        q: "Puis-je modifier mon menu en temps réel ?",
        a: "Oui, c'est l'un des grands avantages ! Vous pouvez modifier vos plats, prix, descriptions et photos à tout moment depuis votre espace client. Les changements sont visibles immédiatement."
      },
      {
        q: "Les QR codes sont-ils personnalisables ?",
        a: "Oui, nous pouvons intégrer votre logo et vos couleurs dans le design du QR code, tout en garantissant sa lisibilité optimale."
      }
    ]
  },
  {
    name: "Réservations & SMS",
    questions: [
      {
        q: "Comment fonctionne le système de réservation ?",
        a: "Vos clients réservent en ligne 24h/24 via votre site ou un lien dédié. Le système vérifie automatiquement les disponibilités, attribue une table et envoie une confirmation par email et/ou SMS."
      },
      {
        q: "Que se passe-t-il si je rate un appel ?",
        a: "Notre système détecte les appels non répondus et envoie automatiquement un SMS personnalisé au client avec un lien pour réserver en ligne. Vous ne perdez plus de clients !"
      },
      {
        q: "Puis-je gérer les no-shows ?",
        a: "Oui, le système envoie des rappels automatiques avant la réservation. Vous pouvez aussi demander une empreinte bancaire ou un acompte pour les grandes tables."
      }
    ]
  },
  {
    name: "Tarifs & Facturation",
    questions: [
      {
        q: "Y a-t-il une période d'essai ?",
        a: "Nous proposons une démonstration gratuite personnalisée. Contactez-nous pour planifier un rendez-vous et découvrir nos solutions en conditions réelles."
      },
      {
        q: "Quels sont les moyens de paiement acceptés ?",
        a: "Nous acceptons les cartes bancaires (Visa, Mastercard) et les prélèvements SEPA. La facturation est mensuelle ou annuelle selon votre préférence."
      },
      {
        q: "Puis-je résilier à tout moment ?",
        a: "Oui, nos offres sont sans engagement. Vous pouvez résilier avec un préavis de 30 jours. Vos données vous appartiennent et peuvent être exportées."
      }
    ]
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f0e0c] text-balance">
            Questions Fréquentes
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#0f0e0c]/60 max-w-2xl mx-auto text-pretty">
            Trouvez rapidement les réponses à vos questions sur nos solutions digitales.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.name}>
                <h2 className="text-2xl font-bold mb-6 text-[#0f0e0c]">{category.name}</h2>
                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const itemId = `${category.name}-${index}`
                    const isOpen = openItems.includes(itemId)
                    
                    return (
                      <div 
                        key={itemId}
                        className="bg-white border border-[#0f0e0c]/10 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-[#f5f5f0]/50 transition-colors"
                        >
                          <span className="font-medium pr-4 text-[#0f0e0c]">{item.q}</span>
                          <ChevronDown 
                            className={`h-5 w-5 shrink-0 text-[#0f0e0c]/40 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4">
                            <p className="text-[#0f0e0c]/70">{item.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center p-8 bg-[#0f0e0c] rounded-2xl">
            <h3 className="text-xl font-bold text-[#f5f5f0]">{"Vous n'avez pas trouvé votre réponse ?"}</h3>
            <p className="mt-2 text-[#f5f5f0]/70">
              Notre équipe est disponible pour répondre à toutes vos questions.
            </p>
            <Link href="/contact">
              <Button className="mt-6 bg-[#c9a227] text-[#0f0e0c] hover:bg-[#b8922a]">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
