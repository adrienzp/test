import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CGVPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Conditions Générales de Vente</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Article 1 - Objet</h2>
              <p className="text-muted-foreground">
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
                entre la société Burstflow et ses clients dans le cadre de la fourniture de services 
                de création de sites web, de solutions digitales et de services associés pour les restaurateurs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Article 2 - Services proposés</h2>
              <p className="text-muted-foreground">
                Burstflow propose les services suivants :<br />
                - Création de sites web sur-mesure<br />
                - Génération de QR codes pour menus digitaux<br />
                - Mise en place de systèmes de réservation en ligne<br />
                - Solutions de SMS automatiques<br />
                - Gestion de base de données clients (CRM)<br />
                - Campagnes de newsletters et fidélisation
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Article 3 - Devis et commandes</h2>
              <p className="text-muted-foreground">
                Tout projet fait l{"'"}objet d{"'"}un devis détaillé et personnalisé, établi gratuitement. 
                Le devis est valable 30 jours à compter de sa date d{"'"}émission. 
                La commande est considérée comme ferme après acceptation du devis par le client 
                et versement de l{"'"}acompte prévu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Article 4 - Prix et modalités de paiement</h2>
              <p className="text-muted-foreground">
                Les prix sont indiqués en euros et hors taxes (HT). La TVA applicable sera ajoutée au montant HT.<br /><br />
                Modalités de paiement :<br />
                - 30% d{"'"}acompte à la commande<br />
                - 40% à la validation des maquettes<br />
                - 30% à la livraison finale<br /><br />
                Les paiements peuvent être effectués par virement bancaire ou carte bancaire.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Article 5 - Délais de livraison</h2>
              <p className="text-muted-foreground">
                Les délais de livraison sont indicatifs et communiqués lors de l{"'"}établissement du devis. 
                Ils dépendent de la complexité du projet et de la réactivité du client pour la fourniture 
                des éléments nécessaires (textes, images, informations).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Article 6 - Propriété intellectuelle</h2>
              <p className="text-muted-foreground">
                À compter du paiement intégral, le client devient propriétaire des créations réalisées 
                spécifiquement pour lui. Burstflow conserve la propriété intellectuelle des éléments 
                génériques et des outils développés en interne.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Article 7 - Garantie et maintenance</h2>
              <p className="text-muted-foreground">
                Burstflow garantit le bon fonctionnement des solutions livrées pendant une période de 3 mois 
                suivant la livraison. Des contrats de maintenance peuvent être proposés pour assurer 
                le suivi et les mises à jour au-delà de cette période.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Article 8 - Résiliation</h2>
              <p className="text-muted-foreground">
                En cas de résiliation anticipée par le client, les sommes déjà versées restent acquises à Burstflow 
                en compensation du travail effectué. En cas de manquement grave de l{"'"}une des parties, 
                le contrat pourra être résilié de plein droit après mise en demeure restée infructueuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Article 9 - Litiges</h2>
              <p className="text-muted-foreground">
                Les présentes CGV sont soumises au droit français. En cas de litige, les parties s{"'"}efforceront 
                de trouver une solution amiable. À défaut, le litige sera porté devant les tribunaux compétents de Paris.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Article 10 - Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question relative à ces CGV :<br />
                Burstflow<br />
                11B rue de la Bourse, Paris, France<br />
                Email : contact@burstflow.fr<br />
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
