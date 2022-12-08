import Link from 'next/link'
import ActiveLink from '@/components/common/ActiveLink/ActiveLink'
import styles from './Header.module.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <Link href={'/'} className={styles.name}>
          Mauricio Lovera
        </Link>
        <div className={styles.title}>
          <span>Full Stack Web Developer</span>
          <FaGithub />
          <FaLinkedin />
        </div>
        <div className={styles.links}>
          <ActiveLink text="Projects" url="projects" />
          <ActiveLink text="About" url="about" />
          <ActiveLink text="Contact" url="contact" />
        </div>
      </nav>
    </header>
  )
}
