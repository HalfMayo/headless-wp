import { getPost, getReviews } from "@/app/lib/data";
import { PostSum } from "@/app/lib/definitions";
import { toDate } from "@/app/lib/utils";
import { montserrat } from "@/app/ui/fonts";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { uri: string } }) {
  const post = await getPost(params.uri);
  const prevRev = await getReviews(5);

  const cleanPost = {
    ...post,
    excerpt: DOMPurify.sanitize(post.excerpt),
    content: DOMPurify.sanitize(post.content),
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <article className="flex flex-col gap-8 sm:items-start items-center justify-center w-screen sm:w-[80vw] sm:my-[20vh]">
        <div className="relative flex w-[80vw] gap-14 sm:flex-row flex-col">
          <div className="flex items-center justify-center">
            <Image
              src={cleanPost.featuredImage.node.sourceUrl}
              alt="Post Image"
              width={500}
              height={500}
              className="object-cover sm:circle sm:object-contain sm:object-center sm:w-[20vw] w-screen"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 pb-8 sm:pb-0 border-b-2 dark:border-white border-black">
            <h2
              className={`font-bold text-6xl sm:text-left text-center mb-4 sm:mb-0 ${montserrat.className}`}
            >
              {cleanPost.title}
            </h2>
            <h3 className="font-semibold text-2xl pl-2">
              {cleanPost.author.node.firstName} {cleanPost.author.node.lastName}{" "}
              &bull; {toDate(cleanPost.date)}{" "}
            </h3>
            <div
              className="text-lg sm:text-md pl-2"
              dangerouslySetInnerHTML={{ __html: `${cleanPost.excerpt}` }}
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col-reverse sm:gap-16 gap-8">
          <div className="flex flex-col sm:w-[20vw] w-screen gap-4">
            <div className="dark:bg-base-dark bg-base-light text-black sm:rounded-3xl p-8 sm:w-[20vw]">
              <h3 className="font-semibold text-xl mb-4">Last reviews</h3>
              <ul className="list-none divide-y">
                {prevRev.map((ep: PostSum) => (
                  <li key={ep.uri} className="pl-2 py-2">
                    <Link href={`/episodes/episode${ep.uri}`}>{ep.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-8 text-lg px-8 sm:pr-0 sm:pl-2 sm:text-md">
            <div dangerouslySetInnerHTML={{ __html: `${cleanPost.content}` }} />
            <Link href="/reviews">&larr; Back to the reviews list</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
