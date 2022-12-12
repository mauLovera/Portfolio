//* === Components === *//
import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/common/PageBanner/PageBanner'
import Project from '@/components/pages/projects/Project/Project'

//* === Styles & Utils === *//
import styles from '@/styles/pages/projects.module.scss'

interface Props {}
export default function ProjectsPage() {
  return (
    <Layout>
      <PageBanner />
      <div className={styles.list}>
        <Project
          title="Grimoire"
          description="A DnD 5th edition application used for searching through classes, monsters, and spells."
          tech="Next.js / Sass / JavaScript / Vercel"
        />
        <Project
          title="Swirl"
          description="A DnD 5th edition application used for searching through classes, monsters, and spells."
          tech="Next.js / Sass / JavaScript / Vercel"
        />
        <Project
          title="Orbit"
          description="A DnD 5th edition application used for searching through classes, monsters, and spells."
          tech="Next.js / Sass / JavaScript / Vercel"
        />
        <Project
          title="Tic-Tac-Toe"
          description="A DnD 5th edition application used for searching through classes, monsters, and spells."
          tech="Next.js / Sass / JavaScript / Vercel"
        />
      </div>
    </Layout>
  )
}
