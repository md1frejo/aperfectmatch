"use client"

import { useState, useEffect } from "react"
import { PresentationText } from "./Presentation"
import { gdatetext } from "@/lib/GenerateText"
import CreateNew from "./CreateNew"

type Props = {
photos: any[]
gender: string[]
activated: boolean
}

type GalleryItem = {
image: string
text: string[]
}

export default function Gallery({ photos, gender, activated }: Props) {

const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
const [customProfiles, setCustomProfiles] = useState<GalleryItem[]>([])

const handleCreate = (profile: GalleryItem) => {
setCustomProfiles((prev) => [profile, ...prev])
}

const apiProfiles: GalleryItem[] = photos.map((photo, i) => ({
image: photo.urls.small,
text: gdatetext(gender[i])[0],
}))

const allProfiles: GalleryItem[] = [...customProfiles, ...apiProfiles]
const totalImages = allProfiles.length

useEffect(() => {

function handleKey(e: KeyboardEvent) {

  if (selectedIndex === null) return

  if (e.key === "Escape") {
    setSelectedIndex(null)
  }

  if (e.key === "ArrowRight") {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % totalImages : null
    )
  }

  if (e.key === "ArrowLeft") {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + totalImages) % totalImages : null
    )
  }

}

window.addEventListener("keydown", handleKey)
return () => window.removeEventListener("keydown", handleKey)
}, [selectedIndex, totalImages])

return (
<>

{activated && (
  <div className="mb-8">
    <CreateNew onCreate={handleCreate} />
  </div>
)}


  <div className="grid grid-cols-6 gap-4">

    {allProfiles.map((profile, index) => (
      <div key={index} className="flex flex-col w-full">

        <img
          src={profile.image}
          className="rounded cursor-pointer hover:scale-105 transition"
          onClick={() => setSelectedIndex(index)}
        />

        <PresentationText text={profile.text} />

      </div>
    ))}

  </div>

  {selectedIndex !== null && (
    <div
      className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50"
      onClick={() => setSelectedIndex(null)}
    >

      <img
        src={allProfiles[selectedIndex].image}
        className="max-w-[90%] max-h-[70%] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="bg-gray-800 text-white p-4 rounded mt-4 max-w-md text-center">
        <PresentationText text={allProfiles[selectedIndex].text} />
      </div>

      <button
        className="absolute left-6 text-white text-4xl"
        onClick={(e) => {
          e.stopPropagation()
          setSelectedIndex((selectedIndex - 1 + totalImages) % totalImages)
        }}
      >
        ←
      </button>

      <button
        className="absolute right-6 text-white text-4xl"
        onClick={(e) => {
          e.stopPropagation()
          setSelectedIndex((selectedIndex + 1) % totalImages)
        }}
      >
        →
      </button>

    </div>
  )}

</>
)
}
