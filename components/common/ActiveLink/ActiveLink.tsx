import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import styles from './ActiveLink.module.scss'


interface Props {
  text: string
  url: string
}

export default function ActiveLink({ text, url }: Props) {
  const router: NextRouter = useRouter()
  return (
    <Link
      href={`/${url}`}
      className={router.pathname === `/${url}` ? styles.active : ''}
    >
      {text}
    </Link>
  )
}
