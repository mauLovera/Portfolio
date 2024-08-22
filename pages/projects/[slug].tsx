import { projects } from '@/lib/projects'
import Layout from '@/components/layout/Layout'
import { useRouter } from 'next/router'
import PageBanner from '@/components/common/PageBanner/PageBanner'
import Briefing from '@/components/pages/projects/Briefing/Briefing'
import Gallery from '@/components/pages/projects/Gallery/Gallery'

interface Project {
  project: [
    {
      title: string
      slug: string
      briefDescription: string
      deployment: string
      github: string
      timeline: string
      type: string
      contributors: {
        title: string
        name: string
      }[]
      tech: string,
      images: {
        url: string,
        description: string
      }[]
    }
  ]
}

export default function ProjectPage({ project }: Project) {
  const router = useRouter()

  return (
    <Layout home={false}>
      <PageBanner
        title={project[0]?.title}
        description={project[0].briefDescription}
        deployment={project[0].deployment}
        github={project[0].github}
      />
      <Briefing
        timeline={project[0].timeline}
        type={project[0].type}
        contributors={project[0].contributors}
        tech={project[0].tech}
      />
      <Gallery images={project[0].images} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const project = projects.filter((proj) => proj.slug === context.query.slug)

  return {
    props: {
      project,
    },
  }
}
