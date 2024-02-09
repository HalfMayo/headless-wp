import { Suspense } from "react";
import RecentList from "./ui/lists/RecentList";
import Image from "next/image";
import StreamingPlat from "./ui/StreamingPlat";
import Feed from "./ui/lists/Feed";
import Hero from "./ui/Hero";

export default function Page() {
  return (
    <main className="flex flex-col gap-12 w-full items-center justify-center">
      {/* TITLE + FEAT IMG */}
      <section className="sm:h-[90vh] sm:w-full h-screen w-[2/4] flex items-center justify-center">
        <div className="w-full flex flex-col sm:flex-row sm:items-end items-start justify-center">
          <h1>
            <span className="text-4xl sm:pl-3 pl-2 sm:font-semibold font-bold tracking-wide">
              the
            </span>
            <br />
            <span className="font-semibold pl-1 sm:pl-0 text-8xl sm:text-[200px] sm:leading-[175px]">
              Book
            </span>
            <br />
            <span className="font-bold text-9xl sm:text-[250px] sm:leading-[225px]">
              Club
            </span>
          </h1>
          <p className="sm:font-light font-bold pl-4 sm:pl-0 text-9xl sm:text-[445px] sm:leading-none">
            \
          </p>
          {/* Immagini diverse a seconda che sia mobile o desktop */}
          {/* <Hero /> */}
        </div>
      </section>
      {/* RECENT ACTIVITIES (REVIEWS + PODCASTS) */}
      <section className="sm:h-[90vh] w-full flex flex-col items-center justify-center gap-12">
        <h2 className="text-4xl font-bold">Recent activities</h2>
        <Suspense>
          <RecentList />
        </Suspense>
      </section>
      {/* PODCAST LINKS */}
      <section className="h-[50vh] sm:h-[90vh] w-[80vw] sm:w-full flex flex-col items-center justify-center gap-12">
        <h2 className="text-4xl font-bold text-center">
          Listen to The Book Club podcast!
        </h2>
        <StreamingPlat />
      </section>
      {/* READING REC (IG POSTS CAROUSEL) - use WP as backend/db */}
      <section className="h-[65vh] sm:h-[90vh] w-[80vw] sm:w-full flex flex-col items-center justify-start sm:justify-center gap-12">
        <h2 className="text-4xl font-bold text-center">
          Need book recommendations? Follow us on Instagram!
        </h2>
        <Suspense>
          <Feed />
        </Suspense>
      </section>
    </main>
  );
}
