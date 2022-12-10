import Layout from '@/components/layout/Layout'
import LandingBanner from '@/components/common/LandingBanner/LandingBanner'
import SelectedProjects from '@/components/common/SelectedProjects/SelectedProjects'
import About from '@/components/common/About/About'

import styles from '@/styles/pages/index.module.scss'
interface Props {}

export default function HomePage() {
  return (
    <Layout>
      <LandingBanner />
      <About />
      <SelectedProjects />
    </Layout>
  )
}
