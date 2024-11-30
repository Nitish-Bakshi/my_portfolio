import React from "react";
// import motions
import { motion } from "framer-motion";
// import motions

// import transition
import { transition1 } from "../transitions";

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section "
    >
      <div className="container mx-auto h-full relative flex flex-col justify-center items-center">
        <div className="my-4 sm:my-6 md:my-8 lg:my-12 xl:my-14 h-[20%] ">
          <h1 className="h1 myheading">Recent Work</h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-80%" }}
          transition={transition1}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full h-[60%] sm:h-[40%] lg:h-[30%] xl:h-[20%] items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="block bg-[#dbedff] hover:scale-[1.05]"
          >
            Item 1
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="block bg-[#dbedff]"
          >
            Item 2
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="block bg-[#dbedff]"
          >
            Item 3
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="block bg-[#dbedff]"
          >
            Item 4
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="block bg-[#dbedff]"
          >
            Item 5
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="block bg-[#dbedff]"
          >
            Item 6
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
