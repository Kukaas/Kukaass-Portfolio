import { useTheme } from "@/components/theme-provider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

export function ToggleMode() {
  const { theme, setTheme } = useTheme();

  // Check if the current theme is "dark"
  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2 w-full justify-center mb-3">
      <Label htmlFor="theme-toggle" className="flex items-center gap-2">
        {isDarkMode ? (
          <>
            <Moon className="h-4 w-4" />
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <Sun className="h-4 w-4" />
            <span>Light Mode</span>
          </>
        )}
      </Label>
      <Switch
        id="theme-toggle"
        checked={isDarkMode}
        onCheckedChange={handleToggle}
      />
    </div>
  );
}
