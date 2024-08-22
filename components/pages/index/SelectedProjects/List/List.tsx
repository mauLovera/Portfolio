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
        title="Manto Angelico"
        animation={animation}
        path="/projects/manto-angelico"
        timeline={timeline}
        tech={['Next.js / Tailwind / TypeScript / Vercel']}
        mouseEnter={handleMouseEnter}
        mouseExit={handleMouseExit}
      />
      <Row
        title="Reactdoor"
        animation={animation}
        path="/projects/reactdoor"
        timeline={timeline}
        tech={['Next.js / Sass / TypeScript / Vercel']}
        mouseEnter={handleMouseEnter}
        mouseExit={handleMouseExit}
      />
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
        tech={['Django / PostgreSQL / Docker / Heroku']}
        mouseEnter={handleMouseEnter}
        mouseExit={handleMouseExit}
      />
    </div>
  )
}
