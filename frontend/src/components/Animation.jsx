// AnimatedCard.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CodeBlock from "./CodeBlock"; // Adjust path as needed

const cardVariants = {
  question: { transform: "rotateY(0deg)" },
  answer: { transform: "rotateY(180deg)" },
};

const AnimatedCard = ({ item, selectedId, setSelectedId }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Don't wrap the entire code block with motion. Instead, copy paste the CodeBlock component and wrap ONLY the body with motion.
  return (
    <motion.div
      layoutId={item.id}
      onClick={() => {
        setSelectedId(selectedId === item.id ? null : item.id);
        setIsFlipped(!isFlipped);
      }}
      style={{
        backgroundColor: "#282c34",
        borderRadius: "15px",
        outline: "none",
        padding: "16px",
        margin: "16px",
        cursor: "pointer",
        perspective: "1000px", // Required for the 3D effect
        boxShadow: "10px",
        color: "white",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isFlipped ? "answer" : "question"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          variants={cardVariants}
          style={{
            backfaceVisibility: "hidden", // Hide content when flipped
          }}
        >
          {!isFlipped ? (
            <>
              <motion.h5>{item.title}</motion.h5>
              <CodeBlock codeString={item.subtitle} language="python" />
            </>
          ) : (
            <CodeBlock codeString={item.answer} language="python" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedCard;
