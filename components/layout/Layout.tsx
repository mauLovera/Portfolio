import Head from 'next/head'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import styles from './Layout.module.scss'

import { ReactNode } from 'react'
interface Props {
  title: string
  description: string
  keywords: string
  children: ReactNode
}

export default function Layout({
  title,
  description,
  keywords,
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'Website Title | Tagline',
  description: 'Short description.',
  keywords: 'Keywords',
}
