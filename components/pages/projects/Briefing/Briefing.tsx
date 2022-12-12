import styles from './Briefing.module.scss'

interface Props {
  timeline: string
  type: string
  contributors: { title: string; name: string }[]
  tech: string
}

export default function Briefing({
  timeline,
  type,
  contributors,
  tech,
}: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <h3>Project Timeline</h3>
        <span>{timeline}</span>
      </div>
      <div className={styles.row}>
        <h3>Project Type</h3>
        <span>{type}</span>
      </div>
      <div className={styles.row}>
        <h3>Contributors</h3>
        {contributors.map((contributor, idx) => (
          <div key={idx}>
            <h4 className={styles.grey}>{contributor.title}</h4>
            <span>{contributor.name}</span>
          </div>
        ))}
      </div>
      <div className={styles.row}>
        <h3>Tech</h3>
        <span>{tech}</span>
      </div>
    </section>
  )
}
