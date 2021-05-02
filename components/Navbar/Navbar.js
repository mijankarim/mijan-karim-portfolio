import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
           <nav>
               <ul>
                   <li><Link href="/about">About</Link></li>
                   <li><Link href="/contact">Contact</Link></li>
               </ul>
           </nav>

        </div>
    )
}

export default Navbar;
