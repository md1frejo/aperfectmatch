"use client"

import { useState } from "react"
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

  const [selectedImage, setSelectedImage] = useState<{
    src: string
    index: number
  } | null>(null)

  const [customProfiles, setCustomProfiles] = useState<{
    image: string
    text: string
  }[]>([])

  const handleCreate = (profile: { image: string; text: string }) => {
    setCustomProfiles((prev) => [profile, ...prev])
  }

  return (
    <>
      <CreateNew onCreate={handleCreate} />

      <div className="grid grid-cols-6 gap-4">

        {/* Custom profiles */}
        {customProfiles.map((profile, index) => (
          <div key={"custom-" + index} className="flex flex-col w-full h-auto">
            <img
              src={profile.image}
              className="rounded cursor-pointer hover:scale-105 transition"
              onClick={() =>
                setSelectedImage({ src: profile.image, index })
              }
            />
            <PresentationText text={profile.text} />
          </div>
        ))}

        {/* API photos */}
        {photos.map((photo, key) => (
          <div key={photo.id} className="flex flex-col w-full h-auto">
            <img
              src={photo.urls.small}
              alt={photo.alt_description ?? ""}
              className="rounded cursor-pointer hover:scale-105 transition"
              onClick={() =>
                setSelectedImage({ src: photo.urls.small, index: key })
              }
            />
            <PresentationText text={gdatetext(gender[key])} />
          </div>
        ))}
      </div>

      {/* Modal viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            className="max-w-[90%] max-h-[70%] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="bg-white p-4 rounded mt-4 max-w-md text-center">
            <PresentationText
              text={gdatetext(gender[selectedImage.index])}
            />
          </div>
        </div>
      )}
    </>
  )
}
