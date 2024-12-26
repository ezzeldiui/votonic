"use client";

import { Button } from "@ui";
import { useId } from "@hooks/useId";
import { currentPollIdAtom } from "@atoms/pollId";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { SendEmailButton } from "@components/buttons";

export default function DashboardPage() {
  const { generateId } = useId();
  const setPollId = useSetAtom(currentPollIdAtom);
  const router = useRouter();

  function onClickPollCreation() {
    const id = generateId();
    setPollId(id);
    router.push(`/dashboard/poll/${id}/create`);
  }

  return (
    <section className="mx-4">
      <Button onClick={onClickPollCreation} className="my-6">
        Create a poll
      </Button>

      <SendEmailButton />

      <h1 className="mb-6">Your Polls:</h1>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white/50 p-4 rounded-lg shadow-lg">
          <h2 className="mb-2">Poll 1</h2>
          <p className="text-sm">
            Poll Card Won't look like this, will be updated later
          </p>
        </div>
      </div>
    </section>
  );
}
