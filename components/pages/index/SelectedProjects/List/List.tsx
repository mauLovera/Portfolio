//* === Components === *//
import Row from '../Row/Row'

//* === Styles & Utils === *//
import styles from './List.module.scss'
import { Variants } from 'framer-motion'

interface Props {
  timeline: Variants
  animation: {
    lineAnimation: Variants
    buttonAnimation: Variants
  }
  handleMouseEnter: (text: string) => void
  handleMouseExit: () => void
}

export default function List({
  timeline,
  animation,
  handleMouseEnter,
  handleMouseExit,
}: Props) {
  return (
    <div className={styles.container}>
      <Row
        title="Grimoire"
        animation={animation}
        path="/projects/grimoire"
        timeline={timeline}
        tech={['Next.js / Sass / JavaScript / Vercel']}
        mouseEnter={handleMouseEnter}
        mouseExit={handleMouseExit}
      />
      <Row
        title="Swirl"
        animation={animation}
        path="/projects/swirl"
        timeline={timeline}
        tech={['Django / PostgreSQL / JavaScript / Heroku']}
        mouseEnter={handleMouseEnter}
        mouseExit={handleMouseExit}
      />
      <Row
        title="Orbit"
        animation={animation}
        path="/projects/orbit"
        timeline={timeline}
        tech={['Node.js / MongoDB / Express / Heroku']}
        mouseEnter={handleMouseEnter}
        mouseExit={handleMouseExit}
      />
      <Row
        title="Tic-Tac-Toe"
        animation={animation}
        path="/projects/tic-tac-toe"
        timeline={timeline}
        tech={['Next.js / TypeScript / Sass / Vercel']}
        mouseEnter={handleMouseEnter}
        mouseExit={handleMouseExit}
      />
    </div>
  )
}
