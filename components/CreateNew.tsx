"use client"

import { useState } from "react"
import LoadPicture from "./LoadPicture"
import SelectCrit from "@/components/SelectCriteria"

type Props = {
  onCreate:(profile:{image:string,text:string[]})=>void
  onMatch:(selected:string[])=>void
}

export default function CreateNew({ onCreate, onMatch }: Props){

const [image,setImage]=useState("")
const [text,setText]=useState<string[]>([])
const [selected,setSelected]=useState<string[]>([])

function handleSubmit(){

  if(!image || text.length===0){
    console.log("missing image or text")
    return
  }

  onCreate({image,text})
  onMatch(selected)

  setImage("")
  setText([])
}

return (

<div className="flex justify-center">

  <div className="
    flex flex-row gap-6
    w-1/2
    p-6
    rounded-xl
bg-gradient-to-br from-white/60 to-pink-100/50 backdrop-blur-md shadow-xl border border-white/40
  ">

    <SelectCrit selected={selected} setSelected={setSelected}/>

    <div className="w-80 space-y-3">

      <LoadPicture onImageChange={setImage}/>

      <textarea
        placeholder="berätta om dig själv ..."
        value={text.join("\n")}
        onChange={(e)=>setText(e.target.value.split("\n"))}
        className="
          w-full
          p-3
          border
          border-zinc-300
          rounded-lg
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-pink-400
        "
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-rose-600 transition">
        skapa profil och matcha mig
      </button>

    </div>

  </div>

</div>

)
}
