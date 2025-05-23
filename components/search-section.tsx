import { Search } from "lucide-react"

export default function SearchSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section className="bg-[#f9fafb] w-full py-8 md:py-12">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8">
        <h2 className="text-[#333333] text-xl md:text-2xl lg:text-3xl font-light text-center mb-8">
          {data.title ||
            "Let Wealth Data Box connect you to your favorite custodian and data source and handle your data quality:"}
        </h2>

        <div className="flex justify-center">
          <div className="relative w-full max-w-[684px] h-[56px] bg-[#deeaff] rounded-md border border-[#cccccc] shadow-[0_0_8px_rgba(59,130,246,0.45)]">
            <div className="absolute left-0 top-0 h-full flex items-center pl-4">
              <Search className="w-5 h-5 text-[#cccccc]" />
            </div>
            <input
              type="text"
              placeholder="Search by institution or jurisdiction..."
              className="w-full h-full bg-transparent border-none pl-12 pr-12 text-[#333333] text-xl font-light focus:outline-none focus:ring-0"
            />
            <div className="absolute right-0 top-0 h-full border-l border-[#cccccc] flex items-center px-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <Search className="w-5 h-5 text-[#cccccc]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <div className="flex items-center justify-center">
            {data.institutions && data.institutions.length > 0 ? (
              <div className="flex items-center space-x-4 animate-marquee">
                {data.institutions.map((institution: any, index: number) => (
                  <span key={index} className="text-[#333333] text-sm whitespace-nowrap">
                    {institution.name}
                  </span>
                ))}
              </div>
            ) : (
              <div className="flex items-center space-x-4 animate-marquee">
                <span className="text-[#333333] text-sm whitespace-nowrap">Morgan Stanley</span>
                <span className="text-[#333333] text-sm whitespace-nowrap">UBS</span>
                <span className="text-[#333333] text-sm whitespace-nowrap">Credit Suisse</span>
                <span className="text-[#333333] text-sm whitespace-nowrap">JP Morgan</span>
                <span className="text-[#333333] text-sm whitespace-nowrap">Goldman Sachs</span>
                <span className="text-[#333333] text-sm whitespace-nowrap">Bank of America</span>
                <span className="text-[#333333] text-sm whitespace-nowrap">Citi</span>
                <span className="text-[#333333] text-sm whitespace-nowrap">Wells Fargo</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
