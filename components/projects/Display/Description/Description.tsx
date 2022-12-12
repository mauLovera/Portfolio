import { RiArrowRightCircleFill } from 'react-icons/ri'
import styles from './Description.module.scss'

interface Props {
  title: string
  description: string
  tech: string
}

export default function Description({ title, description, tech }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.projectNumber}>
          <span className={styles.ascendingNumber}></span>
          <span>/00-4</span>
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
          <RiArrowRightCircleFill />
        </div>
        <p>{description}</p>
        <p>{tech}</p>
      </div>
    </div>
  )
}
