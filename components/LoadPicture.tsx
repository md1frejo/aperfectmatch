"use client"

type Props = {
  onImageChange: (img: string) => void
}

export default function LoadPicture({ onImageChange }: Props) {

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {

    const file = e.target.files?.[0]

    if (!file) return

    const url = URL.createObjectURL(file)

    onImageChange(url)
  }

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleFile}
      className="mb-2"
    />
  )
}
