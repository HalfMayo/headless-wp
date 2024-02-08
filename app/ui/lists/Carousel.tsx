"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PostSum } from "@/app/lib/definitions";

export default function Carousel({
  posts,
  cardNum = 3,
}: {
  posts: PostSum[];
  cardNum?: number;
}) {
  const prevEls = [];
  const nextEls = [];
  const [currentSlide, setCurrentSlide] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const list = posts.map((post: PostSum) => (
    <li key={post.uri} className="h-[300px] mx-[4px] w-[300px]">
      <Link href={`/feed${post.uri}`} passHref>
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
        className="sm:static absolute left-[50%] translate-x-[-85%] top-[100%] w-12 h-12 text-2xl"
        aria-label="Previous Card"
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <ul className="list-none w-[924px] overflow-hidden p-0 pb-3">
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
        className="sm:static absolute right-[50%] translate-x-[85%] top-[100%] w-12 h-12 text-2xl"
        aria-label="Next Card"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
}
