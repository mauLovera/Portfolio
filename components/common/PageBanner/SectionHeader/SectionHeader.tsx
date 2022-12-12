import { motion } from 'framer-motion'


//* === Styles & Utils === *//
import styles from './SectionHeader.module.scss'
import { letterAnimation, timeline } from '../variants'

export default function SectionHeader() {
  const text: string[] = ['Projects']
  return (
    <motion.h1
      className={styles.container}
      variants={timeline}
      animate="animate"
      initial="initial"
    >
      {[...text[0]].map((letter, idx) => (
        <motion.span key={idx} variants={letterAnimation}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}
