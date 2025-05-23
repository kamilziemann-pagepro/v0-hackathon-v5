import { client } from "@/lib/sanity"
import {
  navbarQuery,
  heroQuery,
  searchQuery,
  dataTrustQuery,
  statisticsQuery,
  howItWorksQuery,
  dataProcessingQuery,
  ourEdgeQuery,
  whoWeServeQuery,
  ecosystemQuery,
  footerQuery,
} from "@/lib/queries"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import SearchSection from "@/components/search-section"
import DataTrustSection from "@/components/data-trust-section"
import StatisticsSection from "@/components/statistics-section"
import HowItWorksSection from "@/components/how-it-works-section"
import DataProcessingSection from "@/components/data-processing-section"
import OurEdgeSection from "@/components/our-edge-section"
import WhoWeServeSection from "@/components/who-we-serve-section"
import EcosystemSection from "@/components/ecosystem-section"
import Footer from "@/components/footer"

export default async function Home() {
  // Fetch all data in parallel
  const [
    navbarData,
    heroData,
    searchData,
    dataTrustData,
    statisticsData,
    howItWorksData,
    dataProcessingData,
    ourEdgeData,
    whoWeServeData,
    ecosystemData,
    footerData,
  ] = await Promise.all([
    client.fetch(navbarQuery),
    client.fetch(heroQuery),
    client.fetch(searchQuery),
    client.fetch(dataTrustQuery),
    client.fetch(statisticsQuery),
    client.fetch(howItWorksQuery),
    client.fetch(dataProcessingQuery),
    client.fetch(ourEdgeQuery),
    client.fetch(whoWeServeQuery),
    client.fetch(ecosystemQuery),
    client.fetch(footerQuery),
  ])

  return (
    <main className="min-h-screen">
      <Navbar data={navbarData} />
      <HeroSection data={heroData} />
      <SearchSection data={searchData} />
      <DataTrustSection data={dataTrustData} />
      <StatisticsSection data={statisticsData} />
      <HowItWorksSection data={howItWorksData} />
      <DataProcessingSection data={dataProcessingData} />
      <OurEdgeSection data={ourEdgeData} />
      <WhoWeServeSection data={whoWeServeData} />
      <EcosystemSection data={ecosystemData} />
      <Footer data={footerData} />
    </main>
  )
}
