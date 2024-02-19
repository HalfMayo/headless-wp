import Link from "next/link";

const streaming = [
  {
    name: "Spotify",
    href: "https://www.spotify.com/",
  },
  {
    name: "Stitcher",
    href: "https://www.stitcher.com/",
  },
  {
    name: "Google Podcast",
    href: "https://podcasts.google.com/",
  },
];

export default function StreamingPlat({
  justify = "center",
}: {
  justify?: "center" | "start";
}) {
  return (
    <div
      className={`flex items-center gap-8 ${
        justify === "center" ? "justify-center" : "justify-start"
      }`}
    >
      {streaming.map((el) => (
        <Link key={el.name} href={el.href}>
          <button className="p-2 bg-black text-white dark:bg-white dark:text-black rounded-md font-bold">
            {el.name.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  );
}
