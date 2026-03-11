"use client"

import { useState } from "react"
import Gallery from "./Gallery"
import GenderToggle from "./GenderToggle"

type Props = {
  photos: any[]
  genderFilter: string
  photoGenders: string[]
}

export default function ClientPage({ photos, genderFilter, photoGenders }: Props) {

const [activated, setActivated] = useState(false)
const [gender, setGender] = useState(genderFilter)

const basePhotos =
  gender === "mix"
    ? photos
    : photos.filter((_, i) => photoGenders[i] === gender)

const baseGenders =
  gender === "mix"
    ? photoGenders
    : photoGenders.filter((g) => g === gender)

return (
<>
  <GenderToggle
    gender={gender}
    setGender={setGender}
    activated={activated}
    setActivated={setActivated}
  />

  <Gallery
    photos={basePhotos}
    gender={baseGenders}
    activated={activated}
  />
</>
)
}
