import Layout from '@/components/layout/Layout'
import LandingBanner from '@/components/common/LandingBanner/LandingBanner'
import ProjectsSection from '@/components/common/SelectedProjects/SelectedProjects'

import styles from '@/styles/pages/index.module.scss'
interface Props {}

export default function HomePage() {
  return (
    <Layout>
      <LandingBanner />
      <ProjectsSection />
    </Layout>
  )
}
