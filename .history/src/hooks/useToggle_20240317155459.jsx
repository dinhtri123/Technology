import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
    // if (value) {
    //   document.body.style.overflow = "auto";
    // } else {
    //   document.body.style.overflow = "hidden";
    // }
  };
  const setToggle = (newValue) => {
    setValue(newValue);
    // if (newValue == true) {
    //   document.body.style.overflow = "hidden";
    // }else {
    //   document.body.style.overflow = "auto";
    // }
  };
  return [value, toggle, setToggle];
};