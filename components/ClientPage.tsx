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

  const [matchedPhotos, setMatchedPhotos] = useState<any[] | null>(null)
  const [activated, setActivated] = useState(false)
  const [gender, setGender] = useState(genderFilter)

  function handleMatch(selected: string[]) {
    const matches = getmatchp(selected, photos)
    setMatchedPhotos(matches)
  }

  const basePhotos =
    gender === "mix"
      ? photos
      : photos.filter((_, i) => photoGenders[i] === gender)

  const filteredPhotos = matchedPhotos ?? basePhotos

  const filteredGenders =
    gender === "mix"
      ? photoGenders
      : photoGenders.filter((g) => g === gender)

  console.log("ClientPage photos:", photos.length)

  return (
    <>
      <GenderToggle
        gender={gender}
        setGender={setGender}
        activated={activated}
        setActivated={setActivated}
      />

      <Gallery
        photos={filteredPhotos}
        gender={filteredGenders}
        activated={activated}
        onMatch={handleMatch}
      />
    </>
  )
}

