import { useState } from "react";
import NavLinks from "./NavLinks";
import Toggle from "./Toggle";
import SocialMediaLinks from "./SocialMediaLinks";
import Hamburger from "../../../public/hamburger-7-svgrepo-com.svg";
import Close from "../../../public/close-bold-svgrepo-com.svg";

export default function MobileSidenav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`flex items-center fixed z-40 top-4 transition-all duration-500 ${
          isOpen ? "left-[calc(60vw+1rem)]" : "left-4"
        }`}
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`w-12 h-12 rounded-full border-2 dark:border-black border-white dark:bg-black bg-white flex items-center justify-center ${
            !isOpen ? "pb-1" : ""
          }`}
        >
          {!isOpen ? (
            <Hamburger
              width={36}
              height={36}
              className="fill-black dark:fill-white"
            />
          ) : (
            <Close
              width={36}
              height={36}
              className="fill-black dark:fill-white"
            />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen
            ? "dark:bg-white/[.6] bg-black/[.6] w-screen"
            : "transparent w-0"
        } h-screen transition-colors duration-500 fixed z-30 top-0 left-0`}
      >
        <aside
          className={`overflow-x-hidden absolute z-40 h-full bg-white dark:bg-black flex flex-col gap-4 transition-all duration-500 ${
            isOpen ? "w-[60vw]" : "w-0"
          }`}
        >
          <NavLinks orientation="mobile" setIsOpen={setIsOpen} />
          {/* SOCIAL MEDIA */}
          <h2 className="font-bold text-xl pl-8 py-2 dark:bg-white bg-black text-white dark:text-black w-full">
            Follow us!
          </h2>
          <SocialMediaLinks orientation="mobile" />
          <Toggle />
        </aside>
      </div>
    </>
  );
}
