import ActiveLink from '@/components/common/ActiveLink/ActiveLink'
import Header from '../Header/Header'
import styles from './Footer.module.scss'

interface Props {
  numberOfProjects: number
}
export default function Footer({ numberOfProjects }: Props) {
  return (
    <footer className={styles.container}>
      <ActiveLink text="Home" url="" />
      <ActiveLink text="Projects" url="projects" amount={numberOfProjects} />
      <ActiveLink text="About" url="about" />
      <ActiveLink text="Contact" url="contact" />
    </footer>
  )
}
