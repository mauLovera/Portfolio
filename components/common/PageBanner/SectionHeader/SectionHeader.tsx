import { motion } from 'framer-motion'

//* === Styles & Utils === *//
import styles from './SectionHeader.module.scss'
import { letterAnimation, timeline } from '../variants'

interface Props {
  title: string
}

export default function SectionHeader({ title }: Props) {
  const text: string[] = [`${title}`]
  return (
    <motion.h1
      className={styles.container}
      id={title.length > 7 ? styles.large : ''}
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
