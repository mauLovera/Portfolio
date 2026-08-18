// TODO: Why is this not showing up in import autocomplete?
import { Variants } from 'framer-motion'

export const timeline: Variants = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

// TODO: Fix this typing
export const letterTimeline: Variants = {
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
}

export const lineAnimation: Variants = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

export const letterAnimation: Variants = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

export const buttonAnimation: Variants = {
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
