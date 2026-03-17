"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Target } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    restaurant: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-sm font-medium text-[#c9a227] uppercase tracking-wide">
              Contact
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#0f0e0c] text-balance">
              Parlons de votre projet
            </h2>
            <p className="mt-4 text-lg text-[#0f0e0c]/60 text-pretty">
              Vous avez des questions sur nos solutions ? Vous souhaitez obtenir un devis personnalisé ? 
              {"N'hésitez pas à nous contacter."}
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Mail className="h-5 w-5 text-[#0f0e0c]" />
                </div>
                <div>
                  <p className="font-medium text-[#0f0e0c]">Email</p>
                  <a href="mailto:contact@burstflow.fr" className="text-[#0f0e0c]/60 hover:text-[#0f0e0c] transition-colors">
                    contact@burstflow.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Phone className="h-5 w-5 text-[#0f0e0c]" />
                </div>
                <div>
                  <p className="font-medium text-[#0f0e0c]">Téléphone</p>
                  <div className="space-y-1">
                    <a href="tel:+33661587231" className="block text-[#0f0e0c]/60 hover:text-[#0f0e0c] transition-colors">
                      06 61 58 72 31
                    </a>
                    <a href="tel:+33637000639" className="block text-[#0f0e0c]/60 hover:text-[#0f0e0c] transition-colors">
                      06 37 00 06 39
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <MapPin className="h-5 w-5 text-[#0f0e0c]" />
                </div>
                <div>
                  <p className="font-medium text-[#0f0e0c]">Adresse</p>
                  <p className="text-[#0f0e0c]/60">
                    11B rue de la Bourse<br />
                    Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {/* Urgency badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/10 rounded-full text-sm text-[#c9a227] border border-[#c9a227]/30">
                <Target className="h-4 w-4" />
                Offre partenaires fondateurs — 3 places restantes ce mois-ci
              </div>
              <p className="mt-3 text-sm text-[#0f0e0c]/50 italic">
                Les 10 premiers restaurants partenaires bénéficient d'un tarif préférentiel garanti à vie et d'un accompagnement personnalisé pendant 3 mois.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#0f0e0c]">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-[#0f0e0c]/10 focus:border-[#c9a227] focus:ring-[#c9a227]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#0f0e0c]">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jean@restaurant.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-[#0f0e0c]/10 focus:border-[#c9a227] focus:ring-[#c9a227]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="restaurant" className="text-sm font-medium text-[#0f0e0c]">
                    Nom du restaurant
                  </label>
                  <Input
                    id="restaurant"
                    placeholder="Le Petit Bistrot"
                    value={formData.restaurant}
                    onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                    className="border-[#0f0e0c]/10 focus:border-[#c9a227] focus:ring-[#c9a227]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#0f0e0c]">
                    Votre message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre projet ou posez vos questions..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-[#0f0e0c]/10 focus:border-[#c9a227] focus:ring-[#c9a227]"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#c9a227] hover:bg-[#b8922a] text-[#0f0e0c] font-semibold" size="lg">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
