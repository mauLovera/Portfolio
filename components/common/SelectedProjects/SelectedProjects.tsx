import Link from 'next/link'
import styles from './SelectedProjects.module.scss'

import { motion } from 'framer-motion'
import { RiArrowRightCircleFill } from 'react-icons/ri'

//* === Variants === //

const timeline = {
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.5,
    },
  },
}

const lineAnimation = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

const buttonAnimation = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
  },
}

export default function SelectedProjects() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <SectionHeader />
        <SectionSubHeader />
      </div>
    </section>
  )
}

function SectionHeader() {
  const text: string[] = ['Selected Projects']
  return (
    <motion.h2 variants={timeline} initial="initial" whileInView={'animate'}>
      <motion.span variants={lineAnimation}>{text[0]}</motion.span>
    </motion.h2>
  )
}

function SectionSubHeader() {
  const text: string[] = [
    'Below is a few of my most recent projects. To view all of my work, head over to the',
    ' projects page.',
  ]
  return (
    <motion.p variants={timeline} initial="initial" whileInView={'animate'}>
      <motion.span variants={lineAnimation}>
        {text[0]}
        <Link href={'/projects'} className={styles.accent}>
          {text[1]}
          <motion.span
            className={styles.arrow}
            variants={buttonAnimation}
          >
            <RiArrowRightCircleFill />
          </motion.span>
        </Link>
      </motion.span>
    </motion.p>
  )
}
