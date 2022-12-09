import { motion, Variants } from 'framer-motion'

interface Props {
  timeline: Variants
  animation: Variants
}

export default function SectionHeader({ timeline, animation }: Props) {
  const text: string[] = ['Selected Projects']
  return (
    <motion.h2 variants={timeline} initial="initial" whileInView={'animate'}>
      <motion.span variants={animation}>{text[0]}</motion.span>
    </motion.h2>
  )
}
