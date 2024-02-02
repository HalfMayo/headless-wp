import { useState } from "react";
import AltImageProps from "../interfaces/AltImageProps";

export default function AltImage({
  url,
  altText,
  title,
  description,
  link,
}: AltImageProps) {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div
      className="h-auto w-96 mx-5 rounded-xl text-on-surface"
      onMouseEnter={() => setHover("1")}
      onMouseLeave={() => setHover(null)}
    >
      <a href={link}>
        {hover === "1" && (
          <div className="flex flex-col items-center justify-center w-96 h-full bg-tertiary-container/75 rounded-xl p-8 gap-4 absolute">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="font-semibold text-center">{description}</p>
          </div>
        )}
        <img className="rounded-xl w-full" src={url} alt={altText} />
      </a>
    </div>
  );
}
