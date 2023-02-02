import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import {Navbar} from '../../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Carla</title>
        <meta name="description" content="Contact Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h1>Contact Page</h1>
        <h1 className={styles.title}>
         {/*  Ir a <a href="/">Home</a> */}
         Ir a <Link href="/">Home</Link>
        </h1>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/contact.jsx</code>
          </p>
        </div>
      </main>
    </>
  )
}
