"use client";

import useDeviceSize from "@/app/hooks/useDeviceSize";
import MobileSidenav from "../menu/MobileSidenav";
import NavLinks from "../menu/NavLinks";
import Toggle from "../menu/Toggle";

export default function Header() {
  const [height, width] = useDeviceSize();

  return (
    <>
      {width && width > 640 ? (
        <header className="fixed flex top-0 w-[80vw] items-center justify-between h-[10vh] z-30 dark:bg-black bg-white">
          <p>The Book Club</p>
          <div className="flex">
            <NavLinks />
            <Toggle />
          </div>
        </header>
      ) : (
        <MobileSidenav />
      )}
    </>
  );
}
