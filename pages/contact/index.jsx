import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { Navbar } from '../../components/Navbar'
import { MainLayout } from '../../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className={'title'}>
        {/*  Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/contact.jsx</code>
        </p>
      </div>
    </MainLayout>
  )
}
