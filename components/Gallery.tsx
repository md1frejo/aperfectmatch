"use client"

import { useState, useEffect } from "react"
import { PresentationText } from "./Presentation"
import { gdatetext } from "@/lib/GenerateText"
import CreateNew from "./CreateNew"

type Photo = {
  id: string
  alt_description: string | null
  urls: {
    small: string
  }
}

export default function Gallery({
  photos,
  gender,
}: {
  photos: Photo[]
  gender: string[]
}) {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const [customProfiles, setCustomProfiles] = useState<{
    image: string
    text: string
  }[]>([])

  const handleCreate = (profile: { image: string; text: string }) => {
    setCustomProfiles((prev) => [profile, ...prev])
  }

  const totalImages = photos.length

  // keyboard controls
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (selectedIndex === null) return

      if (e.key === "Escape") setSelectedIndex(null)

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
      <CreateNew onCreate={handleCreate} />

      <div className="grid grid-cols-6 gap-4">

        {/* custom profiles */}
        {customProfiles.map((profile, index) => (
          <div key={"custom-" + index} className="flex flex-col w-full">
            <img
              src={profile.image}
              className="rounded cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedIndex(index)}
            />
            <PresentationText text={profile.text} />
          </div>
        ))}

        {/* api photos */}
        {photos.map((photo, index) => (
          <div key={photo.id} className="flex flex-col w-full">
            <img
              src={photo.urls.small}
              alt={photo.alt_description ?? ""}
              className="rounded cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedIndex(index)}
            />
            <PresentationText text={gdatetext(gender[index])} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <img
            src={photos[selectedIndex].urls.small}
            className="max-w-[90%] max-h-[70%] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="bg-white p-4 rounded mt-4 max-w-md text-center">
            <PresentationText text={gdatetext(gender[selectedIndex])} />
          </div>

          <button
            className="absolute left-6 text-white text-4xl"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(
                (selectedIndex - 1 + totalImages) % totalImages
              )
            }}
          >
            ←
          </button>

          <button
            className="absolute right-6 text-white text-4xl"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(
                (selectedIndex + 1) % totalImages
              )
            }}
          >
            →
          </button>
        </div>
      )}
    </>
  )
}
