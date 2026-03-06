"use client"

import { useState } from "react"

export default function SelectCrit() {

  const [options, setOptions] = useState<boolean[]>(
    [false, false, false, false, false, false]
  )

  const handleChange = (index: number) => {
    const updated = [...options]
    updated[index] = !updated[index]
    setOptions(updated)
  }

  return (
    <fieldset>
      <legend>Välj dina egenskaper</legend>

      <div>
        <input type="checkbox" id="snygg" checked={options[0]} onChange={() => handleChange(0)} />
        <label htmlFor="snygg">Snygg</label>
      </div>

      <div>
        <input type="checkbox" id="ful" checked={options[1]} onChange={() => handleChange(1)}/>
        <label htmlFor="ful">Ful</label>
      </div>

      <div>
        <input type="checkbox" id="rik" checked={options[2]} onChange={() => handleChange(2)}/>
        <label htmlFor="rik">Rik</label>
      </div>

      <div>
        <input type="checkbox" id="fattig" checked={options[3]} onChange={() => handleChange(3)}/>
        <label htmlFor="fattig">Fattig</label>
      </div>

      <div>
        <input type="checkbox" id="snäll" checked={options[4]} onChange={() => handleChange(4)}/>
        <label htmlFor="snäll">snäll</label>
      </div>

      <div>
        <input type="checkbox" id="elak" checked={options[5]} onChange={() => handleChange(5)}/>
        <label htmlFor="elak">elak</label>
      </div>

      <p>Result: {JSON.stringify(options)}</p>
    </fieldset>
  )
}
