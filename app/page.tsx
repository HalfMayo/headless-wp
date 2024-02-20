import { Suspense } from "react";
import RecentList from "./ui/lists/RecentList";
import StreamingPlat from "./ui/StreamingPlat";
import Feed from "./ui/lists/Feed";
import Hero from "./ui/Hero";
import Image from "next/image";
import { montserrat } from "./ui/fonts";

export default function Page() {
  return (
    <main className="flex flex-col gap-12 w-full items-center justify-center">
      {/* TITLE + FEAT IMG */}
      <section
        className={`${montserrat.className} sm:h-[90vh] sm:mt-[10vh] sm:w-full h-screen w-[2/4] flex items-center justify-center`}
      >
        <div className="w-full flex flex-col sm:flex-row sm:items-end items-start justify-center relative">
          <h1>
            <span className="text-2xl sm:text-4xl sm:pl-4 pl-2 font-bold tracking-normal sm:tracking-wide">
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
          <p className="font-bold pl-4 text-9xl block sm:hidden">\</p>
          {/* Immagini diverse a seconda che sia mobile o desktop */}
          <Hero />
        </div>
      </section>
      {/* ABOUT */}
      <section className="sm:h-screen w-[80vw] flex flex-col items-center justify-center gap-12 mb-20 sm:mb-0">
        <div className="flex gap-8 rounded-3xl dark:bg-base-dark bg-base-light p-8">
          <Image
            src="/rev6.png"
            width={500}
            height={500}
            alt="about image"
            className="hidden sm:inline"
            style={{ clipPath: "circle(40%)" }}
          />
          <div className="flex flex-col gap-4 h-full justify-center">
            <h3
              className={`text-4xl font-bold ${montserrat.className} text-black`}
            >
              Welcome to the Book Club!
            </h3>
            <h4
              className={`text-2xl font-semibold ${montserrat.className} text-black`}
            >
              A great place to discover new books and talk about them!
            </h4>

            <p className="text-lg sm:text-md w-[80%] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              purus nunc, placerat nec varius eu, efficitur sit amet nulla.
              Integer in lacus eget enim imperdiet egestas. Sed volutpat leo vel
              luctus bibendum. Mauris nec placerat sapien. Nunc eu ante
              imperdiet, ullamcorper orci id, bibendum lorem. Donec aliquam sem
              vitae augue blandit, in egestas purus volutpat. Donec auctor
              dapibus pulvinar. Morbi suscipit vehicula porttitor. Duis nisl
              justo, elementum at sem eu, tempor posuere arcu. Aenean sit amet
              eros in nulla hendrerit commodo quis et ante. Integer quis
              imperdiet nibh. Nam eleifend ligula nec dolor vestibulum, a
              ultricies mi rutrum. In hac habitasse platea dictumst. Etiam
              volutpat id erat in congue.
            </p>
            <div className="flex flex-col gap-4">
              <h3
                className={`text-2xl font-bold ${montserrat.className} text-black`}
              >
                Listen to The Book Club podcast!
              </h3>
              <StreamingPlat justify="start" />
            </div>
          </div>
        </div>
      </section>
      {/* RECENT ACTIVITIES (REVIEWS + PODCASTS) */}
      <section className="sm:h-screen sm:w-full w-[80vw] flex flex-col items-center justify-center gap-12 mb-20 sm:mb-0">
        <h2 className={`text-4xl font-bold ${montserrat.className}`}>
          Recent activities
        </h2>
        <Suspense>
          <RecentList />
        </Suspense>
      </section>
      {/* READING REC (IG POSTS CAROUSEL) - use WP as backend/db */}
      <section className="h-[65vh] sm:h-[90vh] w-[80vw] sm:w-full flex flex-col items-center justify-start sm:justify-center gap-12">
        <h2
          className={`text-4xl font-bold text-center ${montserrat.className}`}
        >
          Need book recommendations? Follow us on Instagram!
        </h2>
        <Suspense>
          <Feed />
        </Suspense>
      </section>
    </main>
  );
}
