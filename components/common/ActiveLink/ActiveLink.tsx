//* === Components === *//
import Link from 'next/link'

//* === Styles & Misc. === *//
import styles from './ActiveLink.module.scss'
import { NextRouter, useRouter } from 'next/router'

interface Props {
  text: string
  url: string
  amount?: number
}

export default function ActiveLink({ text, url, amount }: Props) {
  const router: NextRouter = useRouter()
  return (
    <Link
      href={`/${url}`}
      className={router.pathname === `/${url}` ? styles.active : ''}
    >
      {text}
      {amount ? <small className={styles.amount}>{amount}</small> : ''}
    </Link>
  )
}
