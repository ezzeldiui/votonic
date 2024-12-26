"use client";

import { currentPollIdAtom } from "@atoms/pollId";
import { useSetAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Add or remove route prefixes as needed
const ROUTE_PREFIXES = ["poll", "vote", "survey", "quiz"] as const;

export function PollIdProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const setPollId = useSetAtom(currentPollIdAtom);

  useEffect(() => {
    // Split the pathname into segments and remove empty strings
    const segments = pathname.split("/").filter(Boolean);

    // Find the first matching prefix and get the ID that follows it
    const prefixIndex = segments.findIndex((segment) =>
      ROUTE_PREFIXES.includes(segment as (typeof ROUTE_PREFIXES)[number])
    );

    // If we found a prefix and there's a segment after it, that's our ID
    const newPollId =
      prefixIndex !== -1 && segments[prefixIndex + 1]
        ? segments[prefixIndex + 1]
        : "";

    setPollId(newPollId);
  }, [pathname, setPollId]);

  return <>{children}</>;
}
