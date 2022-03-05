import React from 'react'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <div className={styles.navbar}>
            <span className={styles.logo}>Work@t</span>
            <ul className={styles.navBox}>
                <li className={styles.navItem}><Link href = '/'>Home</Link></li>
                <li className={styles.navItem}><Link href = '/Hire'>Hire</Link></li>
                <li className={styles.navItem}><Link href = '/Contact'>Contact</Link></li>
                <li className={styles.navItem}><Link href = '/Signup'>SignUp</Link></li>
                <li className={styles.navItem}><Link href = '/Login'>Login</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar