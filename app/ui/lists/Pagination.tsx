"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({
  listLength,
  totalCount,
}: {
  listLength: number;
  totalCount: number;
}) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const displayed = Number(searchParams.get("displayed")) || 8;

  function createURL(toDisplay: string | number) {
    const params = new URLSearchParams(searchParams);
    params.set("displayed", toDisplay.toString());
    return `${pathName}?${params.toString()}`;
  }

  if (totalCount <= displayed) {
    return null;
  }

  return (
    <Link href={createURL(displayed + 8)} scroll={false}>
      <button className="w-auto h-auto dark:bg-white bg-black py-2 px-3 rounded-full font-bold dark:text-black text-white mt-8">
        {" "}
        Load more
      </button>
    </Link>
  );
}
