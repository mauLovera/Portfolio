import styles from './Tech.module.scss'
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiSass,
  SiMaterialui,
  SiGit,
  SiGithub,
  SiVercel,
  SiHeroku,
  SiNetlify,
  SiVisualstudiocode,
  SiVisualstudio,
  SiFigma,
  SiMongodb,
  SiPostgresql,
  SiStrapi,
  SiFirebase,
} from 'react-icons/si'

import { FaDatabase } from 'react-icons/fa'

export default function Tech() {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <h3>Languages</h3>
        <span>
          <SiTypescript /> TypeScript
        </span>
        <span>
          <SiJavascript /> JavaScript (ES6)
        </span>
        <span>
          <SiPython /> Python
        </span>
        <span>
          <SiCplusplus /> C++
        </span>
        <span>
          <SiHtml5 /> HTML 5
        </span>
        <span>
          <SiCss3 /> CSS 3
        </span>
      </div>
      <div className={styles.row}>
        <h3>Libraries/Frameworks</h3>
        <span>
          <SiNextdotjs /> Next.js
        </span>
        <span>
          <SiReact /> React
        </span>
        <span>
          <SiDjango /> Django
        </span>
        <span>
          <SiNodedotjs /> Node.js
        </span>
        <span>
          <SiExpress /> Express
        </span>
        <span>
          <FaDatabase /> Mongoose
        </span>
        <span>
          <SiTailwindcss /> Tailwind
        </span>
        <span>
          <SiSass /> Sass
        </span>
        <span>
          <SiMaterialui /> MUI
        </span>
      </div>
      <div className={styles.row}>
        <h3>Tools/Platforms</h3>
        <span>
          <SiGit /> Git
        </span>
        <span>
          <SiGithub /> GitHub
        </span>
        <span>
          <SiVercel /> Vercel
        </span>
        <span>
          <SiHeroku /> Heroku
        </span>
        <span>
          <SiNetlify /> Netlify
        </span>
        <span>
          <SiVisualstudiocode /> VS Code
        </span>
        <span>
          <SiVisualstudio /> Visual Studio
        </span>
        <span>
          <SiFigma /> Figma
        </span>
      </div>
      <div className={styles.row}>
        <h3>Databases</h3>
        <span>
          <SiMongodb /> MongoDB
        </span>
        <span>
          <SiPostgresql /> PostgreSQL
        </span>
        <span>
          <SiStrapi /> Strapi
        </span>
        <span>
          <SiFirebase /> Firebase
        </span>
      </div>
    </section>
  )
}
