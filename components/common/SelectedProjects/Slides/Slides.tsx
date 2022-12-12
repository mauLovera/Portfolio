import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './Slides.module.scss'

interface Props {
  focus: string
}

export default function Slides({ focus }: Props) {
  return (
    <motion.div className={styles.container}>
      <Image
        fill
        alt={focus}
        src={`/images/project-images/grimoire.png`}
        className={`${styles.image} ${
          focus === 'grimoire' ? styles.active : ''
        }`}
      />
      <Image
        fill
        alt={focus}
        src={`/images/project-images/swirl.png`}
        className={`${styles.image} ${focus === 'swirl' ? styles.active : ''}`}
      />
      <Image
        fill
        alt={focus}
        src={`/images/project-images/orbit.png`}
        className={`${styles.image} ${focus === 'orbit' ? styles.active : ''}`}
      />
      <Image
        fill
        alt={focus}
        src={`/images/project-images/tic-tac-toe.png`}
        className={`${styles.image} ${
          focus === 'tic-tac-toe' ? styles.active : ''
        }`}
      />
    </motion.div>
  )
}
