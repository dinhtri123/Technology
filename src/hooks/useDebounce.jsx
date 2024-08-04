import { useEffect, useState } from "react"

export const useDebounce = (initializeValue = '', delay= 800) => {
    const [debounceValue, setDebounceValue] = useState(initializeValue);
  const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
       const timer = setTimeout(() => {
         setDebounceValue(initializeValue);
          setLoading(false);
       }, delay);
        return () => {
            clearTimeout(timer);
        }
    },[delay, initializeValue]);
    return [debounceValue, loading];
}