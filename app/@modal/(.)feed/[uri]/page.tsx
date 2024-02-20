import { getPost } from "@/app/lib/data";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import { Modal } from "./modal";
import { convertMonthArr } from "@/app/lib/utils";

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
          sizes="(max-width: 640px) 80vw, 500px"
          style={{ width: "100%" }}
        />
      </div>
      <div className="sm:w-2/4 flex flex-col py-8 pl-4 pr-4 sm:pl-8 sm:pr-12 gap-8 overflow-auto">
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
              {date.getDate()} {convertMonthArr(date.getMonth())}{" "}
              {date.getFullYear()}
            </p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: `${cleanPost.content}` }}
          className="overflow-auto px-4 sm:px-0"
        />
      </div>
    </Modal>
  );
}
