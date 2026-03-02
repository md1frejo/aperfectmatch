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
  gender: string
}) {
  const [customProfiles, setCustomProfiles] = useState<
    { image: string; text: string }[]
  >([])

  const handleCreate = (profile: { image: string; text: string }) => {
    setCustomProfiles((prev) => [profile, ...prev])
  }

  return (
    <>
      <CreateNew onCreate={handleCreate} />

      <div className="grid grid-cols-3 gap-4">
        {/* Custom created profiles */}
        {customProfiles.map((profile, index) => (
          <div key={"custom-" + index} className="flex flex-col">
            <img src={profile.image} className="rounded" />
            <PresentationText text={profile.text} />
          </div>
        ))}

        {photos.map((photo) => (
          <div key={photo.id} className="flex flex-col">
            <img
              src={photo.urls.small}
              alt={photo.alt_description ?? ""}
              className="rounded"
            />
            <PresentationText text={gdatetext(gender)} />
          </div>
        ))}
      </div>
    </>
  )
}
