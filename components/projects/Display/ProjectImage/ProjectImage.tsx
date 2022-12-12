import Image from 'next/image'
import styles from './ProjectImage.module.scss'

interface Props {
  title: string
}

export default function ProjectImage({ title }: Props) {
  return (
    <div className={styles.container}>
      <Image
        src={`/images/project-images/${title.toLowerCase()}.png`}
        src={`/images/project-images/${title.toLowerCase()}.png`}
        fill
      ></Image>
    </div>
  )
}
