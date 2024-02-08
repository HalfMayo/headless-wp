"use client";

import { useTheme } from "next-themes";

export default function Toggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-4 items-center justify-between pl-4">
      <div className="flex gap-2 items-center">
        <p>Dark</p>
        <label className="switch">
          <input
            type="checkbox"
            name="theme"
            onChange={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
            checked={theme === "light"}
          />
          <span className="toggle"></span>
        </label>
        <p>Light</p>
      </div>
    </div>
  );
}
