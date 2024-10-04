import Link from 'next/link'
// import ShoppingCart from './../ShoppingCart'
import { validateAccessToken } from '../../../../utils/auth/validateAccessToken'
import styles from './Header.module.sass'
import dynamic from 'next/dynamic'
import { Logout } from '../../logout'
// import { useState } from 'react'

const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), { ssr: false })

export const Header = async () => {
  const customer = await validateAccessToken();
  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<Logout customer={customer}/>) : (<Link href="/login">Login</Link>)}
        <NoSSRShoppingCart />
      </div>
    </header>)
}