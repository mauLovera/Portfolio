//* === Components === *//
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ActiveLink from '@/components/common/ActiveLink/ActiveLink'

//* === Styles & Utils === *//
import { motion } from 'framer-motion'
import styles from './Header.module.scss'

interface Props {
  home: boolean
}

export default function Header({ home }: Props) {
  return (
    <header className={styles.container}>
      <motion.nav
        initial={{ y: 120 * -1, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1.5, delay: home ? 2 : 0 }}
      >
        <div className={styles.name}>
          <Link href={'/'}>Mauricio Lovera</Link>
        </div>
        <div className={styles.title}>
          <span>Full Stack Web Developer</span>
          <Link href={'https://github.com/mauLovera'}>
            <FaGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/mauriciolovera001/'}>
            <FaLinkedin />
          </Link>
        </div>
        <div className={styles.links}>
          <ActiveLink text="Projects" url="projects" ammount="4" />
          <ActiveLink text="About" url="about" />
          <ActiveLink text="Contact" url="contact" />
        </div>
      </motion.nav>
    </header>
  )
}
