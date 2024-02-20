import { Suspense } from "react";
import StreamingPlat from "../ui/StreamingPlat";
import EpisodesList from "../ui/lists/EpisodesList";
import { getPage } from "../lib/data";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import { montserrat } from "../ui/fonts";

export default async function Page({
  searchParams,
}: {
  searchParams: { displayed: number };
}) {
  const displayed = Number(searchParams?.displayed) || 8;
  const episodesPage = await getPage("/the-book-club-episodes/");
  const cleanEpisodes = {
    title: DOMPurify.sanitize(episodesPage.title),
    content: DOMPurify.sanitize(episodesPage.content),
  };
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-20 items-center justify-center w-[80vw] mt-[20vh] mb-[10vh]">
        <div className="flex gap-8 w-screen sm:w-full p-8 dark:bg-base-dark bg-base-light sm:rounded-3xl text-black">
          <Image
            src="/ep2.png"
            width={400}
            height={400}
            alt="episodes page pic"
            className="hidden sm:inline"
            style={{ clipPath: "circle(40%)" }}
          />
          <div className="flex flex-col justify-center gap-8">
            <h2 className={`text-4xl font-bold ${montserrat.className}`}>
              {cleanEpisodes.title}
            </h2>
            <div
              className="sm:w-[80%] text-lg sm:text-md"
              dangerouslySetInnerHTML={{ __html: `${cleanEpisodes.content}` }}
            ></div>
          </div>
        </div>
        <Suspense>
          <EpisodesList displayed={displayed} />
        </Suspense>
        <div>
          <h3 className="text-2xl mb-8 text-center">
            Listen to our podcast on the main streaming platforms!
          </h3>
          <StreamingPlat />
        </div>
      </section>
    </main>
  );
}
