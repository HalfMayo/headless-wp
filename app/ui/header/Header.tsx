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
        <header className="relative w-full">
          <div
            className="fixed flex top-0 w-full items-center justify-center h-[10vh] z-30 bg-white dark:bg-black text-black dark:text-white"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 0% 100%)" }}
          >
            <div className="w-[80vw] flex items-center justify-between h-full">
              <p>The Book Club</p>
              <div className="flex">
                <NavLinks />
                <Toggle />
              </div>
            </div>
          </div>
          <div
            className="fixed w-full h-[10vh] top-[30px] bg-base-light dark:bg-base-dark z-20"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0% 85%)" }}
          />
          <div
            className="fixed w-full h-[10vh] top-[33px] bg-accent-light dark:bg-accent-dark z-10"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 90%)" }}
          />
        </header>
      ) : (
        <MobileSidenav />
      )}
    </>
  );
}
