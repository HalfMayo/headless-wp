import NavLinks from "../menu/NavLinks";
import Toggle from "../menu/Toggle";

export default function Header() {
  return (
    <header className="fixed top-0 flex w-[80vw] items-center justify-between h-[10vh] z-30 dark:bg-black bg-white">
      <p>The Book Club</p>
      <div className="flex">
        <NavLinks />
        <Toggle />
      </div>
    </header>
  );
}
