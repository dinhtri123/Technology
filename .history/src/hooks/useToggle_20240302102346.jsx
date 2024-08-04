import { useState } from "react";

export const useToggle = ({initialValue = false}) => {
  const [toggle, setToggle] = useState(initialValue);
  const toggle
  return [toggle, handleToggle];
};