"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function useUpdateQuery() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (params: Record<string, string | number>) => {
    const current = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      current.set(key, String(value));
    });

    // Reset page only when size/sort changes and page isn't explicitly set
    const hasPage = Object.prototype.hasOwnProperty.call(params, "page");
    const affectsPagination =
      Object.prototype.hasOwnProperty.call(params, "size") ||
      Object.prototype.hasOwnProperty.call(params, "sort");
    if (!hasPage && affectsPagination) {
      current.set("page", "1");
    }
    router.push(`?${current.toString()}`, { scroll: false });
  };
}
