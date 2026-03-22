import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContextValue";

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    document.body.classList.toggle("theme-dark", darkMode);
    document.body.classList.toggle("theme-light", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
