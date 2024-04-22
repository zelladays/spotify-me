import * as React from "react";
import { motion } from "framer-motion";

export const AnimateScreen = ({ children }: React.PropsWithChildren) => {
  return (
    <motion.div
      style={{ width: "100%", height: "100%" }}
      variants={{
        initial: {
          opacity: 0,
          transition: {
            delay: 1,
          },
        },
        final: {
          opacity: 1,
          transition: {
            delay: 1,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 1,
          },
        },
      }}
      initial="initial"
      animate="final"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
