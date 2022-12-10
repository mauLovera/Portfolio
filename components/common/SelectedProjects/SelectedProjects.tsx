import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { animate, motion } from 'framer-motion'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import styles from './SelectedProjects.module.scss'

//* === Components === */
import SectionSubHeader from './SectionSubHeader/SectionSubHeader'
import List from './List/List'
import Slides from './Slides/Slides'
import SectionHeader from './SectionHeader/SectionHeader'

//* === Variants === //
import {
  timeline,
  buttonAnimation,
  letterAnimation,
  letterTimeline,
  lineAnimation,
} from './variants'

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
