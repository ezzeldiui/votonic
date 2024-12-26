"use client";

import { currentPollIdAtom } from "@atoms/pollId";
import { useAtomValue } from "jotai";
import { redirect } from "next/navigation";

export default function PollCreationPage() {
  // Use useAtomValue instead of useAtom since we only need to read the value
  const pollId = useAtomValue(currentPollIdAtom);

  const isPollIdValid = !!pollId;

  if (!isPollIdValid) {
    return redirect("/dashboard");
  }

  return (
    <div>
      <h1>Create Poll</h1>
      <p>Poll ID: {pollId}</p>
    </div>
  );
}
