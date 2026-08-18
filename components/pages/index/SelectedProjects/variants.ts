// TODO: Consolidate all these duplicate animations
import { Variants } from 'framer-motion'

export const timeline: Variants = {
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.5,
    },
  },
}

export const letterTimeline: Variants  = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.025,
    },
  },
}

export const lineAnimation: Variants  = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

export const letterAnimation: Variants  = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

export const buttonAnimation: Variants  = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
  },
}