type Props = {
  text: string | null
}

export function PresentationText({ text }: Props) {
  const ptext: string = text ?? "nothing"

  const summary: string[] = []
  const parts = ptext.split(".")

  summary.push(parts[0])
  summary.push(parts[1])
  summary.push(parts[2])

  return (
    <>
    <p className="mt-2 text-sm text-black">{summary[0]}</p>
    <p className="mt-2 text-sm text-black">{summary[1]}</p>
    <p className="mt-2 text-sm text-black">{summary[2]}</p>
    </>
  )
}
