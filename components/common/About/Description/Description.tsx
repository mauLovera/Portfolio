import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import styles from './Description.module.scss'

interface Props {
  timeline: Variants
  animation: {
    lineAnimation: Variants
    buttonAnimation: Variants
  }
}

export default function Description({ timeline, animation }: Props) {
  return (
    <div className={styles.container}>
      <motion.p
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
      >
        <motion.span variants={animation.lineAnimation}>
          Hello, I{"'"}m a full stack web developer with a passion for
          programming and an eye for design.
        </motion.span>
      </motion.p>
      <motion.p
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
      >
        <motion.span variants={animation.lineAnimation}>
          When I{"'"}m not programming you can find me with a guitar in hand,
          trekking through the city, or building sand castles with moats.
        </motion.span>
      </motion.p>
      <motion.p
        variants={timeline}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
      >
        <motion.span
          variants={animation.lineAnimation}
          className={styles.accent}
        >
          <Link href="/about" className={styles.accent}>
            <span>More</span>
            <motion.span
              className={styles.arrow}
              variants={animation.buttonAnimation}
            >
              <RiArrowRightCircleFill />
            </motion.span>
          </Link>
        </motion.span>
      </motion.p>
    </div>
  )
}
