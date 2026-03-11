// Selection.tsx
"use client"

type GalleryPhoto = {
  urls?: { small: string }
  text?: string[] | string
  [key: string]: any
}

/**
 * Match photos based on selected criteria.
 * @param selected - Array of selected strings
 * @param photos - Array of photos (with `text` property)
 * @returns Array of photos that match any of the selected criteria
 */
export default function getmatchp(selected: string[], photos: GalleryPhoto[]): GalleryPhoto[] {
  if (!selected || selected.length === 0) return photos

  return photos.filter((photo) => {
    if (!photo.text) return false
    const lines = Array.isArray(photo.text) ? photo.text : [photo.text]
    // Return true if any selected criterion exists in the photo text
    return selected.some((criterion) =>
      lines.some((line) => line.toLowerCase().includes(criterion.toLowerCase()))
    )
  })
}
