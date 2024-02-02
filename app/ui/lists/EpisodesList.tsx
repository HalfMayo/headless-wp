import { getEpisodes } from "@/app/lib/data";
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

  const emptySpaces = [];

  for (let i = 0; i < 5 - (episodes.length % 5); i++) {
    emptySpaces.push(<li className="w-[15vw] h-[30vh]" />);
  }

  return (
    <>
      <ul className="flex gap-[1vw] w-[80vw] flex-wrap items-center justify-center">
        {cleanEp.map((episode: PostSum) => (
          <li
            key={episode.uri}
            className="w-[15vw] h-[30vh] border-white border-2"
          >
            <Link href={`/episodes/episode${episode.uri}`}>
              <div className="relative h-2/4 w-full overflow-hidden">
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
              <div className="h-2/4 gap-2 flex flex-col p-4">
                <h3 className="text-lg font-semibold">{episode.title}</h3>
                <div
                  className="text-ellipsis line-clamp-5"
                  dangerouslySetInnerHTML={{ __html: `${episode.excerpt}` }}
                />
              </div>
            </Link>
          </li>
        ))}
        {emptySpaces}
      </ul>
      <Pagination listLength={episodes.length} />
    </>
  );
}
