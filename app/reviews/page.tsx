import { Suspense } from "react";
import ReviewsList from "../ui/lists/ReviewsList";
import { getPage } from "../lib/data";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";

export default async function Page({
  searchParams,
}: {
  searchParams?: { displayed: string };
}) {
  const displayed = Number(searchParams?.displayed) || 8;
  const reviewsPage = await getPage("/the-book-club-reviews/");
  const cleanReviews = {
    title: DOMPurify.sanitize(reviewsPage.title),
    content: DOMPurify.sanitize(reviewsPage.content),
  };
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-20 items-center justify-center w-[80vw] mt-[20vh] mb-[10vh]">
        <div className="flex gap-8">
          <Image
            src="/rev4.png"
            width={400}
            height={400}
            alt="reviews page pic"
            className="hidden sm:inline"
            style={{ clipPath: "circle(40%)" }}
          />
          <div className="flex flex-col justify-center gap-8">
            <h2 className="text-4xl">{cleanReviews.title}</h2>
            <div
              className="sm:text-md text-lg"
              dangerouslySetInnerHTML={{ __html: `${cleanReviews.content}` }}
            />
          </div>
        </div>
        <Suspense>
          <ReviewsList displayed={displayed} />
        </Suspense>
      </section>
    </main>
  );
}
