"use client";

import { POST_SHOWN } from "@/app/lib/const";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Pagination({ totalCount }: { totalCount: number }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const displayed = Number(searchParams.get("displayed")) || POST_SHOWN;
  const [buttonText, setButtonText] = useState<string>();

  function createURL(toDisplay: string | number) {
    const params = new URLSearchParams(searchParams);
    params.set("displayed", toDisplay.toString());
    return `${pathName}?${params.toString()}`;
  }

  useEffect(() => {
    if (totalCount > displayed) {
      setButtonText("Load more");
    }
  }, [totalCount, displayed]);

  if (totalCount <= displayed) {
    return null;
  }

  return (
    <Link href={createURL(displayed + POST_SHOWN)} scroll={false}>
      <button
        className="w-auto h-auto dark:bg-white bg-black py-2 px-3 rounded-full font-bold dark:text-black text-white mt-8"
        onClick={() => setButtonText("Loading...")}
      >
        {buttonText}
      </button>
    </Link>
  );
}
