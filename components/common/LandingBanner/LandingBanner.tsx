import styles from './LandingBanner.module.scss'
import { motion } from 'framer-motion'

//* === Variants === //

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}

const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

const lineAnimation = {
  initial: { y: 600 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
      delay: 2,
    },
  },
}

export default function LandingBanner() {
  return (
    <section className={styles.container}>
      <motion.h1 variants={banner}>
        <TopRow />
        <BottomRows />
      </motion.h1>
    </section>
  )
}

function TopRow() {
  const text: string[] = ["I'm", 'Mauricio.']

  return (
    <motion.span
      className={styles.top}
      variants={banner}
      initial="initial"
      animate="animate"
    >
      {[...text[0]].map((letter, idx) => (
        <motion.span key={idx} variants={letterAnimation}>
          {letter} 
        </motion.span>
      ))}
      <div className={styles.space} />
      {[...text[1]].map((letter, idx) => (
        <motion.span
          key={idx}
          variants={letterAnimation}
          className={styles.accent}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

function BottomRows() {
  const text: string[] = ['A Full Stack Web', 'Developer based', 'in Miami.']

  return (
    <motion.span
      className={styles.bottom}
      variants={banner}
      initial="initial"
      animate="animate"
    >
      {[...text].map((letter, idx) => (
        <motion.span key={idx} variants={lineAnimation}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
