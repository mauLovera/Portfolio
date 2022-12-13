import ActiveLink from '@/components/common/ActiveLink/ActiveLink'
import Header from '../Header/Header'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <ActiveLink text="Home" url="" />
      <ActiveLink text="Projects" url="projects" ammount='4'/>
      <ActiveLink text="About" url="about" />
      <ActiveLink text="Contact" url="contact" />
    </footer>
  )
}
