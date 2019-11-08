import * as React from "react";
import { Override, Data } from "framer";

// Learn more: https://framer.com/docs/overrides/

const appState = Data({
  taps: 0
});

export function Box(props): Override {
  return {
    animate: {
      bottom: 450,
      left: 450
    },
    transition: {
      left: {
        ease: "linear",
        duration: 10
      },
      bottom: {
        ease: "easeOut",
        duration: 10
      }
    }
  };
}
