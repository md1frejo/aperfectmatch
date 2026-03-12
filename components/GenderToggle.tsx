"use client"

type Props = {
  gender: string
  setGender: (g: string) => void
  activated: boolean
  setActivated: (v: boolean) => void
  matchp: boolean
  setMatchp: (g: boolean) => void
}

export default function GenderToggle({ gender, setGender, activated, setActivated, setMatchp, matchp }: Props) {

  return (
    <div className="flex gap-4 mb-8">


      <button onClick={() => setActivated(!activated)} className={`px-4 py-2 rounded ${activated ? "bg-black text-white" : "bg-zinc-200 dark:bg-zinc-700"}`}>
        Registrera och matcha
      </button>

      <button
        onClick={() => setGender("mix")}
        className={`px-4 py-2 rounded ${gender === "mix" ? "bg-black text-white" : "bg-zinc-200 dark:bg-zinc-700"}`}
      >
        Mix
      </button>

      <button
        onClick={() => setGender("women")}
        className={`px-4 py-2 rounded ${gender === "women" ? "bg-black text-white" : "bg-zinc-200 dark:bg-zinc-700"}`}
      >
        Kvinnor
      </button>

      <button
        onClick={() => setGender("men")}
        className={`px-4 py-2 rounded ${gender === "men" ? "bg-black text-white" : "bg-zinc-200 dark:bg-zinc-700"}`}
      >
        Män
      </button>

    </div>
  )
}
