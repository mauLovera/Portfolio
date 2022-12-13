import PageBanner from '@/components/common/PageBanner/PageBanner'
import Layout from '@/components/layout/Layout'

export default function index() {
  return (
    <Layout home={false}>
      <PageBanner
        title="Contact"
        description="Always welcome to talk! Reach me through these means: "
        github={'https://github.com/mauLovera'}
        linkedIn={'https://www.linkedin.com/in/mauriciolovera001/'}
      />
    </Layout>
  )
}
