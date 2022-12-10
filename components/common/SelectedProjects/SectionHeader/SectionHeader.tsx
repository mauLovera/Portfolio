import { motion, Variants } from 'framer-motion'
import styles from './SectionHeader.module.scss'

interface Props {
  timeline: Variants
  animation: {
    lineAnimation: Variants
    letterAnimation: Variants
  }
}

export default function SectionHeader({ timeline, animation }: Props) {
  const text: string[] = ['Selected', ' Projects']
  return (
    <motion.h2
      variants={timeline}
      initial="initial"
      whileInView={'animate'}
      className={styles.container}
    >
      {[...text[0]].map((letter, idx) => (
        <motion.span key={idx} variants={animation.letterAnimation}>
          {letter}
        </motion.span>
      ))}
      <div className={styles.spaced} />
      {[...text[1]].map((letter, idx) => (
        <motion.span key={idx} variants={animation.letterAnimation}>
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  )
}
