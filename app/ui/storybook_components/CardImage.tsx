import { useState } from "react";
import AltImageProps from "../interfaces/AltImageProps";

export default function CardImage({
  url,
  altText,
  title,
  description,
  link,
}: AltImageProps) {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div
      className={`h-auto mx-[2vw] bg-surface-highest text-on-surface border-black border-4 shadow-[4px_4px_0_1px_rgba(0,0,0,1)] diff-font ${
        description ? "w-[76vw]" : "w-max max-w-sm"
      }`}
      onMouseEnter={() => setHover("1")}
      onMouseLeave={() => setHover(null)}
    >
      <a href={link}>
        {hover === "1" && (
          <div className="w-[calc(76vw-8px)] h-[calc(100%-8px)] bg-tertiary-container/75 absolute flex items-center justify-center">
            <h3 className="diff-font text-on-surface text-4xl">GO!</h3>
          </div>
        )}
        {url ? <img className="w-full" src={url} alt={altText} /> : null}
        <div className={`px-4 py-5 ${description ? "w-11/12" : "w-max"}`}>
          <h2 className={`text-3xl ${description ? "mb-4" : ""}`}>{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </a>
    </div>
  );
}
