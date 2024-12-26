"use client";

import { currentPollIdAtom } from "@atoms/pollId";
import { useAtomValue } from "jotai";

export default function PollCreationPage() {
  // Use useAtomValue instead of useAtom since we only need to read the value
  const pollId = useAtomValue(currentPollIdAtom);

  return (
    <div>
      <h1>Create Poll</h1>
      <p>Poll ID: {pollId}</p>
    </div>
  );
}
