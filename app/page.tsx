import { Suspense } from "react";
import RecentList from "./ui/lists/RecentList";
import Image from "next/image";
import StreamingPlat from "./ui/StreamingPlat";
import Feed from "./ui/Feed";

export default function Page() {
  return (
    <main className="flex flex-col gap-12 w-full items-center justify-center">
      {/* TITLE + FEAT IMG */}
      <section className="h-[90vh] w-full flex items-center justify-center">
        <div className="w-full flex items-end justify-center">
          <h1>
            <span className="text-xl pl-3">the</span>
            <br />
            <span className="font-semibold text-[200px] leading-[175px]">
              Book
            </span>
            <br />
            <span className="font-bold text-[250px] leading-[225px]">Club</span>
          </h1>
          <p className="font-light text-[445px] leading-none">\</p>
          <Image src="/pg.png" alt="Character" width={319} height={890} />
        </div>
      </section>
      {/* RECENT ACTIVITIES (REVIEWS + PODCASTS) */}
      <section className="h-[90vh] w-full flex flex-col items-center justify-center gap-12">
        <h2 className="text-4xl font-bold">Recent activities</h2>
        <Suspense>
          <RecentList />
        </Suspense>
      </section>
      {/* PODCAST LINKS */}
      <section className="h-[90vh] w-full flex flex-col items-center justify-center gap-12">
        <h2 className="text-4xl font-bold">Listen to The Book Club podcast!</h2>
        <StreamingPlat />
      </section>
      {/* READING REC (IG POSTS CAROUSEL) - use WP as backend/db */}
      <section className="h-[90vh] w-full flex flex-col items-center justify-center gap-12">
        <h2 className="text-4xl font-bold">
          Need book recommendations? Follow us on Instagram!
        </h2>
        <Suspense>
          <Feed />
        </Suspense>
      </section>
    </main>
  );
}
