import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Politique de confidentialité</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Collecte des données personnelles</h2>
              <p className="text-muted-foreground">
                Burstflow collecte des données personnelles lorsque vous utilisez notre site web, 
                notamment lorsque vous remplissez un formulaire de contact ou demandez un devis. 
                Les données collectées peuvent inclure : nom, prénom, adresse email, numéro de téléphone, 
                nom de votre établissement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Utilisation des données</h2>
              <p className="text-muted-foreground">
                Les données collectées sont utilisées pour :<br />
                - Répondre à vos demandes de contact<br />
                - Vous fournir des devis personnalisés<br />
                - Vous informer de nos services et offres (avec votre consentement)<br />
                - Améliorer notre site web et nos services
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Protection des données</h2>
              <p className="text-muted-foreground">
                Burstflow met en œuvre toutes les mesures techniques et organisationnelles appropriées 
                pour assurer la sécurité et la confidentialité de vos données personnelles contre tout 
                accès, modification, divulgation ou destruction non autorisés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Conservation des données</h2>
              <p className="text-muted-foreground">
                Vos données personnelles sont conservées pendant la durée strictement nécessaire 
                aux finalités pour lesquelles elles ont été collectées, conformément à la réglementation 
                en vigueur et notamment au RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Vos droits</h2>
              <p className="text-muted-foreground">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :<br />
                - Droit d{"'"}accès à vos données<br />
                - Droit de rectification<br />
                - Droit à l{"'"}effacement (droit à l{"'"}oubli)<br />
                - Droit à la limitation du traitement<br />
                - Droit à la portabilité de vos données<br />
                - Droit d{"'"}opposition<br /><br />
                Pour exercer ces droits, contactez-nous à : contact@burstflow.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies</h2>
              <p className="text-muted-foreground">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Ces cookies sont utilisés pour analyser le trafic sur notre site et mémoriser vos préférences. 
                Vous pouvez configurer votre navigateur pour refuser les cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter :<br />
                Email : contact@burstflow.fr<br />
                Adresse : 11B rue de la Bourse, Paris, France<br />
                Téléphone : 06 61 58 72 31 / 06 37 00 06 39
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
