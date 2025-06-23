import { createContext, useContext, useState } from "react";

// create the context
// this context allows us to share light and dark themes
// among all our components

const ThemeContext = createContext();

// provides the themes to the component
// wraps around components and share data(light/dark)
// among the components defined in it.

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
