import Gallery from "@/components/Gallery"
import GenderToggle from "@/components/GenderToggle"

type Props = { searchParams: Promise<{ gender?: string }> }

export default async function Home({ searchParams }: Props) {

  const params = await searchParams
  const gender = params.gender ?? "mix"

  const headers = {
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
  }

  let photos: any[] = []
  let genderl: string[] = []

  if (gender === "men") {

    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=man face&per_page=20`,
      { headers, cache: "no-store" }
    )

    const data = await res.json()
    photos = data.results
    genderl = Array(photos.length).fill("men")

  } else if (gender === "women") {

    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=woman face&per_page=20`,
      { headers, cache: "no-store" }
    )

    const data = await res.json()
    photos = data.results
    genderl = Array(photos.length).fill("women")

  } else {

    const [resMen, resWomen] = await Promise.all([
      fetch(`https://api.unsplash.com/search/photos?query=man face&per_page=10`, { headers }),
      fetch(`https://api.unsplash.com/search/photos?query=woman face&per_page=10`, { headers })
    ])

    const men = await resMen.json()
    const women = await resWomen.json()

    const menPhotos = men.results
    const womenPhotos = women.results

    photos = [...menPhotos, ...womenPhotos]

    genderl = [...Array(menPhotos.length).fill("men"),...Array(womenPhotos.length).fill("women")]
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
	<main className="flex min-h-screen w-[90%] mx-auto flex-col items-center py-16 px-4 bg-white dark:bg-black">
        	<GenderToggle current={gender} />

        	<Gallery photos={photos} gender={genderl} />

      </main>
    </div>
  )
}


