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
          src="/hero_dark_small.png"
          alt="hero"
          width={640}
          height={526}
          style={{ height: "auto", width: "100%", maxWidth: "640px" }}
          unoptimized={true}
        />
      </div>

      <div className="dark:hidden inline">
        <Image
          src="/hero_light_small.png"
          alt="hero"
          width={640}
          height={526}
          style={{ height: "auto", width: "100%", maxWidth: "640px" }}
          unoptimized={true}
        />
      </div>
    </>
  );
}
