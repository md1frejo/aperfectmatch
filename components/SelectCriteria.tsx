"use client"

import { gdatetext } from "@/lib/GenerateText"

type Props = {
  selected: string[]
  setSelected: React.Dispatch<React.SetStateAction<string[]>>
}

// get attribute list
const [, attributes] = gdatetext("men")

// split into 3 columns
const columnSize = Math.ceil(attributes.length / 3)

const col1 = attributes.slice(0, columnSize)
const col2 = attributes.slice(columnSize, columnSize * 2)
const col3 = attributes.slice(columnSize * 2)

export default function SelectCriteria({ selected, setSelected }: Props) {

  function toggle(value: string) {

    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value))
    } else {
      setSelected([...selected, value])
    }

  }

  function renderColumn(list: string[]) {

    return list.map((opt) => (

      <label key={opt} className="flex items-center gap-2">

        <input
          type="checkbox"
          checked={selected.includes(opt)}
          onChange={() => toggle(opt)}
        />

        {opt}

      </label>

    ))

  }

  return (

    <div className="accent-blue-600 grid grid-cols-3 gap-6">

      <div className="flex flex-col gap-2">
      <h1>jag är:</h1>
        {renderColumn(col1)}
      </div>

      <div className="flex flex-col gap-2">
      <h1>jag söker:</h1>
        {renderColumn(col2)}
      </div>

      <div className="flex flex-col gap-2">
      <h1>jag ger dig:</h1>
        {renderColumn(col3)}
      </div>

    </div>

  )
}
