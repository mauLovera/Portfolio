import styles from './Description.module.scss'
import { motion } from 'framer-motion'
import { lineAnimation, timeline } from '../variants'

export default function Description() {
  return (
    <motion.p
      className={styles.container}
      variants={timeline}
      animate="animate"
      initial="initial"
    >
      <motion.span variants={lineAnimation}>
        A collection of my most notable <span>projects</span> and
        <span> explorations</span> in web development.
      </motion.span>
    </motion.p>
  )
}
