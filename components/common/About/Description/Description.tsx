import { motion, Variants } from 'framer-motion'
import styles from './Description.module.scss'

interface Props {
  timeline: Variants
  animation: Variants
}

export default function Description({ timeline, animation }: Props) {
  return (
    <div className={styles.container}>
      <motion.p variants={timeline} initial="initial" whileInView={'animate'}>
        <motion.span variants={animation}>
          Hello, I{"'"}m a full stack web developer with a passion for
          programming and an eye for design.
        </motion.span>
      </motion.p>
      <motion.p variants={timeline} initial="initial" whileInView={'animate'}>
        <motion.span variants={animation}>
          When I{"'"}m not programming you can find me with a guitar in hand,
          trekking through the city, or building sand castles with moats.
        </motion.span>
      </motion.p>
    </div>
  )
}
