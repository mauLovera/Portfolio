//* === Components === *//
import Image from 'next/image'

//* === Styles & Utils === *//
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
        src={`/images/project-images/manto angelico.png`}
        className={`${styles.image} ${
          focus === 'manto angelico' ? styles.active : ''
        }`}
      />
      <Image
        fill
        alt={focus}
        src={`/images/project-images/reactdoor.png`}
        className={`${styles.image} ${
          focus === 'reactdoor' ? styles.active : ''
        }`}
      />
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
    </motion.div>
  )
}
