import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
    if (value) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  const setToggle = (newValue) => {
    setValue(newValue);
    console.log("🚀 ~ setToggle ~ newValue:", newValue);
    if (newValue == true) {
      
      document.body.style.overflow = "auto";
    }else {
      document.body.style.overflow = "hidden";
    }
  };
  return [value, toggle, setToggle];
};