//* === Components === *//
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ActiveLink from '@/components/common/ActiveLink/ActiveLink'

//* === Styles & Utils === *//
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './Header.module.scss'

//* === Variants * === //
const timeline = {
  animate: {},
}

interface Props {
  home: boolean
  numberOfProjects: number
}

export default function Header({ home, numberOfProjects }: Props) {
  const lineAnimation = {
    initial: { y: 200 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
        delay: home ? 1.5 : 0,
      },
    },
  }

  const [active, setActive] = useState<boolean>(false)

  function handleClick() {
    setActive(!active)
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
          <span>Full-Stack Software Engineer</span>
          <Link href={'https://github.com/mauLovera'}>
            <FaGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/mauriciolovera001/'}>
            <FaLinkedin />
          </Link>
        </motion.div>
        <motion.div className={styles.links} variants={lineAnimation}>
          <ActiveLink text="Home" url="" />
          <ActiveLink text="Projects" url="projects" amount={numberOfProjects} />
          <ActiveLink text="About" url="about" />
          <ActiveLink text="Contact" url="contact" />
        </motion.div>
        <motion.div className={styles.menu} variants={lineAnimation}>
          <span onClick={() => handleClick()}>Menu</span>
          <div
            className={styles.navigation}
            style={
              active
                ? { display: 'flex' }
                : { display: 'none', background: 'transparent' }
            }
          >
            <ActiveLink text="Home" url="" />
            <ActiveLink text="Projects" url="projects" amount={numberOfProjects} />
            <ActiveLink text="About" url="about" />
            <ActiveLink text="Contact" url="contact" />
            <div className={styles.icons}>
              <Link href={'https://github.com/mauLovera'}>
                <FaGithub />
              </Link>
              <Link href={'https://www.linkedin.com/in/mauriciolovera001/'}>
                <FaLinkedin />
              </Link>
            </div>
            <div className={styles.exit} onClick={() => handleClick()}>
              X
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </header>
  )
}
