import { PresentationText } from "./Presentation"
import { gdatetext } from "@/lib/GenerateText"

export default function Gallery({photos,gender,}: {
  photos: Photo[]
  gender: string
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="flex flex-col">
          <img
            src={photo.urls.small}
            alt={photo.alt_description ?? ""}
            className="rounded"/>
          <PresentationText text={gdatetext(gender)} />
        </div>
      ))}
    </div>
  )
}
