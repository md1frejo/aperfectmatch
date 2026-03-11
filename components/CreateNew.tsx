"use client"

import { useState } from "react"
import LoadPicture from "./LoadPicture"
import SelectCrit from "@/components/SelectCriteria"
import getmatchp from "./Selection"

type CreateNewProps = {
  photos: any[]
  onCreate: (profile: { image: string; text: string[] }) => void
}

export default function CreateNew({ photos,onCreate }: CreateNewProps) {

  const [image, setImage] = useState("")
  const [text, setText] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])
  const handleSubmit = () => {

  console.log("matches1:",photos)
  const matches = getmatchp(selected, photos)
  console.log("matches2:",matches)

    if (!image || text.length === 0) return

 //   getmatchp(selected)
    onCreate({image,text })
    setImage("")
    setText([])
  }

  return (
    <div className="flex flex-row justify-center items-center gap-8 bg-sky-100/50">	  
      <SelectCrit selected={selected} setSelected={setSelected} />

      <div className="w-100 mb-8 p-4 border rounded">
        <LoadPicture onImageChange={setImage} />

        <textarea
          placeholder="berätta om dig själv ..."
          value={text.join("\n")}
          onChange={(e) => setText(e.target.value.split("\n"))}
          className="w-full p-2 border rounded mb-2"/>

        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 rounded">
          skapa profil
        </button>
      </div>
    </div>
  )
}
