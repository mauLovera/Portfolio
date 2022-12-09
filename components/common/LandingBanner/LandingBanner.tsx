import styles from './LandingBanner.module.scss'
import { motion } from 'framer-motion'

interface Props {
  topText: string[]
  bottomText: string
}

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

export default function LandingBanner({ topText, bottomText }: Props) {
  return (
    <section className={styles.container}>
      <motion.h1 variants={banner}>
        <TopRow text={topText} />
        <BottomRow text={bottomText} />
      </motion.h1>
    </section>
  )
}

interface Text {
  text: string[] | string
}

function TopRow({ text }: Text) {
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

function BottomRow({ text }: Text) {
  return (
    <motion.span
      className={styles.bottom}
      variants={banner}
      initial="initial"
      animate="animate"
    >
      {[...text].map((letter, idx) => (
        <motion.span key={idx} variants={letterAnimation}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
