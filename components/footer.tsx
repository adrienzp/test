import Link from "next/link"
import { LogoLight } from "@/components/logo"

const navigation = {
  services: [
    { name: "Sites Web", href: "/services#sites-web" },
    { name: "QR Codes Menus", href: "/services#qr-codes" },
    { name: "Réservations", href: "/services#reservations" },
    { name: "CRM Client", href: "/services#crm" },
  ],
  company: [
    { name: "À propos", href: "/a-propos" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Tarifs", href: "/tarifs" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Confidentialité", href: "/confidentialite" },
    { name: "CGV", href: "/cgv" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0c0b09] border-t border-[#f5f5f0]/6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <LogoLight />
            <p className="mt-4 text-xs text-[#f5f5f0]/35 leading-relaxed">
              Solutions digitales pour restaurateurs ambitieux.
            </p>
          </div>

          {[
            { title: "Services", items: navigation.services },
            { title: "Entreprise", items: navigation.company },
            { title: "Support", items: navigation.support },
            { title: "Légal", items: navigation.legal },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold text-[#f5f5f0]/60 uppercase tracking-[0.15em] mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-xs text-[#f5f5f0]/35 hover:text-[#f5f5f0]/70 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#f5f5f0]/6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#f5f5f0]/25">
            © 2026 Burstflow. Tous droits réservés.
          </p>
          <p className="text-xs text-[#f5f5f0]/25">
            Données hébergées en France 🇫🇷 · RGPD conforme
          </p>
        </div>
      </div>
    </footer>
  )
}
