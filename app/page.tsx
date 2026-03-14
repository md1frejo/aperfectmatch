import ClientPage from "@/components/ClientPage";

type Props = {
  searchParams: Promise<{ gender?: string }>;
};

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
    ];

    photos = items.map((i) => i.photo);
    photoGenders = items.map((i) => i.gender);
  }

  return (
    <div className="min-h-screen flex justify-center 
      bg-gradient-to-br 
      from-sky-100 via-blue-50 to-blue-500
      dark:from-zinc-900 dark:via-black dark:to-zinc-900">

      <main className="w-[90%] mx-auto flex flex-col items-center py-12 md:py-16 px-4 sm:px-6">
       <div className="flex justify-center items-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-red-800 tracking-wide font-serif italic leading-tight">
                     Sudden attraction
            </h1>
                <h2 className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-sky-800 tracking-wide font-serif italic">
                     everything good in life comes in pairs
                </h2>
           </div>
       </div>

        {/* Content wrapper */}
        <div className="
          w-full
          rounded-2xl
          bg-white/60
          dark:bg-zinc-900/70
          backdrop-blur-md
          shadow-lg
          p-4 sm:p-6 md:p-8
        ">

          <ClientPage
            photos={photos}
            genderFilter={gender}
            photoGenders={photoGenders}
          />

        </div>

      </main>

    </div>
  );
}
