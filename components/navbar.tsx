import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";

export default function Navbar({ data }: { data: any }) {
  if (!data) return null;

  return (
    <header className="w-full h-[72px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] fixed top-0 left-0 z-50">
      <div className="max-w-[1536px] mx-auto h-full flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            {data.logo && (
              <Image
                // src={urlFor(data.logo).url() || "/placeholder.svg?height=40&width=243&query=wealth%20data%20box%20logo"}
                src={"/placeholder.svg"}
                alt={data.logo.alt || "Wealth Data Box Logo"}
                width={243}
                height={40}
                priority
              />
            )}
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {data.menuItems?.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.link}
              className="text-[#333333] text-[20px] font-light"
            >
              {item.title}
            </Link>
          ))}
          {data.ctaButton && (
            <Button
              className="bg-[#c60018] hover:bg-[#c60018]/90 text-white rounded-full px-8 py-2 text-lg font-bold"
              asChild
            >
              <Link href={data.ctaButton.link}>{data.ctaButton.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
