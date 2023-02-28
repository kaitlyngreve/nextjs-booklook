import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase-config';
import { useState } from "react";

import Head from 'next/head'
import Link from 'next/link';
import Login from './login';

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
              <Link href={'/books/search'}>click here</Link>
            </main>
          </div>
        </div>
        :
        <Login />
      }
    </>
  )
}
