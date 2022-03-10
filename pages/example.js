import Link from 'next/link'

const example = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold">This is example page</h1>

        <Link href="/">
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-20 cursor-pointer text-xl"
          >
            &larr; Back to home
          </a>
        </Link>
      </main>
    </div>
  )
}

export default example
