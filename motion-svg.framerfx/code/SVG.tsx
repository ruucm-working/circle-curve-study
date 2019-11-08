import * as React from 'react'
import { motion } from 'framer-motion'

export const SVG = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(0, 0, 0, 0)',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(0, 0, 0, 1)',
    },
  }

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width="107" height="107">
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="102">
        <motion.path
          d="M 35 67 L 35 99.5 L 2.5 67 L 67.5 67 L 2.5 2 L 67.5 2 L 67.5 34.5 L 2.5 34.5 L 2.5 67 Z"
          fill="rgb(0, 0, 0)"
          stroke-width="4"
          stroke="hsl(0, 0%, 0%)"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            yoyo: Infinity,
            ease: 'easeInOut',
            duration: 3,
          }}
        />
      </svg>
      ;
    </motion.svg>
  )
}
