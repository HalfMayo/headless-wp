import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const menu = [
  {
    page: "Instagram",
    href: "/",
    icon: "/instagram-logo-fill-svgrepo-com.svg",
  },
  {
    page: "TikTok",
    href: "/",
    icon: "/tiktok-logo-fill-svgrepo-com.svg",
  },
  {
    page: "Twitch",
    href: "/",
    icon: "/twitch-logo-fill-svgrepo-com.svg",
  },
  {
    page: "Email",
    href: "/",
    icon: "/envelope-simple-open-fill-svgrepo-com.svg",
  },
];

export default function SocialMediaLinks({
  orientation = "ver",
}: {
  orientation?: "ver" | "mobile" | "mobile-hor";
}) {
  return (
    <nav
      className={clsx("flex", {
        "flex-col justify-center gap-4 p-8 pt-4 font-semibold text-xl":
          orientation === "mobile",
        "flex-col justify-center": orientation === "ver",
        "flex-row items-center justify-center gap-4":
          orientation === "mobile-hor",
      })}
    >
      {menu.map((el) => (
        <Link
          key={el.page}
          href={el.href}
          className={clsx({
            "p-0": orientation === "ver",
          })}
        >
          {orientation === "mobile-hor" ? (
            <Image width={48} height={48} alt={el.page} src={el.icon} />
          ) : (
            el.page
          )}
        </Link>
      ))}
    </nav>
  );
}
