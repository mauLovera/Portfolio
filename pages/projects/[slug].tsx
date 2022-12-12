import { projects } from '@/lib/projects'
import Layout from '@/components/layout/Layout'
import { useRouter } from 'next/router'
import PageBanner from '@/components/common/PageBanner/PageBanner'
import Briefing from '@/components/pages/projects/Briefing/Briefing'

export default function ProjectPage() {
  const router = useRouter()

  const project = projects.filter((proj) => proj.slug === router.query.slug)

  return (
    <Layout home={false}>
      <PageBanner
        title={project[0].title}
        description={project[0].briefDescription}
      />
      <Briefing
        timeline={project[0].timeline}
        type={project[0].type}
        contributors={project[0].contributors}
        tech={project[0].tech}
      />
    </Layout>
  )
}
