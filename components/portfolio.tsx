"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Le Bistrot Parisien",
    category: "Restaurant Gastronomique",
    description: "Site vitrine élégant avec système de réservation intégré",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Site Web", "Réservation", "Menu QR"]
  },
  {
    title: "Sushi Master",
    category: "Restaurant Japonais",
    description: "Menu digital interactif avec photos haute définition",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070&auto=format&fit=crop",
    tags: ["Menu QR", "Photos HD", "Allergènes"]
  },
  {
    title: "La Terrasse",
    category: "Brasserie",
    description: "Gestion complète des réservations et base clients",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1974&auto=format&fit=crop",
    tags: ["CRM", "Newsletter", "VIP"]
  },
  {
    title: "Chez Marco",
    category: "Pizzeria",
    description: "Site moderne avec commande en ligne et livraison",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    tags: ["Site Web", "Commande", "Livraison"]
  }
]

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="realisations" className="py-24 sm:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Nos réalisations
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              Projets sélectionnés
            </h2>
          </div>
          <Button variant="outline">
            Voir tous les projets
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-foreground/80 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-sm text-background/70">{project.category}</p>
                  <h3 className="text-2xl font-bold text-background mt-1">{project.title}</h3>
                  <p className="text-background/80 mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-background/20 text-background text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="absolute top-6 right-6 p-2 bg-background rounded-full text-foreground hover:bg-background/90 transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>

              {/* Always visible title on mobile */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/90 to-transparent">
                <p className="text-sm text-background/70">{project.category}</p>
                <h3 className="text-xl font-bold text-background">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
