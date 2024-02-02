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

export default function StreamingPlat() {
  return (
    <div className="flex items-center justify-center gap-8">
      {streaming.map((el) => (
        <Link key={el.name} href={el.href}>
          <button className="p-2 bg-white text-black rounded-md font-bold">
            {el.name.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  );
}
