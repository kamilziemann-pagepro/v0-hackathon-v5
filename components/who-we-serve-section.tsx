export default function WhoWeServeSection({ data }: { data: any }) {
  if (!data) return null

  const defaultCategories = [
    {
      title: "Fintech Providers",
      items: [
        "AI wealth-tech applications",
        "Portfolio management systems",
        "CRM for financial advisors",
        "Asset reporting systems",
        "Accounting / general ledgers",
        "Core-banking systems",
        "Trading platforms",
        "Asset aggregator",
      ],
    },
    {
      title: "Asset Advisors",
      items: [
        "Wealth Managers",
        "Asset Managers",
        "Multi-Family Offices",
        "Trustees",
        "Private Banks",
        "Independent Fund Administrators",
        "VC, Private Equity, or multi-strategy funds",
        "Foundations",
      ],
    },
    {
      title: "Asset Owners",
      items: ["Single Family Offices", "UHNWIs", "Private active investors", "Tech entrepreneurs"],
    },
  ]

  const categories = data.categories || defaultCategories

  return (
    <section className="bg-white w-full py-16">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8">
        <h2 className="text-[#0c2340] text-2xl md:text-3xl font-bold text-center mb-4">
          {data.title || "Who we serve"}
        </h2>
        <p className="text-[#0c2340] text-lg md:text-xl font-light text-center mb-12">
          {data.subtitle ||
            "Our platform is designed to benefit a wide range of stakeholders and service providers across the wealth management industry."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#0c2340] text-xl font-bold text-center mb-6">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="text-[#0c2340] text-lg font-light">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
