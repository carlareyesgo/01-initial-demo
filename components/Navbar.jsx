import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/">Contact</Link>
        </nav>
    )
}
