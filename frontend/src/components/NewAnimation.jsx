// AnimatedCard.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CodeBlock from "./CodeBlock"; // Adjust path as needed
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const cardVariants = {
  question: { transform: "rotateY(0deg)" },
  answer: { transform: "rotateY(180deg)" },
};

const NewAnimatedCard = ({ item, selectedId, setSelectedId, language }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000); // Reset after 3 seconds
  };
  const [isFlipped, setIsFlipped] = useState(false);

  // Don't wrap the entire code block with motion. Instead, copy paste the CodeBlock component and wrap ONLY the body with motion.
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        color: "#ffffff",
        padding: "20px",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <div>
        <CopyToClipboard
          text={isFlipped ? item.answer : item.subtitle}
          onCopy={onCopy}
        >
          <button
            style={{
              backgroundColor: isCopied ? "#2ecc71" : "#3498db",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              cursor: "pointer",
              margin: "10px 0",
              fontSize: "0.9em",
            }}
          >
            {isCopied ? "Copied!" : "Copy code"}
          </button>
        </CopyToClipboard>
      </div>
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
                <SyntaxHighlighter language={language} style={darcula}>
                  {item.subtitle}
                </SyntaxHighlighter>
              </>
            ) : (
              <SyntaxHighlighter language={language} style={darcula}>
                {item.answer}
              </SyntaxHighlighter>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default NewAnimatedCard;
