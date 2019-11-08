import * as React from "react";
import { motion } from "framer-motion";

export const SVG2 = () => {
  const icon = {
    hidden: {
      pathLength: 0
      // pathOffset: 0
      // strokeWidth: 0
      // pathSpacing: 0
      // fill: "rgba(0, 0, 0, 0)"
    },
    visible: {
      pathLength: 1
      // pathOffset: 1
      // strokeWidth: 100
      // pathSpacing: 1
      // fill: "rgba(0, 0, 0, 1)"
    }
  };

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect width="100%" height="100%" fill="red" />
      <motion.path
        d="M 0 150 A 50 50 0 1 0 300 150 A 50 50 0 1 0 0 150"
        fill="rgba(0, 0, 0, 0)"
        stroke-width="10"
        stroke="blue"
        stroke-linecap="round"
        stroke-linejoin="round"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 3
        }}
      />
    </motion.svg>
  );
};

SVG2.defaultProps = {
  width: 300,
  height: 300
};
