//* === Components === *//
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ActiveLink from '@/components/common/ActiveLink/ActiveLink'

//* === Styles & Utils === *//
import { delay, motion } from 'framer-motion'
import styles from './Header.module.scss'

//* === Variants * === //
const timeline = {
  animate: {
    transition: {
      // staggerChildren: 0.1,
    },
  },
}

interface Props {
  home: boolean
}

export default function Header({ home }: Props) {
  const lineAnimation = {
    initial: { y: 200 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
        delay: home ? 3 : 0
      },
    },
  }

  return (
    <header className={styles.container}>
      <motion.nav
        variants={timeline}
        initial="initial"
        animate="animate"
        transition={{ delay: home ? 2 : 0 }}
      >
        <motion.div className={styles.name} variants={lineAnimation}>
          <Link href={'/'}>Mauricio Lovera</Link>
        </motion.div>
        <motion.div className={styles.title} variants={lineAnimation}>
          <span>Full Stack Web Developer</span>
          <Link href={'https://github.com/mauLovera'}>
            <FaGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/mauriciolovera001/'}>
            <FaLinkedin />
          </Link>
        </motion.div>
        <motion.div className={styles.links} variants={lineAnimation}>
          <ActiveLink text="Projects" url="projects" ammount="4" />
          <ActiveLink text="About" url="about" />
          <ActiveLink text="Contact" url="contact" />
        </motion.div>
      </motion.nav>
    </header>
  )
}
