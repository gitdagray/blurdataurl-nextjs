import Link from "next/link"

export default function Home() {

  return (
    <main className="text-6xl flex flex-col gap-20 justify-center items-center min-h-screen">

      <h1>blurDataURL Examples</h1>

      <Link href="/static" className="underline">Static</Link>

      <Link href="/dynamic" className="underline">Dynamic</Link>

    </main>
  )
}
