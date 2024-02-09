import clsx from "clsx";
import Link from "next/link";

const menu = [
  {
    page: "Home",
    href: "/",
  },
  {
    page: "About",
    href: "/about",
  },
  {
    page: "Reviews",
    href: "/reviews",
  },
  {
    page: "Episodes",
    href: "/episodes",
  },
];

export default function NavLinks({
  orientation = "hor",
}: {
  orientation?: "hor" | "ver" | "mobile";
}) {
  return (
    <nav
      className={clsx("flex", {
        "items-center justify-center": orientation === "hor",
        "flex-col justify-center gap-4 p-8 font-semibold text-xl":
          orientation === "mobile",
        "flex-col justify-center": orientation === "ver",
      })}
    >
      {menu.map((el) => (
        <Link
          key={el.page}
          href={el.href}
          className={clsx({
            "px-4": orientation === "hor",
            "p-0": orientation === "ver",
          })}
        >
          {el.page}
        </Link>
      ))}
    </nav>
  );
}
