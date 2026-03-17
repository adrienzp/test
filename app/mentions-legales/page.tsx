import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Mentions légales</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Éditeur du site</h2>
              <p className="text-muted-foreground">
                Le site burstflow.fr est édité par la société Burstflow.<br />
                Adresse : 11B rue de la Bourse, Paris, France<br />
                Téléphone : 06 61 58 72 31 / 06 37 00 06 39<br />
                Email : contact@burstflow.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Directeur de la publication</h2>
              <p className="text-muted-foreground">
                Le directeur de la publication est le représentant légal de la société Burstflow.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Hébergement</h2>
              <p className="text-muted-foreground">
                Le site est hébergé par Vercel Inc.<br />
                Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                Site web : vercel.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Propriété intellectuelle</h2>
              <p className="text-muted-foreground">
                L{"'"}ensemble du contenu du site burstflow.fr (textes, images, vidéos, logos, icônes, etc.) 
                est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. 
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, 
                sauf autorisation écrite préalable de Burstflow.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation de responsabilité</h2>
              <p className="text-muted-foreground">
                Burstflow ne pourra être tenue responsable des dommages directs et indirects causés 
                au matériel de l{"'"}utilisateur, lors de l{"'"}accès au site burstflow.fr, et résultant 
                soit de l{"'"}utilisation d{"'"}un matériel ne répondant pas aux spécifications indiquées, 
                soit de l{"'"}apparition d{"'"}un bug ou d{"'"}une incompatibilité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Droit applicable</h2>
              <p className="text-muted-foreground">
                Les présentes mentions légales sont régies par le droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
