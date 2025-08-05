import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "@/lib/util";

export const ThemeToggle = () =>{

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === "light") {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if(isDarkMode) {
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(true);
    }
  }
  return (
    <button onClick={toggleTheme} 
    className={cn("fixed max-sm:hidden right-5 z-60 p-6 transition-colors duration-300",
      "focus:outline-hidden "
    )}>
      {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900" />}
    </button>
  );
}
