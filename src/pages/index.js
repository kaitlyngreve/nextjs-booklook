import Head from 'next/head'
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Head>
        <title>Book Look</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main>
          <Link href={'/books/search'}>click here</Link>
        </main>
      </div>
    </>
  )
}
