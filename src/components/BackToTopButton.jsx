import ScrollToTop from "react-scroll-to-top";
import { HiArrowNarrowUp } from "react-icons/hi";
import "./index.css"; // Importing the custom CSS
import { useTheme } from "../context/ThemeContext";
const BackToTopButton = () => {
  const { theme } = useTheme(); // Accessing the theme from the context
  return (
    <ScrollToTop
      smooth
      component={<HiArrowNarrowUp size={100} />}
      className={`scroll-to-top-button ${theme}`}
      aria-label="Back to Top"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "60px",
        height: "60px",
      }}
    />
  );
};

export default BackToTopButton;
