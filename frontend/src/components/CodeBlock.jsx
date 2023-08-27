import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeBlock = ({ codeString, language }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000); // Reset after 3 seconds
  };

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
        <CopyToClipboard text={codeString} onCopy={onCopy}>
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
      <SyntaxHighlighter language={language} style={darcula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
