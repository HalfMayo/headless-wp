import { getPost } from "@/app/lib/data";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import { Modal } from "./modal";
import { convertMonth } from "@/app/lib/utils";

export default async function Page({ params }: { params: { uri: string } }) {
  const post = await getPost(params.uri);
  const cleanPost = { ...post, content: DOMPurify.sanitize(post.content) };
  const date = new Date(post.date);
  return (
    <Modal>
      <div>
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt="IG post"
          width={500}
          height={500}
        />
      </div>
      <div className="w-2/4 flex flex-col py-8 pl-8 pr-12 gap-8">
        <div className="flex items-center gap-4 w-full">
          <div className="rounded-full h-[50px] w-[50px] overflow-hidden">
            <Image
              src="/IGprofile.jpg"
              alt="IG profile pic"
              width={75}
              height={75}
            />
          </div>
          <div>
            <p>
              <strong>thebookclub</strong>
            </p>
            <p>
              {date.getDate()} {convertMonth(date.getMonth())}{" "}
              {date.getFullYear()}
            </p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: `${cleanPost.content}` }}
          className="overflow-auto"
        />
      </div>
    </Modal>
  );
}
