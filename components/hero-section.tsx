import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";

export default function HeroSection({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className="gradient-primary w-full h-[692px]">
      <div className="max-w-[1536px] mx-auto h-full relative px-4 md:px-8">
        <div className="grid md:grid-cols-2 h-full">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {data.title || "Unlocking the power of data for wealth creation"}
            </h1>
            <p className="text-xl md:text-2xl text-white font-light">
              {data.subtitle ||
                "Single source of trusted data to make wiser, better, and faster investment decisions."}
            </p>
            {data.ctaButton && (
              <div className="pt-4">
                <Button
                  className="bg-[#c60018] hover:bg-[#c60018]/90 text-white rounded-md px-12 py-6 text-xl font-bold h-auto"
                  asChild
                >
                  <Link href={data.ctaButton.link}>{data.ctaButton.text}</Link>
                </Button>
              </div>
            )}
          </div>
          <div className="hidden md:flex items-center justify-center">
            {data.image ? (
              <Image
                // src={urlFor(data.image).url() || "/placeholder.svg"}
                src={"/placeholder.svg"}
                alt={data.image.alt || "Hero illustration"}
                width={300}
                height={650}
                className="object-contain"
              />
            ) : (
              <Image
                // src="/financial-data-visualization.png"
                src={"/placeholder.svg"}
                alt="Hero illustration"
                width={300}
                height={650}
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
