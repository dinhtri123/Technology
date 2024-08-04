import { useState, createContext } from "react";

const ThemeContext = createContext();
function ThemeProvider({ children }) {
    const [keywords, setKeywords] = useState("");
    const [doSearch, setDoSearch] = useState("");
    const [activeSidebar, setActiveSidebar] = useState(false);
    const handleShowResultSearch = (e) => {
        setKeywords(e.target.value);
    };
    const handleToggleSidebar = () => {
      setActiveSidebar(!activeSidebar);
    };
    const value = {
      keywords,
      setKeywords,
      handleShowResultSearch,
      doSearch,
      setDoSearch,
      handleToggleSidebar,
      activeSidebar,
    };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
export {ThemeContext, ThemeProvider}