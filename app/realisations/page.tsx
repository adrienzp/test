import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { ExternalLink, QrCode, CalendarCheck, Globe, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RealisationsPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Notre savoir-faire
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez ce que nous sommes capables de créer pour votre restaurant.
          </p>
        </div>
      </section>

      {/* Honest Statement */}
      <section className="py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Transparence
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Une jeune entreprise ambitieuse
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Nous sommes une équipe passionnée par le digital et les nouvelles technologies. 
            Bien que nous n{"'"}ayons pas encore eu l{"'"}opportunité de travailler avec de vrais clients, 
            nous avons développé un template de démonstration complet pour vous montrer concrètement 
            nos compétences et ce que nous pouvons réaliser pour votre établissement.
          </p>
        </div>
      </section>

      {/* Demo Project */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Notre démonstration
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              Template de site restaurant
            </h2>
          </div>

          <div className="bg-secondary rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Visual */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-foreground/5 to-foreground/10 border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="mx-auto w-24 h-24 bg-foreground rounded-2xl flex items-center justify-center mb-6">
                        <QrCode className="h-12 w-12 text-background" />
                      </div>
                      <p className="text-lg font-semibold">L{"'"}Orfèvre Paris</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Template de démonstration
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 p-4 bg-background rounded-xl shadow-lg border border-border hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CalendarCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Réservation</p>
                      <p className="text-xs text-muted-foreground">Intégrée</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 p-4 bg-background rounded-xl shadow-lg border border-border hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Responsive</p>
                      <p className="text-xs text-muted-foreground">Mobile & Desktop</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-background rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  En ligne
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  L{"'"}Orfèvre Paris
                </h3>
                
                <p className="mt-4 text-muted-foreground text-pretty">
                  Nous avons développé ce template de site incluant un système de réservation 
                  et un QR code menu afin de démontrer nos capacités techniques. 
                  Ce projet illustre parfaitement les solutions que nous proposons aux restaurateurs.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-medium">1</div>
                    <p>Site web responsive et élégant</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-medium">2</div>
                    <p>Menu digital accessible via QR Code</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-medium">3</div>
                    <p>Système de réservation intégré</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-medium">4</div>
                    <p>Design professionnel et moderne</p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://adrienzp.github.io/lorfevreparis/menu.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                      Voir la démonstration
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Créer mon site
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we can create */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ce que nous pouvons créer pour vous
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des solutions sur-mesure adaptées à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-2xl">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sites vitrine</h3>
              <p className="text-muted-foreground">
                Des sites web élégants qui reflètent l{"'"}identité de votre restaurant 
                et séduisent vos futurs clients.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <QrCode className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Menus digitaux</h3>
              <p className="text-muted-foreground">
                Des menus interactifs accessibles via QR Code, modifiables en temps réel 
                depuis votre espace de gestion.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <CalendarCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Réservations en ligne</h3>
              <p className="text-muted-foreground">
                Un système de réservation complet avec gestion des tables, 
                SMS automatiques et suivi client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
