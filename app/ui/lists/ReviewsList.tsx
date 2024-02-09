import { getReviews } from "@/app/lib/data";
import { PostSum } from "@/app/lib/definitions";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";

export default async function ReviewsList({
  displayed,
}: {
  displayed: number;
}) {
  const reviews = await getReviews(displayed);
  const cleanRev = reviews.map((post: PostSum) => ({
    ...post,
    excerpt: DOMPurify.sanitize(post.excerpt),
    content: DOMPurify.sanitize(post.content),
  }));

  const emptySpaces = [];

  if (reviews.length % 5 !== 0) {
    for (let i = 0; i < 5 - (reviews.length % 5); i++) {
      emptySpaces.push(<li className="hidden sm:block w-[15vw] h-[30vh]" />);
    }
  }

  return (
    <>
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-[1vw] w-[80vw] flex-wrap items-center justify-center">
        {cleanRev.map((review: PostSum) => (
          <li
            key={review.uri}
            className="w-[80vw] h-[40vh] sm:w-[15vw] sm:h-[30vh] dark:border-white border-black border-2"
          >
            <Link href={`/reviews/review${review.uri}`}>
              <div className="relative h-2/4 w-full overflow-hidden">
                <Image
                  src={review.featuredImage.node.sourceUrl}
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
                <h3 className="text-lg font-semibold">{review.title}</h3>
                <div
                  className="line-clamp-4 text-ellipsis"
                  dangerouslySetInnerHTML={{ __html: `${review.excerpt}` }}
                />
              </div>
            </Link>
          </li>
        ))}
        {emptySpaces}
      </ul>
      <Pagination listLength={reviews.length} />
    </>
  );
}
