import NavLinks from "../NavLinks";

export default function Header() {
  return (
    <header className="fixed top-0 flex w-[80vw] items-center justify-between h-[10vh] z-30 bg-black">
      <p>The Book Club</p>
      <NavLinks />
    </header>
  );
}
