"use client"

import { useState } from "react"
import { gdatetext } from "../lib/GenerateText"

export default function SelectCrit() {

  const [selected, setSelected] = useState<string[]>([])

  const toggle = (value: string) => {
    setSelected(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    )
  }

  const [presentation,attributes] = gdatetext("men")

  const groups = [
    { title: "jag är...", data: attributes[0] },
    { title: "Jag söker ...", data: attributes[1] },
    { title: "Jag kan ge dig ...", data: attributes[2] }
  ]

  return (
    <div className="grid grid-cols-3 gap-8">

      {groups.map((group, gIndex) => (
        <fieldset key={gIndex}>
          <legend className="font-semibold mb-2">{group.title}</legend>

          {group.data.map((x: string) => {
            const id = `${gIndex}-${x}`

            return (
              <div key={id}>
                <input
                  type="checkbox"
                  id={id}
                  checked={selected.includes(id)}
                  onChange={() => toggle(id)}
                />
                <label htmlFor={id} className="ml-2">{x}</label>
              </div>
            )
          })}
        </fieldset>
      ))}

    </div>
  )
}
