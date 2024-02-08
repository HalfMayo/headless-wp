import Link from "next/link";
import NavLinks from "../menu/NavLinks";

export default function Footer() {
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
        <ul>
          <li>
            <Link href="">Instagram</Link>
          </li>
          <li>
            <Link href="">TikTok</Link>
          </li>
          <li>
            <Link href="">Twitch</Link>
          </li>
          <li>
            <Link href="">Email</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
