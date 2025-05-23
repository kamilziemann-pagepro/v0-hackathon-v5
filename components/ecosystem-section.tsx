import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function EcosystemSection({ data }: { data: any }) {
  if (!data) return null

  const defaultPartners = [
    {
      logo: "/microsoft-azure-logo.png",
      title: "Microsoft Azure",
      description:
        "As a Solutions Partner for Data & AI (Azure), we demonstrate our broad capability to help customers manage their data across multiple systems to build data solutions.",
      link: {
        text: "Learn more",
        url: "#",
      },
    },
    {
      logo: "/wealtharc-logo.png",
      title: "WealthArc",
      description:
        "Wealth Data Box has been powering the WealthArc Portfolio Management System. WealthArc is a personalized wealth management platform built for the next generation of Family Offices, Wealth Managers and Private Banks.",
      link: {
        text: "Learn more",
        url: "#",
      },
    },
  ]

  const partners = data.partners || defaultPartners

  return (
    <section className="bg-[#f9fafb] w-full py-12">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8">
        <h2 className="text-[#333333] text-2xl md:text-3xl font-bold text-center mb-12">{data.title || "Ecosystem"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="flex justify-center mb-8 h-[82px] items-center">
                {partner.logo ? (
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.title}
                    width={200}
                    height={82}
                    className="object-contain"
                  />
                ) : (
                  <div className="h-[82px] w-[200px] bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-400">{partner.title} logo</p>
                  </div>
                )}
              </div>
              <h3 className="text-[#0c2340] text-xl font-bold text-center mb-4">{partner.title}</h3>
              <p className="text-[#374151] text-lg font-light mb-6">{partner.description}</p>
              <Link
                href={partner.link?.url || "#"}
                className="inline-flex items-center text-[#2d327d] text-lg font-light"
              >
                {partner.link?.text || "Learn more"}
                <ArrowRight className="ml-2 h-5 w-5 text-[#2d327d]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
