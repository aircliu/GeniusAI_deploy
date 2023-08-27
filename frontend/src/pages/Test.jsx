import React, { useEffect } from "react";

import { Backend } from "../utils/utils";

const Test = () => {
  useEffect(() => {
    const callHelloRoute = async () => {
      const result = await Backend.get("/api/hello");
      console.log(result);
    };
    callHelloRoute();
  }, []);

  return <p>Hello world</p>;
};

export default Test;
