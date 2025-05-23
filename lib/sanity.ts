import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export function getSanityImageProps({
  image,
  width,
  height,
  alt,
  sizes,
}: {
  image: SanityImageSource
  width?: number
  height?: number
  alt: string
  sizes?: string
}) {
  return {
    src: urlFor(image)
      .width(width || 800)
      .url(),
    alt: alt,
    width: width || 800,
    height: height,
    sizes: sizes,
    blurDataURL: urlFor(image).width(20).blur(10).url(),
    placeholder: "blur" as const,
  }
}
