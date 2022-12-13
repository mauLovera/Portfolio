import styles from './Description.module.scss'
import { motion } from 'framer-motion'
import { lineAnimation, timeline } from '../variants'
import Link from 'next/link'

interface Props {
  description: string
  deployment?: string
  github?: string
  linkedIn?: string
}

export default function Description({
  description,
  deployment,
  github,
  linkedIn
}: Props) {
  return (
    <motion.p
      className={styles.container}
      variants={timeline}
      animate="animate"
      initial="initial"
    >
      <motion.span variants={lineAnimation}>{description}</motion.span>

      {deployment && github && (
        <>
          <motion.span className={styles.links} variants={lineAnimation}>
            <Link href={deployment ? deployment : '/'} className={styles.link}>
              Deployment
            </Link>
            <Link href={github ? github : '/'} className={styles.link}>
              GitHub
            </Link>
          </motion.span>
        </>
      )}

      {linkedIn && github && (
        <>
          <motion.span className={styles.links} variants={lineAnimation}>
            <Link href={linkedIn ? linkedIn : '/'} className={styles.link}>
              LinkedIn
            </Link>
            <Link href={github ? github : '/'} className={styles.link}>
              GitHub
            </Link>
          </motion.span>
        </>
      )}
    </motion.p>
  )
}
