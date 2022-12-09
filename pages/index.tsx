import Layout from '@/components/layout/Layout'
import LandingBanner from '@/components/common/LandingBanner/LandingBanner'
import styles from '@/styles/pages/index.module.scss'

interface Props {}

export default function HomePage() {
  return (
    <Layout>
      <LandingBanner />
    </Layout>
  )
}
