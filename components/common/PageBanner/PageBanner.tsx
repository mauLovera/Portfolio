//* === Components === *//
import Description from './Description/Description'
import SectionHeader from './SectionHeader/SectionHeader'

//* === Styles & Utils. === *//
import styles from './PageBanner.module.scss'

export default function PageBanner() {
  return (
    <div className={styles.container}>
      <SectionHeader />
      <Description />
    </div>
  )
}
