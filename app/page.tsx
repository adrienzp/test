import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { Problem } from "@/components/problem"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Demo } from "@/components/demo"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <Services />
        <HowItWorks />
        <Features />
        <Demo />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
