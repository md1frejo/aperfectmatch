type Props = {
  text?: string[] 
}

export function PresentationText({ text = [] }: Props) {

  return ( 
     <div className="bg-sky-200/50">
      {text.map((line, i) => (
        <p key={i} className="mt-2 text-blue w-full text-1xl">
          {line}
        </p>
      ))}
    </div>
  )
}

