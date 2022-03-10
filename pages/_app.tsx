import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <Image src="/github.svg" alt="Vercel Logo" width={24} height={24} />
          <a href="https://angkasa27.github.io" className="font-semibold">
            angkasa27
          </a>
        </a>
      </footer>
    </>
  )
}

export default MyApp
