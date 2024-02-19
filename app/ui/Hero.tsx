"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import useDeviceSize from "../hooks/useDeviceSize";

export default function Hero() {
  const [height, width] = useDeviceSize();

  if (width && width < 640) {
    return null;
  }

  return (
    <>
      <div className="dark:inline hidden">
        <Image
          src="/hero_dark.png"
          alt="hero"
          width={640}
          height={640}
          style={{ height: "auto", width: "100%", maxWidth: "640px" }}
        />
      </div>

      <div className="dark:hidden inline">
        <Image
          src="/hero_light.png"
          alt="hero"
          width={640}
          height={640}
          style={{ height: "auto", width: "100%", maxWidth: "640px" }}
        />
      </div>
    </>
  );
}
