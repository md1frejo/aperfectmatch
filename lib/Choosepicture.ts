type Photo = {
  id: string
  urls: { small: string }
}

export default function selection(
  photos: Photo[],
  selected: string[]
) {

  if (!photos.length) return null

  let bestPhoto = photos[0]
  let bestScore = -1

  for (const photo of photos) {

    let score = 0

    // example scoring logic
    for (const s of selected) {
      if (photo.alt_description?.includes(s)) {
        score++
      }
    }

    if (score > bestScore) {
      bestScore = score
      bestPhoto = photo
    }
  }
   return bestPhoto
}
