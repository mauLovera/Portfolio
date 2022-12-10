import { motion, Variants } from 'framer-motion'
import styles from './SectionHeader.module.scss'

interface Props {
  text: string[]
  animation: Variants
  timeline: Variants
}

export default function SectionHeader({ text, animation, timeline }: Props) {
  return (
    <motion.h2
      variants={timeline}
      initial="initial"
      whileInView={'animate'}
      className={styles.container}
    >
      {[...text[0]].map((letter, idx) => (
        <motion.span variants={animation} key={idx}>
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  )
}
