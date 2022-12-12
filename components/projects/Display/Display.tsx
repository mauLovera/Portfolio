import ProjectImage from './ProjectImage/ProjectImage'
import Description from './Description/Description'
import styles from './Display.module.scss'

export default function Display() {
  return (
    <div className={styles.container}>
      <ProjectImage title="Grimoire"/>
      <Description />
    </div>
  )
}
