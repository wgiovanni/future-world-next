import Link from 'next/link'
import styles from './Header.module.sass'
import { validateAccessToken } from '../../../../utils/auth/validateAccessToken'

export const Header = async () => {
  const customer = await validateAccessToken();
  return (
    <header>
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
          {/* <li>
            <Link href="/test">
              Test
            </Link>
          </li> */}
        </ul>
        {customer?.firstName ? (<p>Hola {customer?.firstName}!</p>): (<Link href='/login'>Login</Link>)}
      </nav>
    </header>)
}