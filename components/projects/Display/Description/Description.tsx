import styles from './Description.module.scss'

export default function Description() {
  return (
    <div className={styles.container}>
      <div className={styles.projectNumber}>
        <span className={styles.ascendingNumber}></span>
        <span>/00-4</span>
      </div>
    </div>
  )
}
