type Props = {
  text?: string[] 
}

export function PresentationText({ text = [] }: Props) {

  return ( 
     <div className="bg-blue-100">
      {text.map((line, i) => (
        <p key={i} className="mt-2 text-black w-full text-2xl">
          {line}
        </p>
      ))}
    </div>
  )
}
