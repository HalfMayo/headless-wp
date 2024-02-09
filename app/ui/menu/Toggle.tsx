"use client";

import useDeviceSize from "@/app/hooks/useDeviceSize";
import { useTheme } from "next-themes";

export default function Toggle() {
  const { theme, setTheme } = useTheme();
  const [height, width] = useDeviceSize();

  return (
    <div className="flex gap-4 items-center justify-between pl-8 sm:pl-4">
      <div className="flex gap-2 items-center">
        {width && width > 640 && <p>Dark</p>}
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
        {width && width > 640 && <p>Light</p>}
      </div>
    </div>
  );
}
