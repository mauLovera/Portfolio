import { motion } from 'framer-motion'
import {
  letterAnimation,
  lineAnimation,
  buttonAnimation,
  timeline,
  letterTimeline,
} from './variants'

import styles from './About.module.scss'
import SectionHeader from './SectionHeader/SectionHeader'

export default function About() {
  const text: string[] = ['About']
  return (
    <motion.section className={styles.container}>
      <SectionHeader
        text={text}
        animation={letterAnimation}
        timeline={letterTimeline}
      />
    </motion.section>
  )
}
