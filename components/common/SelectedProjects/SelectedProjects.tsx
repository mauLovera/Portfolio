import SectionSubHeader from './SectionSubHeader/SectionSubHeader'
import SectionHeader from './SectionHeader/SectionHeader'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import styles from './SelectedProjects.module.scss'
import { animate, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Row from './Row/Row'
import { useState } from 'react'
import List from './List/List'
import Slides from './Slides/Slides'

//* === Variants === //

const timeline = {
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.5,
    },
  },
}

const letterTimeline = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.025,
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

const letterAnimation = {
  initial: { y: 400 },
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
    setFocus(text.toLowerCase())
  }

  function handleMouseExit(): void {
    setFocus('')
  }

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <SectionHeader
          timeline={letterTimeline}
          animation={{ lineAnimation, letterAnimation }}
        />
        <SectionSubHeader
          timeline={timeline}
          animation={{ lineAnimation, buttonAnimation }}
        />
      </div>
      <div className={styles.content}>
        <Slides focus={focus} />
        <List
          animation={{ lineAnimation, buttonAnimation }}
          handleMouseEnter={handleMouseEnter}
          handleMouseExit={handleMouseExit}
          timeline={timeline}
        />
      </div>
    </section>
  )
}
