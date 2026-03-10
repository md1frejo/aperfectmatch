import ClientPage from "@/components/ClientPage";

type Props = { searchParams: { gender?: string } };

export default async function Home({ searchParams }: Props) {
  const gender = searchParams.gender ?? "mix";

  const headers = {
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
  };

  let photos: any[] = [];
  let photoGenders: string[] = [];

  if (gender === "men") {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=man face&per_page=20`,
      { headers, cache: "no-store" }
    );
    const data = await res.json();
    photos = data.results ?? [];
    photoGenders = Array(photos.length).fill("men");
  } else if (gender === "women") {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=woman face&per_page=20`,
      { headers, cache: "no-store" }
    );
    const data = await res.json();
    photos = data.results ?? [];
    photoGenders = Array(photos.length).fill("women");
  } else {
    const [resMen, resWomen] = await Promise.all([
      fetch(`https://api.unsplash.com/search/photos?query=man face&per_page=10`, { headers }),
      fetch(`https://api.unsplash.com/search/photos?query=woman face&per_page=10`, { headers }),
    ]);

    const men = await resMen.json();
    const women = await resWomen.json();

    const menPhotos = men?.results ?? [];
    const womenPhotos = women?.results ?? [];

    const items = [
      ...menPhotos.map((p: any) => ({ photo: p, gender: "men" })),
      ...womenPhotos.map((p: any) => ({ photo: p, gender: "women" })),
    ].sort(() => Math.random() - 0.5);

    photos = items.map((i) => i.photo);
    photoGenders = items.map((i) => i.gender);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-[90%] mx-auto flex-col items-center py-16 px-4 bg-sky-100/50 dark:bg-black">
        <div className="flex justify-center items-center mb-20">
          <h1 className="text-8xl text-red-800 tracking-wide font-serif italic">
            Sudden attraction
          </h1>
        </div>

        <ClientPage
          photos={photos}
          genderFilter={gender}
          photoGenders={photoGenders}
        />
      </main>
    </div>
  );
}
