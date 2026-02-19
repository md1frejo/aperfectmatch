 type Props = {
  text: string | null
}

export function PresentationText({ text }: Props) {
  return (
    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
    {text ?? "no description available"}
    </p>
  )
}
