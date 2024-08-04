import { useState } from "react";

export const useToggle = ({initialValue = false}) => {
  const [toggle, setToggle] = useState(initialValue);
  const handleToggle = (newValue) => {
    setToggle(newValue);
  };
  return [toggle, handleToggle];
};