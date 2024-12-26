"use client";

import { Header } from "@components/layout";
import { GaugeIcon, PartyPopperIcon, WandSparklesIcon } from "lucide-react";
import { useId } from "@hooks/useId";
import { currentPollIdAtom } from "@atoms/pollId";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";

export default function Home() {
  const { generateId } = useId();
  const setPollId = useSetAtom(currentPollIdAtom);
  const router = useRouter();

  function onClickPollCreation() {
    const id = generateId();
    setPollId(id);
    router.push(`/dashboard/poll/${id}/create`);
  }

  return (
    <div className="">
      <Header
        cta={{
          label: "Create A Poll",
          onClick: onClickPollCreation,
        }}
        subtitles={[
          {
            badge: <WandSparklesIcon size={16} />,
            label: "Elegance",
          },
          {
            badge: <GaugeIcon size={18} />,
            label: "Speed",
          },
          {
            badge: <PartyPopperIcon size={20} />,
            label: "Engagement",
          },
        ]}
        heading={
          <div>
            Revolutionize Decision-Making with
            <br />
            Smarter, Secure, and Shareable Polls.
          </div>
        }
        description={
          <>
            Votonic empowers you to create, share, and analyze polls like never
            before. Designed for professionals, teams, and communities, our
            platform combines seamless usability with advanced data analytics to
            deliver meaningful insights—fast. With real-time updates, embeddable
            polls, and robust security, Votonic transforms opinions into
            actionable decisions. Whether you're gathering feedback, running
            surveys, or hosting live votes, Votonic ensures every voice is heard
            and every result matters.
          </>
        }
      />

      <div className="h-screen w-screen flex flex-col items-center justify-center -mt-[69px] bg-zinc-200">
        <div className="bg-white size-fit"></div>
      </div>
    </div>
  );
}
