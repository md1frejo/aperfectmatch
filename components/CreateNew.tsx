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

console.log("submit clicked")

if(!image || text.length===0){
console.log("missing image or text")
return
}

onCreate({image,text})
onMatch(selected)

setImage("")
setText([])
}

return(

<div className="flex flex-row gap-6 bg-sky-100/50 p-4 rounded">

<SelectCrit selected={selected} setSelected={setSelected}/>

<div className="w-96">

<LoadPicture onImageChange={setImage}/>

<textarea
placeholder="berätta om dig själv ..."
value={text.join("\n")}
onChange={(e)=>setText(e.target.value.split("\n"))}
className="w-full p-2 border rounded mb-2"
/>

<button
onClick={handleSubmit}
className="bg-black text-white px-4 py-2 rounded"
>

skapa profil och matcha mig

</button>

</div>

</div>
)
}
