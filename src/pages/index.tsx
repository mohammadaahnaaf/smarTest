import Head from 'next/head'
import { Home } from '@ahnafya/components'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>SmarTest | Home</title>
      </Head>
      <div className={`grid bg-white dark:bg-black min-h-screen ${inter.className}`}>
        <Home />
      </div>
    </>
  )
}
