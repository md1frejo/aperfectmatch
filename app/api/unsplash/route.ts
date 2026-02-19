import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get("q") ?? "woman face"
  const perPage = searchParams.get("per_page") ?? "12"

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
      cache: "no-store",
    }
  )

  if (!res.ok) {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
