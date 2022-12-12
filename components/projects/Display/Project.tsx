import ProjectImage from './ProjectImage/ProjectImage'
import Description from './Description/Description'
import styles from './Project.module.scss'

interface Props {
  title: string
  description: string
  tech: string
}

export default function Project({ title, description, tech }: Props) {
  return (
    <div className={styles.container}>
      <ProjectImage title={title} />
      <Description title={title} description={description} tech={tech} />
    </div>
  )
}
