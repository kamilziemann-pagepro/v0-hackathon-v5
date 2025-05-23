import { Globe, Database, BarChart } from "lucide-react"

export default function HowItWorksSection({ data }: { data: any }) {
  if (!data) return null

  const defaultSteps = [
    {
      icon: "globe",
      title: "Data Sources",
      description:
        "Wealth Data Box connects to your custodians, data providers, asset managers, and trading platforms.",
    },
    {
      icon: "database",
      title: "Data Processing",
      description:
        "Investment data liquid and illiquid is unified, aggregated, cleaned, reconciled, verified, and available via Rest API or SFTP server.",
    },
    {
      icon: "barChart",
      title: "Data Integration",
      description:
        "The clean and trusted data can be loaded directly into your AI wealth-tech application, asset reporting, portfolio management system, risk management, accounting, fund management, BI platform or any wealth-tech solution.",
    },
  ]

  const steps = data.steps || defaultSteps

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "globe":
        return <Globe className="w-8 h-8 text-[#2d327d]" />
      case "database":
        return <Database className="w-8 h-8 text-[#2d327d]" />
      case "barchart":
        return <BarChart className="w-8 h-8 text-[#2d327d]" />
      default:
        return <Globe className="w-8 h-8 text-[#2d327d]" />
    }
  }

  return (
    <section className="bg-[#f9fafb] w-full py-12 md:py-16">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8">
        <h2 className="text-[#333333] text-2xl md:text-3xl font-bold text-center mb-12">
          {data.title || "How it works"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step: any, index: number) => (
            <div key={index} className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="mr-4">{getIcon(step.icon)}</div>
                <h3 className="text-[#0c2340] text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-[#333333] text-lg font-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
