import { Suspense } from "react";
import ReviewsList from "../ui/lists/ReviewsList";
import { getPage } from "../lib/data";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import { montserrat } from "../ui/fonts";
import { ColorRing } from "react-loader-spinner";
import Loading from "../loading";
import { POST_SHOWN } from "../lib/const";

export default async function Page({
  searchParams,
}: {
  searchParams?: { displayed: string };
}) {
  const displayed = Number(searchParams?.displayed) || POST_SHOWN;
  const reviewsPage = await getPage("/the-book-club-reviews/");
  const cleanReviews = {
    title: DOMPurify.sanitize(reviewsPage.title),
    content: DOMPurify.sanitize(reviewsPage.content),
  };
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-20 items-center justify-center w-[80vw] mt-[20vh] mb-[10vh]">
        <div className="flex gap-8 w-screen sm:w-full p-8 dark:bg-base-dark bg-base-light sm:rounded-3xl text-black">
          <div className="items-center justify-center hidden sm:flex">
            <Image
              src="/rev4.png"
              width={400}
              height={400}
              alt="reviews page pic"
              className=""
              style={{ clipPath: "circle(40%)", width: "30vw", height: "30vw" }}
            />
          </div>
          <div className="flex flex-col justify-center gap-8">
            <h2 className={`text-4xl font-bold ${montserrat.className}`}>
              {cleanReviews.title}
            </h2>
            <div
              className="sm:w-[80%] text-lg sm:text-md"
              dangerouslySetInnerHTML={{ __html: `${cleanReviews.content}` }}
            />
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          <ReviewsList displayed={displayed} />
        </Suspense>
      </section>
    </main>
  );
}
