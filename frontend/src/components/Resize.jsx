import React, { useState } from "react";
import { Resizable } from "react-resizable";
import Draggable from "react-draggable";

const Resize = () => {
  const [divWidth, setDivWidth] = useState(200);
  const [divHeight, setDivHeight] = useState(200);

  const onDivResize = (event, { element, size }) => {
    setDivWidth(size.width);
    setDivHeight(size.height);
  };

  return (
    <Draggable>
      <Resizable
        width={divWidth}
        height={divHeight}
        onResize={onDivResize}
      ></Resizable>
    </Draggable>
  );
};

export default Resize;
