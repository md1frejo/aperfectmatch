import Gallery from "@/components/Gallery"
import GenderToggle from "@/components/GenderToggle"

type Props = {
  searchParams: Promise<{
    gender?: string
  }>
}

export default async function Home({ searchParams }: Props) {
  
  const params = await searchParams
  const genderParam = params.gender === "men" ? "man face" : "woman face"
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      genderParam
    )}&per_page=12`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch Unsplash images")
  }

  const data = await res.json()

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-16 px-8 bg-white dark:bg-black">
        <GenderToggle current={params.gender ?? "women"} />
        <Gallery photos={data.results} gender={params.gender ?? "women"} />
      </main>
    </div>
  )
}
