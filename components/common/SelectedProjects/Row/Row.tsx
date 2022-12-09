import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import styles from './Row.module.scss'

interface Props {
  title: string
  path: string
  timeline: Variants
  animation: {
    lineAnimation: Variants
    buttonAnimation: Variants
  }
}

export default function Row({ title, path, timeline, animation }: Props) {
  return (
    <Link href={path} className={styles.container}>
      <motion.span
        className={styles.title}
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
      >
        <motion.span variants={animation.lineAnimation}>{title}</motion.span>
        <motion.span
          variants={animation.buttonAnimation}
          className={styles.arrow}
        ></motion.span>
      </motion.span>
    </Link>
  )
}
