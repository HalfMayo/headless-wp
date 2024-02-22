import { Suspense } from "react";
import AuthorsList from "../ui/lists/AuthorsList";
import { getPage } from "../lib/data";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import { montserrat } from "../ui/fonts";
import Loading from "../loading";

export default async function Page() {
  const aboutPage = await getPage("/about/");
  const cleanAbout = {
    title: DOMPurify.sanitize(aboutPage.title),
    content: DOMPurify.sanitize(aboutPage.content),
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-20 items-center justify-center w-[80vw] mt-[20vh] mb-[10vh]">
        <div className="flex gap-8 w-screen sm:w-full p-8 dark:bg-base-dark bg-base-light sm:rounded-3xl text-black">
          <div className="items-center justify-center hidden sm:flex">
            <Image
              src="/ep1.png"
              width={400}
              height={400}
              alt="about page pic"
              style={{ clipPath: "circle(40%)", width: "30vw", height: "30vw" }}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <h2 className={`text-4xl font-bold ${montserrat.className}`}>
              {cleanAbout.title}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: `${cleanAbout.content}` }}
              className="sm:w-[80%] text-lg sm:text-md"
            />
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          <AuthorsList />
        </Suspense>
      </section>
    </main>
  );
}
