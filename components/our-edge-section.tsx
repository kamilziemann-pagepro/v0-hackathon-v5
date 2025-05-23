import { Clock, Brain, CheckCircle, TrendingUp, RefreshCw, Shield, Layers, Workflow, BarChart } from "lucide-react"

export default function OurEdgeSection({ data }: { data: any }) {
  if (!data) return null

  const defaultBenefits = [
    {
      icon: "clock",
      title: "Quality, speed, and simplicity for your daily investment decisions",
    },
    {
      icon: "brain",
      title: "A solid foundation for any AI wealth-tech applications",
    },
    {
      icon: "checkCircle",
      title: "Unique data reconciliation engine with near 100% data accuracy (99.87%)",
    },
    {
      icon: "trendingUp",
      title: "Boosts efficiency and reduces costs",
    },
    {
      icon: "refreshCw",
      title: "Automated data aggregation, processing, and delivery",
    },
    {
      icon: "shield",
      title: "Provides an independent source of trusted and secured data",
    },
    {
      icon: "layers",
      title: "System-agnostic design lets you choose your wealth-tech solutions or platforms",
    },
    {
      icon: "workflow",
      title: "Seamless and faster onboarding of new data sources/custodians",
    },
    {
      icon: "barChart",
      title: "Ready to use data & analytics for prospecting, increasing client wallet share…",
    },
  ]

  const benefits = data.benefits || defaultBenefits

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "clock":
        return <Clock className="w-9 h-9 text-white" />
      case "brain":
        return <Brain className="w-9 h-9 text-white" />
      case "checkcircle":
        return <CheckCircle className="w-9 h-9 text-white" />
      case "trendingup":
        return <TrendingUp className="w-9 h-9 text-white" />
      case "refreshcw":
        return <RefreshCw className="w-9 h-9 text-white" />
      case "shield":
        return <Shield className="w-9 h-9 text-white" />
      case "layers":
        return <Layers className="w-9 h-9 text-white" />
      case "workflow":
        return <Workflow className="w-9 h-9 text-white" />
      case "barchart":
        return <BarChart className="w-9 h-9 text-white" />
      default:
        return <Clock className="w-9 h-9 text-white" />
    }
  }

  return (
    <section className="gradient-primary w-full py-16">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-4">
          {data.title || "Our edge and your benefits"}
        </h2>
        <p className="text-white text-lg md:text-xl font-light text-center mb-12">
          {data.subtitle ||
            "Built to market-leading technology and cybersecurity standards, Wealth Data Box offers concrete benefits and value enhancement to clients:"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit: any, index: number) => (
            <div key={index} className="bg-white bg-opacity-5 rounded-lg p-6 flex items-start">
              <div className="mr-4 mt-1">{getIcon(benefit.icon)}</div>
              <p className="text-white text-lg md:text-xl font-light">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
