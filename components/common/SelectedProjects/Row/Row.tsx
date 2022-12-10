import Link from 'next/link'
import styles from './Row.module.scss'
import { motion, Variants } from 'framer-motion'
import { RiArrowRightCircleFill } from 'react-icons/ri'

interface Props {
  title: string
  tech: string[]
  path: string
  timeline: Variants
  animation: {
    lineAnimation: Variants
    buttonAnimation: Variants
  }
}

export default function Row({ title, tech, path, timeline, animation }: Props) {
  return (
    <Link href={path} className={styles.container}>
      <motion.span
        className={styles.titleContainer}
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
      >
        <motion.span
          variants={animation.lineAnimation}
          className={styles.title}
        >
          {title}
        </motion.span>
      </motion.span>
      <motion.span
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        className={styles.techContainer}
      >
        <motion.span
          variants={animation.lineAnimation}
          className={styles.tech}
        >
          {tech}
        </motion.span>
      </motion.span>
      <motion.span
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        className={styles.button}
      >
        <motion.span
          variants={animation.buttonAnimation}
          className={styles.arrow}
        >
          <RiArrowRightCircleFill />
        </motion.span>
      </motion.span>
    </Link>
  )
}
