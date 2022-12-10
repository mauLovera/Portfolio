import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './Slides.module.scss'

interface Props {
  focus: string
}

export default function Slides({ focus }: Props) {
  return (
    <motion.div className={styles.container}>
      <motion.img
        alt={focus}
        src={`/images/index-page/grimoire.png`}
        className={`${styles.image} ${
          focus === 'grimoire' ? styles.active : ''
        }`}
      />
      <motion.img
        alt={focus}
        src={`/images/index-page/swirl.png`}
        className={`${styles.image} ${focus === 'swirl' ? styles.active : ''}`}
      />
      <motion.img
        alt={focus}
        src={`/images/index-page/orbit.png`}
        className={`${styles.image} ${focus === 'orbit' ? styles.active : ''}`}
      />
      <motion.img
        alt={focus}
        src={`/images/index-page/tic-tac-toe.png`}
        className={`${styles.image} ${
          focus === 'tic-tac-toe' ? styles.active : ''
        }`}
      />
    </motion.div>
  )
}
