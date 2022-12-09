import styles from './LandingBanner.module.scss'

interface Props {
  top: string[]
  bottom: string
}

export default function LandingBanner({ top, bottom }: Props) {
  return (
    <section className={styles.container}>
      <h1>
        <span className={styles.top}>
          {top[0]} <span className={styles.accent}>{top[1]}</span>
        </span>
        <span className={styles.bottom}>{bottom}</span>
      </h1>
    </section>
  )
}
