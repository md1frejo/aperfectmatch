"use client"

type Props = {
  activated: boolean
  setActivated: (v: boolean) => void
}

export default function GenderToggle({ activated, setActivated }: Props) {

  const setGender = (gender: string) => {
    // Update the URL and reload the page to fetch correct photos
    const params = new URLSearchParams(window.location.search)
    params.set("gender", gender)
    window.location.href = `/?${params.toString()}`
  }

  return (
    <div className="flex gap-4 mb-8">

      <button
        onClick={() => setActivated(!activated)}
        className={`px-4 py-2 rounded ${
          activated ? "bg-black text-white" : "bg-zinc-200 dark:bg-zinc-700"
        }`}
      >
        Registrera
      </button>

      <button
        onClick={() => setGender("mix")}
        className={`px-4 py-2 rounded ${
          new URLSearchParams(window.location.search).get("gender") === "mix"
            ? "bg-black text-white"
            : "bg-zinc-200 dark:bg-zinc-700"
        }`}
      >
        Mix
      </button>

      <button
        onClick={() => setGender("women")}
        className={`px-4 py-2 rounded ${
          new URLSearchParams(window.location.search).get("gender") === "women"
            ? "bg-black text-white"
            : "bg-zinc-200 dark:bg-zinc-700"
        }`}
      >
        Kvinnor
      </button>

      <button
        onClick={() => setGender("men")}
        className={`px-4 py-2 rounded ${
          new URLSearchParams(window.location.search).get("gender") === "men"
            ? "bg-black text-white"
            : "bg-zinc-200 dark:bg-zinc-700"
        }`}
      >
        Män
      </button>

    </div>
  )
}


