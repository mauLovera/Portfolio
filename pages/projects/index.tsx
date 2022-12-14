//* === Components === *//
import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/common/PageBanner/PageBanner'
import Project from '@/components/pages/projects/Project/Project'

//* === Styles & Utils === *//
import styles from '@/styles/pages/projects.module.scss'

interface Props {}
export default function ProjectsPage() {
  return (
    <Layout home={false}>
      <PageBanner
        title={'Projects'}
        description={
          'A collection of my most notable projects and explorations in web development.'
        }
      />
      <div className={styles.list}>
        <Project
          title="Grimoire"
          description="A DnD 5th edition application used for searching through classes, monsters, and spells."
          tech="Next.js / Sass / JavaScript / Vercel"
        />
        <Project
          title="Swirl"
          description="A music application that allows for creating and sharing playlists with other users."
          tech="Django / PostgreSQL / Docker / Heroku"
        />
        <Project
          title="Orbit"
          description="A video game social media platform utilizing the RAWG.io API, to seach, collect, and display collections of video games."
          tech="Node.js / MongoDB / Express / Heroku"
        />
        <Project
          title="Tic-Tac-Toe"
          description="A rendition of the classic Tic-Tac-Toe game."
          tech="HTML 5 / CSS 3 / JavaScript / Netlify"
        />
      </div>
    </Layout>
  )
}
