"use client"

import { useState } from "react"
import Gallery from "./Gallery"
import GenderToggle from "./GenderToggle"
import getmatchp from "./Selection"

type Props = {
  photos: any[]
  genderFilter: string
  photoGenders: string[]
}

export default function ClientPage({ photos, genderFilter, photoGenders }: Props) {
  const [activated, setActivated] = useState(false)
  const [gender, setGender] = useState(genderFilter)
  const [matchedPhotos, setMatchedPhotos] = useState<any[] | null>(null)

  // Base photos filtered by gender
  const basePhotos = gender === "mix"
    ? photos
    : photos.filter((_, i) => photoGenders[i] === gender)

  const baseGenders = gender === "mix"
    ? photoGenders
    : photoGenders.filter((g) => g === gender)

  // Callback for CreateNew → match
  const handleMatch = (selected: string[]) => {
    // Match against basePhotos + their text (use getmatchp)
    const matches = getmatchp(selected, basePhotos)
    setMatchedPhotos(matches)
  }

  // Decide which photos to display: matched or base
  const visiblePhotos = matchedPhotos ?? basePhotos
  const visibleGenders = matchedPhotos ? matchedPhotos.map(() => gender) : baseGenders

  return (
    <>
      <GenderToggle
        gender={gender}
        setGender={setGender}
        activated={activated}
        setActivated={setActivated}
      />

      <Gallery
        photos={visiblePhotos}
        gender={visibleGenders}
        activated={activated}
        onMatch={handleMatch}
      />
    </>
  )
}
