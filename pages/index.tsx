//* === Components === *//
import Layout from '@/components/layout/Layout'
import About from '@/components/pages/index/About/About'
import LandingBanner from '@/components/pages/index/LandingBanner/LandingBanner'
import SelectedProjects from '@/components/pages/index/SelectedProjects/SelectedProjects'

//* === Styles & Utils === *//
import styles from '@/styles/pages/index.module.scss'

interface Props {}
export default function HomePage() {
  return (
    <Layout home={true}>
      <LandingBanner />
      <About />
      <SelectedProjects />
    </Layout>
  )
}
