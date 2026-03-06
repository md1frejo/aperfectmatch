type Props = {
  text?: string[] 
}

export function PresentationText({ text = [] }: Props) {

  return (
    <>
      {text.map((line, i) => (
        <p key={i} className="mt-2 text-sm text-black">
          {line}
        </p>
      ))}
    </>
  )
}
