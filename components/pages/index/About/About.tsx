//* === Components === *//
import SectionHeader from './SectionHeader/SectionHeader'
import Description from './Description/Description'

//* === Styles & Utils === *//
import styles from './About.module.scss'
import { motion } from 'framer-motion'
import {
  letterAnimation,
  lineAnimation,
  buttonAnimation,
  timeline,
  letterTimeline,
} from './variants'

export default function About() {
  const text: string[] = ['About']
  return (
    <motion.section className={styles.container}>
      <SectionHeader
        text={text}
        animation={letterAnimation}
        timeline={letterTimeline}
      />
      <Description
        animation={{ lineAnimation, buttonAnimation }}
        timeline={letterTimeline}
      />
    </motion.section>
  )
}
