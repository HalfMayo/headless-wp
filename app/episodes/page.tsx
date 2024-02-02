import { Suspense } from "react";
import StreamingPlat from "../ui/StreamingPlat";
import EpisodesList from "../ui/lists/EpisodesList";

export default function Page({
  searchParams,
}: {
  searchParams: { displayed: number };
}) {
  const displayed = Number(searchParams?.displayed) || 10;
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-8 items-center justify-center w-[80vw] mt-[20vh] mb-[10vh]">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl">The Book Club episodes</h2>
          <h3 className="text-2xl">
            Listen to our podcast on the main streaming platforms!
          </h3>
        </div>
        <StreamingPlat />
        <Suspense>
          <EpisodesList displayed={displayed} />
        </Suspense>
      </section>
    </main>
  );
}
