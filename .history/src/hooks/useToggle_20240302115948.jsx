import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  };
  const setToggle = (newValue) => {
    setValue(newValue);
  };
  return [value, toggle, setToggle];
};