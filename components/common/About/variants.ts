export const timeline = {
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.5,
    },
  },
}

export const letterTimeline = {
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
}

export const lineAnimation = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

export const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

export const buttonAnimation = {
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