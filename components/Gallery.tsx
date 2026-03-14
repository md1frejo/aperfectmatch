"use client"

import { useState, useEffect } from "react"
import { PresentationText } from "./Presentation"
import { gdatetext } from "@/lib/GenerateText"
import CreateNew from "./CreateNew"
import getmatchp from "./Selection"
import { useMemo } from "react"
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

  const [customProfiles, setCustomProfiles] = useState<GalleryItem[]>([])
  const [matchedProfiles, setMatchedProfiles] = useState<GalleryItem[] | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)

function handleReset() {
  setMatchedProfiles(null)
}
  // Create profile
  function handleCreate(profile: GalleryItem) {
    setCustomProfiles((prev) => [profile, ...prev])
  }
function handleMatch(selected: string[], newProfile: GalleryItem) {

  const matches = getmatchp(selected, apiProfiles)

  const result = [newProfile, ...matches]

  setMatchedProfiles(result)
}
const apiProfiles: GalleryItem[] = useMemo(() => {
  return photos.map((photo, i) => ({
    image: photo.urls.small,
    text: gdatetext(gender[i])[0],
  }))
}, [photos, gender])
   const allProfiles: GalleryItem[] = [...customProfiles, ...apiProfiles]

   // default gallery = only API profiles
   const visibleProfiles = matchedProfiles ?? apiProfiles

  // Keyboard navigation
  useEffect(() => {

    function handleKey(e: KeyboardEvent) {

      if (selectedIndex === null) return

      if (e.key === "Escape") setSelectedIndex(null)

      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % visibleProfiles.length : null
        )
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null
            ? (prev - 1 + visibleProfiles.length) % visibleProfiles.length
            : null
        )
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)

  }, [selectedIndex, visibleProfiles.length])

  return (
    <>

      {activated && (
        <div className="mb-8">
          <CreateNew
            onCreate={handleCreate}
            onMatch={handleMatch}
          />
        </div>
      )}
{matchedProfiles && (
  <div className="mb-6 flex justify-center">

    <button
      onClick={handleReset}
      className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
    >
      reset
    </button>

  </div>
)}
      {/* Gallery grid */}

      <div className="grid grid-cols-6 gap-4">

        {visibleProfiles.map((profile, index) => (

          <div key={profile.image} className="flex flex-col">

            <img
              src={profile.image}
              className="rounded cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedIndex(index)}
            />

            <PresentationText text={profile.text} />

          </div>

        ))}

      </div>

      {/* Lightbox viewer */}

      {selectedIndex !== null && (

        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setSelectedIndex(null)}>

          <div
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={visibleProfiles[selectedIndex].image}
              className="max-w-[90vw] max-h-[70vh] rounded-xl shadow-2xl"
              onTouchStart={(e) =>
                setTouchStart(e.touches[0].clientX)
              }
              onTouchEnd={(e) => {

                if (!touchStart) return

                const touchEnd = e.changedTouches[0].clientX
                const diff = touchStart - touchEnd

                if (diff > 50) {
                  setSelectedIndex(
                    (selectedIndex + 1) % visibleProfiles.length
                  )
                }

                if (diff < -50) {
                  setSelectedIndex(
                    (selectedIndex - 1 + visibleProfiles.length) %
                      visibleProfiles.length
                  )
                }

              }}
            />

            <div className="bg-gray-900 text-white p-4 rounded-lg mt-4 max-w-md text-center">
              <PresentationText text={visibleProfiles[selectedIndex].text} />
            </div>

            {/* Left arrow */}

            <button
              className="absolute left-[-70px] text-white text-5xl hover:scale-125 transition"
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + visibleProfiles.length) %
                    visibleProfiles.length
                )
              }
            >
              ←
            </button>

            {/* Right arrow */}

            <button
              className="absolute right-[-70px] text-white text-5xl hover:scale-125 transition"
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex + 1) % visibleProfiles.length
                )
              }
            >
              →
            </button>

            {/* Close button */}

            <button
              className="absolute top-[-50px] right-0 text-white text-3xl"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

          </div>

        </div>

      )}

    </>
  )
}
