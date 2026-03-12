type Props = {
  text?: unknown
}

export function PresentationText({ text }: Props) {

  let lines: string[] = []

  if (typeof text === "string") {
    lines = [text]
  } else if (Array.isArray(text)) {
    lines = text.filter((v): v is string => typeof v === "string")
  }

  return (
    <div className="bg-sky-200/50">
      {lines.map((line, i) => (
        <p key={i} className="mt-2 text-blue w-full text-xl">
          {line}
        </p>
      ))}
    </div>
  )
}
