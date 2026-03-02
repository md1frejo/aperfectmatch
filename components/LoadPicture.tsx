"use client"

import { useState } from "react"

export default function LoadPicture({onImageChange,}: {
  
  onImageChange: (image: string) => void
}) {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

      const reader = new FileReader()
        reader.onloadend = () => {
        onImageChange(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <input type="file" accept="image/*" onChange={handleFile} className="mb-2"/>
  )
}
