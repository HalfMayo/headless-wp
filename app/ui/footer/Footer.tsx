"use client";

import useDeviceSize from "@/app/hooks/useDeviceSize";
import NavLinks from "../menu/NavLinks";
import SocialMediaLinks from "../menu/SocialMediaLinks";

export default function Footer() {
  const [height, width] = useDeviceSize();

  if (width && width < 640) {
    return (
      <div className="w-screen h-[25vh] flex flex-col items-center justify-center gap-8">
        <h3 className="text-white dark:text-black bg-black dark:bg-white font-bold text-2xl w-screen p-4 text-center">
          Follow us!
        </h3>
        <SocialMediaLinks orientation="mobile-hor" />
      </div>
    );
  }
  return (
    <footer className="relative w-full">
      <div
        className="relative flex w-full items-center justify-center h-[25vh] z-30 bg-white dark:bg-black text-black dark:text-white"
        style={{ clipPath: "polygon(0 30%, 100% 17%, 100% 100%, 0 100%)" }}
      >
        <div className="w-[80vw] flex items-center justify-center h-full">
          <div className="w-2/4">
            <h3 className="font-bold text-lg">The Book Club</h3>
          </div>
          <div className="flex flex-col justify-center w-1/4">
            <h4 className="font-bold text-lg py-2">Menu</h4>
            <NavLinks orientation="ver" />
          </div>
          <div className="flex flex-col justify-center w-1/4">
            <h4 className="font-bold text-lg py-2">Contacts</h4>
            <SocialMediaLinks />
          </div>
        </div>
      </div>
      <div
        className="absolute w-full h-[25vh] bottom-[30px] bg-base-light dark:bg-base-dark z-20"
        style={{ clipPath: "polygon(0 35%, 100% 17%, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute w-full h-[25vh] bottom-[33px] bg-accent-light dark:bg-accent-dark z-10"
        style={{ clipPath: "polygon(0 25%, 100% 17%, 100% 100%, 0 100%)" }}
      />
    </footer>
  );
}
