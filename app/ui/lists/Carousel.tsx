"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PostSum } from "@/app/lib/definitions";
import useDeviceSize from "@/app/hooks/useDeviceSize";

export default function Carousel({
  posts,
  cardNum = 1,
}: {
  posts: PostSum[];
  cardNum?: number;
}) {
  const [height, width] = useDeviceSize();
  const prevEls = [];
  const nextEls = [];
  const [currentSlide, setCurrentSlide] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  if (width && width > 640) cardNum = 3;

  const list = posts.map((post: PostSum) => (
    <li key={post.uri} className="h-[300px] mx-[4px] w-[300px]">
      <Link href={`/feed${post.uri}`} scroll={false} passHref>
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt="IG post"
          width={300}
          height={300}
          style={{ borderRadius: "0.75rem" }}
        />
      </Link>
    </li>
  ));

  for (let i = 1; i <= list.length % cardNum; i++) {
    prevEls.push(list[list.length - 1]);
  }

  for (let i = 0; i <= cardNum; i++) {
    nextEls.push(list[i]);
  }

  function handleNext() {
    if (!disabledButtons) {
      setCurrentSlide((prev) => prev + 1);
    }
  }

  function handlePrevious() {
    if (!disabledButtons) {
      setCurrentSlide((prev) => prev - 1);
    }
  }

  function setLoop() {
    if (currentSlide === 0) {
      setDisabledButtons(true);
      setTransitionEnabled(false);
      setCurrentSlide(list.length);
    } else if (currentSlide === list.length + 1) {
      setDisabledButtons(true);
      setTransitionEnabled(false);
      setCurrentSlide(1);
    } else {
      setDisabledButtons(false);
    }
  }

  useEffect(() => {
    wrapperRef.current!.addEventListener("transitionstart", () => {
      setDisabledButtons(true);
    });
  }, []);

  useEffect(() => {
    if (currentSlide === 1 || currentSlide === list.length) {
      setDisabledButtons(false);
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 100);
    }
  }, [currentSlide, list.length]);

  return (
    <div className="relative flex items-center gap-4">
      <button
        className="sm:static absolute z-40 sm:left-[50%] sm:translate-x-[-85%] sm:top-[100%] w-12 h-12 text-2xl text-white sm:text-black sm:dark:text-white"
        aria-label="Previous Card"
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <ul
        className={`list-none overflow-hidden p-0 pb-3 ${
          cardNum === 1 ? "w-[308px]" : "w-[924px]"
        }`}
      >
        <div
          className={`flex items-center m-0 p-0 ${
            transitionEnabled ? "transition duration-1000" : ""
          }`}
          ref={wrapperRef}
          onTransitionEnd={setLoop}
          style={{
            transform: `translateX(-${(100 * currentSlide) / cardNum}%)`,
          }}
        >
          {prevEls.map((el, i) => (
            <span key={i}>{el}</span>
          ))}
          {list}
          {nextEls.map((el, i) => (
            <span key={i}>{el}</span>
          ))}
        </div>
      </ul>
      <button
        className="sm:static absolute right-0 sm:right-[50%] sm:translate-x-[85%] sm:top-[100%] w-12 h-12 text-2xl text-white sm:text-black sm:dark:text-white"
        aria-label="Next Card"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
}
