"use client"

import { useState } from "react"
import LoadPicture from "./LoadPicture"
import SelectCrit from "@/components/SelectCriteria"
import getmathp from "./Selection"

type CreateNewProps = {
  photos: any[]
  onCreate: (profile: { image: string; text: string[] }) => void
}

export default function CreateNew({ onCreate }: CreateNewProps) {

//  const matches = getMatchp(selected, photos)
//  console.log(matches)

  const [image, setImage] = useState("")
  const [text, setText] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])
  const handleSubmit = () => {

    if (!image || text.length === 0) return

    getmathp(selected)
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
