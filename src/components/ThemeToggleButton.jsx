import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa"; 
export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="theme-switcher">
      {theme === "light" ? (
        <FaMoon style={{ fontSize: "24px" }} />
      ) : (
        <FaSun style={{ fontSize: "24px" }} />
      )}
    </button>
  );
};
