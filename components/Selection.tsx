"use client"

import { useState } from "react"
import SelectCrit from "./SelectCriteria"
import choosePicture from "../lib/choosePicture"

export default function Page() {

  const [selected, setSelected] = useState<string[]>([])

  const handleMatch = () => {
    const result = choosePicture(selected)

      }

  return (
    <div>
      <SelectCrit selected={selected} setSelected={setSelected} />

      <button onClick={handleMatch}>
        Find Match
      </button>
    </div>
  )
}
