// prettier-ignore
"use client";

import { useState } from "react";

const TestComponent = () => {
  const [state, setState] = useState<boolean>(false);

  const handleState = () => {
    setState(!state);
  };

  return (
    <button onClick={handleState}>promjeni stejt{state.toString()}</button>
  );
};

export default TestComponent;
