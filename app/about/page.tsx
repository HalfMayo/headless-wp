import { Suspense } from "react";
import AuthorsList from "../ui/lists/AuthorsList";
import { getPage } from "../lib/data";
import DOMPurify from "isomorphic-dompurify";

export default async function Page() {
  const aboutPage = await getPage("/about/");
  const cleanAbout = {
    title: DOMPurify.sanitize(aboutPage.title),
    content: DOMPurify.sanitize(aboutPage.content),
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-20 items-center justify-center w-[80vw] mt-[20vh] mb-[10vh]">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h2 className="text-4xl">{cleanAbout.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: `${cleanAbout.content}` }} />
        </div>
        <Suspense>
          <AuthorsList />
        </Suspense>
      </section>
    </main>
  );
}
