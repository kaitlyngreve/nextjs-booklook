import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase-config';

import Head from 'next/head'
import Link from 'next/link';
import Login from './login';
import Signout from "./signout";

export default function Home() {
  const [user] = useAuthState(auth);

  const firstName = user ? user.displayName.split(' ')[0] : <Login />;

  return (
    <>
      {user ?
        <div>
          <Head>
            <title>{firstName}'s Books</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div>
            <main>
              <h4>Looking for a Specific Book?</h4>
              <Link href={'/books/search'}>Click Here</Link>
            </main>
          </div>
          <Signout />
        </div>
        :
        <>
          <Head>
            <title>Login to BookLook</title>
          </Head>
          <Login />
        </>
      }
    </>
  )
}
