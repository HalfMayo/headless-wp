import { getEpisodes, getTotalCount } from "@/app/lib/data";
import { PostSum } from "@/app/lib/definitions";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";

export default async function EpisodesList({
  displayed,
}: {
  displayed: number;
}) {
  const episodes = await getEpisodes(displayed);
  const cleanEp = episodes.map((post: PostSum) => ({
    ...post,
    excerpt: DOMPurify.sanitize(post.excerpt),
    content: DOMPurify.sanitize(post.content),
  }));

  const count = await getTotalCount("Episodes");
  const totalCount = count.length;

  return (
    <>
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-[80vw] flex-wrap items-center justify-start">
        {cleanEp.map((episode: PostSum) => (
          <li
            key={episode.uri}
            className="w-[80vw] sm:w-[24.5vw] lg:w-[18vw] sm:mx-2 sm:mb-4 dark:border-white border-black border-2 rounded-lg"
          >
            <Link href={`/episodes/episode${episode.uri}`}>
              <div className="relative h-[20vh] w-full overflow-hidden rounded-t-lg">
                <Image
                  src={episode.featuredImage.node.sourceUrl}
                  alt="Image preview"
                  width={500}
                  height={500}
                  style={{
                    objectFit: "cover",
                    position: "absolute",
                    top: "50%",
                    right: "50%",
                    transform: "translate(50%, -50%)",
                  }}
                />
              </div>
              <div className="gap-2 flex flex-col p-4 ">
                <div className="flex h-[50px] gap-2">
                  <Image
                    src="/IGprofile.jpg"
                    alt="author avatar"
                    width={50}
                    height={50}
                    style={{ clipPath: "circle(40%)" }}
                  />
                  <div className="flex flex-col gap-1 h-full justify-center">
                    <p className="text-sm">The Book Club Team</p>
                    <p className="text-sm">Mar, 1 2024</p>
                  </div>
                </div>
                <div className="h-44">
                  <h3 className="text-lg font-semibold line-clamp-2 text-ellipsis mb-2">
                    {episode.title}
                  </h3>
                  <div
                    className="line-clamp-4 text-ellipsis"
                    dangerouslySetInnerHTML={{ __html: `${episode.excerpt}` }}
                  />
                </div>
                <hr />
                <p className="text-sm">
                  Monthly plays:{" "}
                  {Math.ceil(Math.random() * 100000).toLocaleString()}
                </p>
              </div>
            </Link>
          </li>
        ))}
        {/* {emptySpaces} */}
      </ul>
      <Pagination listLength={episodes.length} totalCount={totalCount} />
    </>
  );
}
