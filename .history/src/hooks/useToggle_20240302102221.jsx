import { useState } from "react";

export const useToggle = ({initiallize}) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return [toggle, handleToggle];
};