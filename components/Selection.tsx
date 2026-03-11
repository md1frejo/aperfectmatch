"use client"

import { useState } from "react"
import SelectCrit from "./SelectCriteria"
import GenderToggle from "./GenderToggle"

export default function getmathp(selected: string[], photos: any[]) {

  const photoTexts = photos.map((p) => ({
    photo: p,
    text: p.alt_description ?? "",
  }))

  const matches = photoTexts.filter((p) =>
    selected.some((crit) =>
      p.text.toLowerCase().includes(crit.toLowerCase())
    )
  )

  return matches.map((m) => m.photo)
}
