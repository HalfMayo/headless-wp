import clsx from "clsx";
import Link from "next/link";
import Instagram from "../../../public/instagram-logo-fill-svgrepo-com.svg";
import TikTok from "../../../public/tiktok-logo-fill-svgrepo-com.svg";
import Twitch from "../../../public/twitch-logo-fill-svgrepo-com.svg";
import Email from "../../../public/envelope-simple-open-fill-svgrepo-com.svg";
import { useTheme } from "next-themes";

export default function SocialMediaLinks({
  orientation = "ver",
}: {
  orientation?: "ver" | "mobile" | "mobile-hor";
}) {
  const { theme } = useTheme();
  const menu = [
    {
      page: "Instagram",
      href: "/",
      icon: (
        <Instagram
          width={48}
          height={48}
          fill={theme === "dark" ? "white" : "black"}
        />
      ),
    },
    {
      page: "TikTok",
      href: "/",
      icon: (
        <TikTok
          width={48}
          height={48}
          fill={theme === "dark" ? "white" : "black"}
        />
      ),
    },
    {
      page: "Twitch",
      href: "/",
      icon: (
        <Twitch
          width={48}
          height={48}
          fill={theme === "dark" ? "white" : "black"}
        />
      ),
    },
    {
      page: "Email",
      href: "/",
      icon: (
        <Email
          width={48}
          height={48}
          fill={theme === "dark" ? "white" : "black"}
        />
      ),
    },
  ];
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
          {orientation === "mobile-hor" ? el.icon : el.page}
        </Link>
      ))}
    </nav>
  );
}
