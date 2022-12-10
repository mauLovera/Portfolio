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
  mouseEnter: (text: string) => void
  mouseExit: () => void
}

export default function Row({
  title,
  tech,
  path,
  timeline,
  animation,
  mouseEnter,
  mouseExit,
}: Props) {
  return (
    <Link
      href={path}
      className={styles.container}
      onMouseEnter={() => mouseEnter(title)}
      onMouseLeave={mouseExit}
    >
      <motion.span
        className={styles.titleContainer}
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
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
        viewport={{ once: true }}
        className={styles.techContainer}
      >
        <motion.span variants={animation.lineAnimation} className={styles.tech}>
          {tech}
        </motion.span>
      </motion.span>
      <motion.span
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
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
