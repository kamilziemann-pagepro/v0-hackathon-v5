import Image from "next/image"
import { Download, RefreshCw, FileCheck, Upload, Shield } from "lucide-react"

export default function DataProcessingSection({ data }: { data: any }) {
  if (!data) return null

  const defaultSteps = [
    {
      icon: "download",
      title: "Data Access",
      description: "Data is automatically downloaded and via modern secure data access mechanisms.",
    },
    {
      icon: "refreshCw",
      title: "Normalization",
      description: "Data is normalized to a unified data model using advanced machine learning techniques.",
    },
    {
      icon: "fileCheck",
      title: "Reconciliation",
      description: "Automated data cleaning process supported by AI mapping, ensures 100% (99.87%) data accuracy.",
    },
    {
      icon: "upload",
      title: "Secure Delivery",
      description: "Downstream systems access data through modern data delivery mechanisms (REST API).",
    },
  ]

  const steps = data.steps || defaultSteps

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "download":
        return <Download className="w-8 h-8 text-[#2d327d]" />
      case "refreshcw":
        return <RefreshCw className="w-8 h-8 text-[#2d327d]" />
      case "filecheck":
        return <FileCheck className="w-8 h-8 text-[#2d327d]" />
      case "upload":
        return <Upload className="w-8 h-8 text-[#2d327d]" />
      case "shield":
        return <Shield className="w-8 h-8 text-[#2d327d]" />
      default:
        return <Download className="w-8 h-8 text-[#2d327d]" />
    }
  }

  return (
    <section className="bg-[#f9fafb] w-full py-12">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8">
        <div className="mb-12">
          {data.image ? (
            <Image
              src={data.image || "/placeholder.svg"}
              alt="Data processing flow"
              width={1536}
              height={564}
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <div className="w-full h-[564px] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Data processing flow visualization</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {steps.map((step: any, index: number) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="mr-4">{getIcon(step.icon)}</div>
                <h3 className="text-[#0c2340] text-lg font-bold">{step.title}</h3>
              </div>
              <p className="text-[#333333] text-base md:text-lg font-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
