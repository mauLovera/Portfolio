import { motion } from 'framer-motion'
import Description from './Description/Description'
import styles from './PageBanner.module.scss'
import SectionHeader from './SectionHeader/SectionHeader'

export default function PageBanner() {
  return (
    <div className={styles.container}>
      <SectionHeader />
      <Description />
    </div>
  )
}
