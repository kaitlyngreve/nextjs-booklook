import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase-config';

import Head from 'next/head'
import Link from 'next/link';
import Login from '../components/login';
import Signout from "../components/signout";
import Hero from "src/components/hero.js"

import styles from '/src/styles/mainPage.module.css';

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
              <Hero />
              <Link href={'/bookshelf'}>My Bookshelf</Link>
            </main>
          </div>
          <Signout />
        </div>
        :
        <>
          <Head>
            <title>Book Look</title>
          </Head>
          <Hero />
          <Login />
        </>
      }
    </>
  )
}
