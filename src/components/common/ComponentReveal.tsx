import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ComponentReveal = ({
  children,
  delay = 0,
  className = "",
  x = 0,
  y = 0,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  x?: number;
  y?: number;
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: x, y: y }}
      animate={
        isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: x, y: y }
      }
      transition={{
        duration: 1.5,
        delay: delay,
        ease: "easeInOut",
        bounce: 0.5,
        type: "spring",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ComponentReveal;
