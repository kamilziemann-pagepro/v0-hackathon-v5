export default function StatisticsSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section className="gradient-primary w-full py-12">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8 text-center">
        <h3 className="text-white text-xl font-light mb-8">{data.title || "Our coverage includes over:"}</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="flex items-baseline">
              <span className="text-white text-5xl md:text-6xl font-bold">{data.institutions?.count || "130"}</span>
              <span className="text-white text-4xl md:text-5xl font-bold ml-1">+</span>
            </div>
            <span className="text-white text-xl font-light mt-2">{data.institutions?.label || "Institutions"}</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-baseline">
              <span className="text-white text-4xl md:text-5xl font-bold">$</span>
              <span className="text-white text-5xl md:text-6xl font-bold">{data.aum?.count || "22"}</span>
              <span className="text-white text-4xl md:text-5xl font-bold ml-1">bn</span>
            </div>
            <span className="text-white text-xl font-light mt-2">{data.aum?.label || "AuM"}</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-baseline">
              <span className="text-white text-5xl md:text-6xl font-bold">{data.accounts?.count || "6,000"}</span>
              <span className="text-white text-4xl md:text-5xl font-bold ml-1">+</span>
            </div>
            <span className="text-white text-xl font-light mt-2">{data.accounts?.label || "Accounts"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
