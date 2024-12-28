import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { FeatureCards } from "@/components/feature-cards"
import { TrustedBy } from "@/components/trusted-by"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { AiSmartRoom } from "@/components/ai-smart-room"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProductShowcase />
        <FeatureCards />
        <AiSmartRoom />
        <TrustedBy />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

