import { Suspense } from "react";
import ReviewsList from "../ui/lists/ReviewsList";

export default function Page({
  searchParams,
}: {
  searchParams?: { displayed: string };
}) {
  const displayed = Number(searchParams?.displayed) || 10;

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-8 items-center justify-center w-[80vw] mt-[20vh] mb-[10vh]">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl">The Book Club reviews</h2>
          <h3 className="text-2xl">
            Our in-depth, ground-brakeing, jaw-dropping reviews
          </h3>
        </div>
        <Suspense>
          <ReviewsList displayed={displayed} />
        </Suspense>
      </section>
    </main>
  );
}
