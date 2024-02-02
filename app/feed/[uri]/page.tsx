import { getPost } from "@/app/lib/data";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";

export default async function Page({ params }: { params: { uri: string } }) {
  const post = await getPost(params.uri);
  const cleanPost = { ...post, content: DOMPurify.sanitize(post.content) };
  return (
    <div>
      <Image
        src={post.featuredImage.node.sourceUrl}
        alt="IG post"
        width={500}
        height={500}
      />
      <p>{post.title}</p>
    </div>
  );
}
