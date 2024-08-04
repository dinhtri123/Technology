import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  };
  const setToggle = (newValue) => {
    setValue(newValue);
    console.log(value)
  };
  return [value, toggle, setToggle];
};