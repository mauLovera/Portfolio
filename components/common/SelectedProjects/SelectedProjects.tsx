import SectionSubHeader from './SectionSubHeader/SectionSubHeader'
import SectionHeader from './SectionHeader/SectionHeader'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import styles from './SelectedProjects.module.scss'
import { animate, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Row from './Row/Row'
import { useState } from 'react'

//* === Variants === //

const timeline = {
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.5,
    },
  },
}

const lineAnimation = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

const buttonAnimation = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
  },
}

export default function SelectedProjects() {
  const [focus, setFocus] = useState<string>('')

  function handleMouseEnter(text: string): void {
    setFocus(text)
  }

  function handleMouseExit(): void {
    setFocus('')
  }

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <SectionHeader timeline={timeline} animation={lineAnimation} />
        <SectionSubHeader
          timeline={timeline}
          animation={{ lineAnimation, buttonAnimation }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.images}>
          <motion.img
            src="/images/index-page/grimoire.png"
            className={`${styles.image} ${
              focus === 'Grimoire' ? styles.active : ''
            }`}
          />
          <motion.img
            src="/images/index-page/swirl.png"
            className={`${styles.image} ${
              focus === 'Swirl' ? styles.active : ''
            }`}
          />
          <motion.img
            src="/images/index-page/orbit.png"
            className={`${styles.image} ${
              focus === 'Orbit' ? styles.active : ''
            }`}
          />
          <motion.img
            src="/images/index-page/tic-tac-toe.png"
            className={`${styles.image} ${
              focus === 'Tic-Tac-Toe' ? styles.active : ''
            }`}
          />
        </div>
        <div className={styles.list}>
          <Row
            title="Grimoire"
            animation={{ lineAnimation, buttonAnimation }}
            path="/projects/grimoire"
            timeline={timeline}
            tech={['Next.js / Sass / JavaScript / Vercel']}
            mouseEnter={handleMouseEnter}
            mouseExit={handleMouseExit}
          />
          <Row
            title="Swirl"
            animation={{ lineAnimation, buttonAnimation }}
            path="/projects/swirl"
            timeline={timeline}
            tech={['Django / PostgreSQL / JavaScript / Heroku']}
            mouseEnter={handleMouseEnter}
            mouseExit={handleMouseExit}
          />
          <Row
            title="Orbit"
            animation={{ lineAnimation, buttonAnimation }}
            path="/projects/orbit"
            timeline={timeline}
            tech={['Node.js / MongoDB / Express / Heroku']}
            mouseEnter={handleMouseEnter}
            mouseExit={handleMouseExit}
          />
          <Row
            title="Tic-Tac-Toe"
            animation={{ lineAnimation, buttonAnimation }}
            path="/projects/tic-tac-toe"
            timeline={timeline}
            tech={['Next.js / TypeScript / Sass / Vercel']}
            mouseEnter={handleMouseEnter}
            mouseExit={handleMouseExit}
          />
        </div>
      </div>
    </section>
  )
}
