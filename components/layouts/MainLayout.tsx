import Head from 'next/head'
import { FC } from 'react';
import { Navbar } from '../Navbar'
import  styles  from './MainLayout.module.css'

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({children}) => {
    return (
        <>
          <Head>
            <title>Home Carla</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
        <Navbar/>
    
    
          <main className={styles.main}>
           {children}
          </main>
        </>
      )
}
