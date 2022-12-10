import Link from 'next/link'
import styles from './SelectedProjects.module.scss'
import Row from './Row/Row'

import { motion } from 'framer-motion'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import SectionHeader from './SectionHeader/SectionHeader'
import SectionSubHeader from './SectionSubHeader/SectionSubHeader'

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
        <div className={styles.images}></div>
        <div className={styles.list}>
          <Row
            title="Grimore"
            animation={{ lineAnimation, buttonAnimation }}
            path="/projects/grimoire"
            timeline={timeline}
            tech={['Next.js / Sass / JavaScript / Vercel']}
          />
          <Row
            title="Swirl"
            animation={{ lineAnimation, buttonAnimation }}
            path="/projects/swirl"
            timeline={timeline}
            tech={['Django / PostgreSQL / JavaScript / Heroku']}

          />
          <Row
            title="Orbit"
            animation={{ lineAnimation, buttonAnimation }}
            path="/projects/orbit"
            timeline={timeline}
            tech={['Node.js / MongoDB / Express / Heroku']}
          />
          <Row
            title="Tic-Tac-Toe"
            animation={{ lineAnimation, buttonAnimation }}
            path="/projects/tic-tac-toe"
            timeline={timeline}
            tech={['Next.js / TypeScript / Sass / Vercel']}
          />
        </div>
      </div>
    </section>
  )
}
