//* === Components === *//
import Link from 'next/link'

//* === Styles & Misc. === *//
import styles from './ActiveLink.module.scss'
import { NextRouter, useRouter } from 'next/router'

interface Props {
  text: string
  url: string
  ammount?: string
}

export default function ActiveLink({ text, url, ammount }: Props) {
  const router: NextRouter = useRouter()
  return (
    <Link
      href={`/${url}`}
      className={router.pathname === `/${url}` ? styles.active : ''}
    >
      {text}
      {ammount ? <small className={styles.ammount}>{ammount}</small> : ''}
    </Link>
  )
}
