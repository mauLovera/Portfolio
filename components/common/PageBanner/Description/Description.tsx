import styles from './Description.module.scss'
import { motion } from 'framer-motion'
import { lineAnimation, timeline } from '../variants'

interface Props {
  description: string
  deployment?: string
  github?: string
}

export default function Description({
  description,
  deployment,
  github,
}: Props) {
  return (
    <motion.p
      className={styles.container}
      variants={timeline}
      animate="animate"
      initial="initial"
    >
      <motion.span variants={lineAnimation}>{description}</motion.span>
    </motion.p>
  )
}
