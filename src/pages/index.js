import Head from 'next/head'

export default function Home() {


  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=search+terms&printType=books`
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Book Look</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main>
          <button onClick={callAPI}>Make API Call</button>
        </main>
      </div>
    </>
  )
}
