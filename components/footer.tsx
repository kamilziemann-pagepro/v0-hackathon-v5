import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer({ data }: { data: any }) {
  if (!data) return null

  const defaultLocations = [
    {
      title: "Washington, D.C. metro area",
      address: ["WealthArc Inc.", "966 Hungerford Drive, Suite 3B", "Rockville, MD 20850", "United States"],
    },
    {
      title: "Zurich",
      address: ["WealthArc AG", "Dufourstrasse 49, CH-8008", "Switzerland"],
    },
    {
      title: "Warsaw",
      address: ["WealthArc sp. z o.o.", "Krakowskie Przedmieście 13,", "00-071,", "Poland"],
    },
  ]

  const locations = data.locations || defaultLocations

  return (
    <footer className="gradient-primary w-full py-12">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-2">{data.copyright || "© WealthArc 2024"}</h3>
            <Link href={data.privacyPolicy?.url || "#"} className="text-white text-lg font-light">
              {data.privacyPolicy?.text || "Privacy Policy"}
            </Link>
          </div>

          {locations.map((location: any, index: number) => (
            <div key={index}>
              <h3 className="text-white text-xl font-bold mb-2">{location.title}</h3>
              <address className="not-italic text-white text-sm font-light">
                {location.address.map((line: string, lineIndex: number) => (
                  <p key={lineIndex}>{line}</p>
                ))}
              </address>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            className="bg-[#c60018] hover:bg-[#c60018]/90 text-white rounded-full px-8 py-2 text-lg font-bold"
            asChild
          >
            <Link href={data.ctaButton?.link || "#"}>{data.ctaButton?.text || "Try For Free"}</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
