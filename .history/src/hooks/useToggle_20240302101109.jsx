import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return handleToggle;
};