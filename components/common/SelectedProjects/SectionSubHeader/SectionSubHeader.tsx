import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import styles from './SectionSubHeader.module.scss'

interface Props {
  timeline: Variants
  animation: {
    lineAnimation: Variants
    buttonAnimation: Variants
  }
}

export default function SectionSubHeader({ timeline, animation }: Props) {
  const text: string[] = [
    'Below is a few of my most recent projects. ',
    'To view all of my work, head over to the ',
    'projects page.',
  ]
  return (
    <motion.p
      variants={timeline}
      initial="initial"
      whileInView={'animate'}
      viewport={{ once: true }}
      className={styles.container}
    >
      <motion.span variants={animation.lineAnimation}>
        {text[0]}
        {text[1]}
        <Link href={'/projects'} className={styles.accent}>
          {text[2]}
          <motion.span
            className={styles.arrow}
            variants={animation.buttonAnimation}
          >
            <RiArrowRightCircleFill />
          </motion.span>
        </Link>
      </motion.span>
    </motion.p>
  )
}
