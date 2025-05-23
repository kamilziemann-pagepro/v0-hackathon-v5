import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function DataTrustSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section className="bg-[#f9fafb] w-full py-12 md:py-16">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8">
            <h2 className="text-[#333333] text-2xl md:text-3xl font-bold">{data.leftTitle || "Data you can trust"}</h2>
            <p className="text-[#333333] text-lg md:text-xl font-light leading-relaxed">
              {data.leftContent ||
                "Wealth Data Box automatically connects you to your most needed custodians and data sources, aggregating your investment data, cleaning, reconciling, verifying, vetting to the highest quality, and delivering as a trusted data seamlessly to your AI and wealth-tech applications, so you can take wiser, better, and faster decisions."}
            </p>
            <Link
              href={data.leftLink?.url || "#"}
              className="inline-flex items-center text-[#2d327d] text-lg md:text-xl font-light"
            >
              {data.leftLink?.text || "Learn more"}
              <ArrowRight className="ml-2 h-5 w-5 text-[#2d327d]" />
            </Link>
          </div>

          <div className="space-y-8">
            <h2 className="text-[#333333] text-2xl md:text-3xl font-bold">
              {data.rightTitle || "Why Wealth Data Box?"}
            </h2>
            <p className="text-[#333333] text-lg md:text-xl font-light leading-relaxed">
              {data.rightContent ||
                "In wealth management, seamless access to multiple sources of data and data quality drive success but also present one of the greatest challenges. Accurate and complete data is the foundation of effective wealth management and AI-powered insights. Data quality is the single most important factor for wealth creation."}
            </p>
            <Link
              href={data.rightLink?.url || "#"}
              className="inline-flex items-center text-[#2d327d] text-lg md:text-xl font-light"
            >
              {data.rightLink?.text || "Learn more"}
              <ArrowRight className="ml-2 h-5 w-5 text-[#2d327d]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
