"use client";

import { Button } from "@ui";
import { useId } from "@hooks/useId";
import { currentPollIdAtom } from "@atoms/pollId";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";

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

      <Button
        onClick={async () => {
          try {
            const response = await fetch("/api/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Response:", data);
          } catch (error) {
            console.error("Error:", error);
          }
        }}
      >
        Test Email
      </Button>

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
