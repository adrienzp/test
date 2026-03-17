import Link from "next/link"
import { ExternalLink, QrCode, CalendarCheck, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Demo() {
  return (
    <section id="demo" className="py-24 sm:py-32 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#c9a227] uppercase tracking-wide">
            Notre savoir-faire
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#0f0e0c] text-balance">
            Découvrez nos compétences en action
          </h2>
          <p className="mt-4 text-lg text-[#0f0e0c]/60 max-w-2xl mx-auto text-pretty">
            Nous sommes une jeune entreprise passionnée par le digital. Bien que nous n{"'"}ayons pas encore eu de clients,
            nous avons développé un template de démonstration complet pour vous montrer concrètement ce que nous pouvons réaliser pour votre restaurant.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-[#0f0e0c]/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Template de démonstration
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f0e0c]">
                {"L'Orfèvre Paris"} - Site vitrine complet
              </h3>
              
              <p className="mt-4 text-[#0f0e0c]/60 text-pretty">
                Nous avons créé ce template de site incluant un système de réservation 
                et un QR code menu afin de démontrer nos capacités techniques. 
                Ce projet illustre parfaitement les solutions que nous proposons aux restaurateurs.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#f5f5f0] rounded-lg shrink-0">
                    <Globe className="h-5 w-5 text-[#0f0e0c]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0f0e0c]">Site web responsive</p>
                    <p className="text-sm text-[#0f0e0c]/60">Design élégant adapté à tous les écrans</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#f5f5f0] rounded-lg shrink-0">
                    <QrCode className="h-5 w-5 text-[#0f0e0c]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0f0e0c]">Menu digital via QR Code</p>
                    <p className="text-sm text-[#0f0e0c]/60">Carte interactive accessible depuis les tables</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#f5f5f0] rounded-lg shrink-0">
                    <CalendarCheck className="h-5 w-5 text-[#0f0e0c]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0f0e0c]">Système de réservation</p>
                    <p className="text-sm text-[#0f0e0c]/60">Prise de rendez-vous simplifiée pour vos clients</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href="https://adrienzp.github.io/lorfevreparis/menu.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2 bg-[#c9a227] text-[#0f0e0c] hover:bg-[#b8922a]">
                    Voir la démonstration
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f0e0c]/5 to-[#0f0e0c]/10 border border-[#0f0e0c]/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mx-auto w-24 h-24 bg-[#0f0e0c] rounded-2xl flex items-center justify-center mb-6">
                      <QrCode className="h-12 w-12 text-[#f5f5f0]" />
                    </div>
                    <p className="text-lg font-semibold text-[#0f0e0c]">Scannez pour découvrir</p>
                    <p className="text-sm text-[#0f0e0c]/60 mt-2">
                      Menu digital interactif
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 p-4 bg-white rounded-xl shadow-lg border border-[#0f0e0c]/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CalendarCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0f0e0c]">Réservation</p>
                    <p className="text-xs text-[#0f0e0c]/60">En ligne 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 p-4 bg-white rounded-xl shadow-lg border border-[#0f0e0c]/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0f0e0c]">100% Responsive</p>
                    <p className="text-xs text-[#0f0e0c]/60">Mobile & Desktop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#0f0e0c]/60">
            Vous souhaitez un site similaire pour votre restaurant ?
          </p>
          <Link href="/contact" className="inline-block mt-4">
            <Button variant="outline" size="lg" className="border-[#0f0e0c]/20 text-[#0f0e0c] hover:bg-[#0f0e0c] hover:text-[#f5f5f0]">
              Discutons de votre projet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
