import { useContext } from "react";
import ThemeContext from "../contexts/themecontext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative w-10 h-10 flex items-center justify-center"
    >
      {/* SUN ICON (Light mode) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-7 h-7 transition-all duration-300
          ${theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100"}
        `}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="5" strokeWidth="2" />
        <path
          strokeWidth="2"
          d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95-6.95-1.41 1.41M6.46 17.54l-1.41 1.41m0-13.9 1.41 1.41m10.49 10.49 1.41 1.41"
        />
      </svg>

      {/* MOON ICON (Dark mode) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`absolute w-7 h-7 transition-all duration-300
          ${theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      >
        <path d="M12 3a9 9 0 1 0 0 18c3.87 0 7.16-2.46 8.42-5.9A7 7 0 0 1 12 3z" />
      </svg>
    </button>
  );
}
