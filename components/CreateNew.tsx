"use client"

import { useState } from "react"
import LoadPicture from "./LoadPicture"

type CreateNewProps = {
  onCreate: (profile: { image: string; text: string }) => void
}

export default function CreateNew({ onCreate }: CreateNewProps) {
  const [image, setImage] = useState("")
  const [text, setText] = useState("")

  const handleSubmit = () => {
    if (!image || !text) return
    onCreate({ image, text })
    setImage("")
    setText("")
  }

  return (
    <div className="mb-8 p-4 border rounded">
      <LoadPicture onImageChange={setImage} />

      <textarea
        placeholder="Write something about yourself..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Create Profile
      </button>
    </div>
  )
}
