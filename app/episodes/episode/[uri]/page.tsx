import { getPost } from "@/app/lib/data";
import StreamingPlat from "@/app/ui/StreamingPlat";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";

export default async function Page({ params }: { params: { uri: string } }) {
  const post = await getPost(params.uri);

  const cleanPost = {
    ...post,
    excerpt: DOMPurify.sanitize(post.excerpt),
    content: DOMPurify.sanitize(post.content),
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <article className="flex flex-col gap-8 items-center justify-center w-screen sm:w-[80vw] sm:mt-[10vh]">
        <div className="relative w-full h-[30vh] overflow-hidden">
          <Image
            src={cleanPost.featuredImage.node.sourceUrl}
            alt="Post Image"
            fill={true}
            style={{
              objectFit: "cover",
              objectPosition: "bottom -30px right 0",
            }}
          />
        </div>
        <div className="w-[80vw]">
          <h2 className="font-bold text-6xl text-center mb-4 sm:mb-0">
            {cleanPost.title}
          </h2>
          <div
            className="p-4 text-lg sm:p-8 sm:text-md"
            dangerouslySetInnerHTML={{ __html: `${cleanPost.content}` }}
          />
          <div className="h-[20vh] sm:h-auto flex flex-col items-center justify-center">
            <h3 className="text-4xl font-semibold text-center mb-4 sm:mb-0">
              Listen now!
            </h3>
            <StreamingPlat />
          </div>
        </div>
      </article>
    </main>
  );
}
