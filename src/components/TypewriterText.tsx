import { motion, Transition } from "framer-motion";

const TypewriterText = ({ text, className = "", el = "div", justify = "center" }) => {
  const words = text.split(" ");

  const MotionWrapper = motion[el];

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as Transition,
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as Transition,
    },
  };

  return (
    <MotionWrapper
      variants={container}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
        >
          {word}{index !== words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </MotionWrapper>
  );
};

export default TypewriterText; 