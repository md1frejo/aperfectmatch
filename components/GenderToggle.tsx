"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function GenderToggle({ current }: { current: string }) {

  const router = useRouter()
  const searchParams = useSearchParams()

  const setGender = (gender: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("gender", gender)
    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="flex gap-4 mb-8">

      <button
        onClick={() => setGender("mix")}
        className={`px-4 py-2 rounded ${
          current === "add"
            ? "bg-black text-white"
            : "bg-zinc-200 dark:bg-zinc-700"
        }`}
      >
        Registrera
      </button>

      <button
        onClick={() => setGender("mix")}
        className={`px-4 py-2 rounded ${
          current === "mix"
            ? "bg-black text-white"
            : "bg-zinc-200 dark:bg-zinc-700"
        }`}
      >
        Mix
      </button>

      <button
        onClick={() => setGender("women")}
        className={`px-4 py-2 rounded ${
          current === "women"
            ? "bg-black text-white"
            : "bg-zinc-200 dark:bg-zinc-700"
        }`}
      >
        Kvinnor
      </button>

      <button
        onClick={() => setGender("men")}
        className={`px-4 py-2 rounded ${
          current === "men"
            ? "bg-black text-white"
            : "bg-zinc-200 dark:bg-zinc-700"
        }`}
      >
        Män
      </button>

    </div>
  )
}
