import Image from 'next/image'
import styles from './Gallery.module.scss'

interface Props {
  images: { url: string; description: string }[]
}

export default function Gallery({ images }: Props) {
  return (
    <section className={styles.container}>
      {images.map((image, idx) => (
        <div key={idx} className={styles.row}>
          <img src={image.url} alt={image.description} />
          <div>
            <span>{image.description}</span>
            <span className={styles.count}> - 0{images.length}</span>
          </div>
        </div>
      ))}
    </section>
  )
}
