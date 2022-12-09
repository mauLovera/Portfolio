import Layout from '@/components/layout/Layout'
import LandingBanner from '@/components/common/LandingBanner/LandingBanner'
import styles from '@/styles/pages/index.module.scss'

interface Props {}

export default function HomePage() {
  const topText: string[] = ["I'm ", 'Mauricio.']
  const bottomText: string = 'A Full Stack Web Developer based in Miami.'

  return (
    <Layout>
      <LandingBanner topText={topText} bottomText={bottomText} />
    </Layout>
  )
}
