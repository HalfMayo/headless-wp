import { getRecent } from "@/app/lib/data";
import { PostSum } from "@/app/lib/definitions";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import clsx from "clsx";

export default async function RecentList() {
  const posts = await getRecent();

  const cleanPosts = posts.map((post: PostSum) => ({
    ...post,
    excerpt: DOMPurify.sanitize(post.excerpt),
    content: DOMPurify.sanitize(post.content),
  }));

  return (
    <ul className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-[80vw] flex-wrap items-center justify-start">
      {cleanPosts.map((post: PostSum) => (
        <li
          key={post.uri}
          className="h-fit sm:w-[24.5vw] lg:w-[18vw] 2xl:w-[15vw] sm:mx-2 sm:mb-4 dark:border-white border-black border-2"
        >
          <Link
            href={`/${
              post.categories.nodes[0].name === "Episodes"
                ? "episodes/episode"
                : "reviews/review"
            }${post.uri}`}
          >
            <div className="relative h-[20vh] w-full overflow-hidden">
              <Image
                src={post.featuredImage.node.sourceUrl}
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
            <div className="gap-2 flex flex-col p-4">
              <h3 className="text-lg font-semibold line-clamp-2 text-ellipsis">
                {post.title}
              </h3>
              <div
                className={clsx("text-ellipsis", {
                  "sm:line-clamp-4 line-clamp-3":
                    post.categories.nodes[0].name === "Reviews",
                  "sm:line-clamp-5 line-clamp-4":
                    post.categories.nodes[0].name === "Episodes",
                })}
                dangerouslySetInnerHTML={{ __html: `${post.excerpt}` }}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
