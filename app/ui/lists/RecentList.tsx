import { getRecent } from "@/app/lib/data";
import { PostSum } from "@/app/lib/definitions";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import clsx from "clsx";
import { toDate } from "@/app/lib/utils";

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
          className="h-fit sm:w-[24.5vw] lg:w-[18vw] 2xl:w-[15vw] sm:mx-2 sm:mb-4 dark:border-white border-black border-2 rounded-lg"
        >
          <Link
            href={`/${
              post.categories.nodes[0].name === "Episodes"
                ? "episodes/episode"
                : "reviews/review"
            }${post.uri}`}
          >
            <div className="relative h-[20vh] w-full overflow-hidden rounded-t-lg">
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
            <div className="gap-2 flex flex-col p-4 ">
              <div className="flex h-[50px] gap-2">
                <Image
                  src={post.author.node.avatar.url}
                  alt="author avatar"
                  width={50}
                  height={50}
                  style={{ clipPath: "circle(40%)" }}
                />
                <div className="flex flex-col gap-1 h-full justify-center">
                  <p className="text-sm">
                    {post.author.node.firstName} {post.author.node.lastName}
                  </p>
                  <p className="text-sm">{toDate(post.date)}</p>
                </div>
              </div>
              <div className="h-44">
                <h3 className="text-lg font-semibold line-clamp-2 text-ellipsis mb-2">
                  {post.title}
                </h3>
                <div
                  className="line-clamp-4 text-ellipsis"
                  dangerouslySetInnerHTML={{ __html: `${post.excerpt}` }}
                />
              </div>
              <hr />
              <p className="text-sm">
                {post.categories.nodes[0].name === "Episodes"
                  ? `Monthly plays: ${Math.ceil(
                      Math.random() * 100000
                    ).toLocaleString()}`
                  : `Comments: ${post.comments.nodes.length}`}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
