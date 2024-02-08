"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "dark" ? "/pg_dark.png" : "/pg_light.png"}
      alt="Character"
      width={319}
      height={890}
    />
  );
}
