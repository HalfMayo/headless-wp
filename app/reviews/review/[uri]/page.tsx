import { getPost } from "@/app/lib/data";
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
      <article className="flex flex-col gap-8 items-center justify-center w-[80vw] mt-[10vh]">
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
        <h2 className="font-bold text-6xl w-full text-center">
          {cleanPost.title}
        </h2>
        <div
          className="p-8"
          dangerouslySetInnerHTML={{ __html: `${cleanPost.content}` }}
        />
      </article>
    </main>
  );
}
