import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg glass hover:bg-white/10 transition-all duration-300 text-text-base cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
