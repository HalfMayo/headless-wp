import Image from "next/image";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Toggle from "./Toggle";
import SocialMediaLinks from "./SocialMediaLinks";

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
          className={`w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center ${
            !isOpen ? "pb-1" : ""
          }`}
        >
          <Image
            width={36}
            height={36}
            alt="Menu icon"
            src={
              !isOpen
                ? "/hamburger-7-svgrepo-com.svg"
                : "/close-bold-svgrepo-com.svg"
            }
          />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "bg-black/[.6] w-screen" : "transparent w-0"
        } h-screen transition-colors duration-500 fixed z-30 top-0 left-0`}
      >
        <aside
          className={`overflow-x-hidden absolute z-40 h-full bg-white dark:bg-black flex flex-col gap-4 transition-all duration-500 ${
            isOpen ? "w-[60vw]" : "w-0"
          }`}
        >
          <NavLinks orientation="mobile" setIsOpen={setIsOpen} />
          {/* SOCIAL MEDIA */}
          <h2 className="font-bold text-xl pl-8 py-2 bg-black text-white w-full">
            Follow us!
          </h2>
          <SocialMediaLinks orientation="mobile" />
          <Toggle />
        </aside>
      </div>
    </>
  );
}
