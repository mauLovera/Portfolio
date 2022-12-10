import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './Header.module.scss'

import ActiveLink from '@/components/common/ActiveLink/ActiveLink'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.7, delay: 2 }}
      className={styles.container}
    >
      <nav>
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
          <ActiveLink text="Projects" url="projects" ammount="2" />
          <ActiveLink text="About" url="about" />
          <ActiveLink text="Contact" url="contact" />
        </div>
      </nav>
    </motion.header>
  )
}
