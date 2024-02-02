"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ listLength }: { listLength: number }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const displayed = Number(searchParams.get("displayed")) || 10;

  function createURL(toDisplay: string | number) {
    const params = new URLSearchParams(searchParams);
    params.set("displayed", toDisplay.toString());
    return `${pathName}?${params.toString()}`;
  }

  if (displayed + 10 - listLength > 10) {
    return null;
  }

  return (
    <Link
      href={displayed + 10 - listLength > 10 ? "" : createURL(displayed + 10)}
    >
      <button className="w-auto h-auto bg-white py-2 px-3 rounded-full font-bold text-black mt-8">
        {" "}
        Load more
      </button>
    </Link>
  );
}
