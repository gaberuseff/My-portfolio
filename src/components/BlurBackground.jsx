import {motion} from "framer-motion";

const circelVariants = {
  animate1: {
    scale: [1, 1.2, 1],
    x: [0, 100, 0],
    y: [0, 50, 0],
    transition: {
      duration: 2,
      ease: "easeOut",
      repeat: Infinity,
    },
  },

  animate2: {
    scale: [1, 1.1, 1],
    x: [0, 120, 0],
    y: [0, -60, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },

  animate3: {
    scale: [1, 1.3, 1],
    x: [0, 140, 0],
    y: [0, 70, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },

  animate4: {
    scale: [1, 1.4, 1],
    x: [0, 160, 0],
    y: [0, -80, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },

  animate5: {
    scale: [1, 1.5, 1],
    x: [0, 180, 0],
    y: [0, 90, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },

  animate6: {
    scale: [1, 1.6, 1],
    x: [0, 200, 0],
    y: [0, -100, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

function BlurBackground() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full 
        overflow-hidden -z-10 pointer-events-none
        flex items-center justify-center filter blur-[100px]
        opacity-70">
      <motion.div
        className="absolute w-[600px] h-[400px] rounded-full bg-[#00a2fff8] opacity-50"
        variants={circelVariants}
        animate="animate1"></motion.div>
    </div>
  );
}

export default BlurBackground;
