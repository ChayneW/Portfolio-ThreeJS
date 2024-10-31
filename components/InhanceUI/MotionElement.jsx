'use client'

import { motion } from 'framer-motion';

// Animation properties for the elements
const defaultVariants = {
  initial: { y: 48, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { ease: "easeInOut", duration: 0.75 },
};

// Reusable MotionElement component
const MotionElement = ({ as = 'div', children, className, ...props }) => {
  const MotionComponent = motion[as]; // Dynamically choose the motion element

  return (
    <MotionComponent
      initial={defaultVariants.initial}
      whileInView={defaultVariants.whileInView}
      transition={defaultVariants.transition}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default MotionElement;
