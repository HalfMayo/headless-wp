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
    <footer className="flex items-center justify-center w-[80vw] h-[25vh]">
      <div className="w-2/4">
        <h3>The Book Club</h3>
      </div>
      <div className="flex flex-col justify-center w-1/4">
        <h4>Menu</h4>
        <NavLinks orientation="ver" />
      </div>
      <div className="flex flex-col justify-center w-1/4">
        <h4>Contacts</h4>
        <SocialMediaLinks />
      </div>
    </footer>
  );
}
