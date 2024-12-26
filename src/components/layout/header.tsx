"use client";

import { Badge } from "@type/badge";
import { ReactElement } from "react";
import { ShinyButton } from "@components/buttons";

type HeaderProps = {
  subtitles: Badge[];
  heading: ReactElement;
  description: ReactElement;
  cta: {
    label: string;
    onClick: () => void;
  };
};

export function Header({ subtitles, heading, description, cta }: HeaderProps) {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 font-semibold">
          {subtitles.map((subtitle) => (
            <div className="flex">
              <HeaderBadge
                key={subtitle.label}
                badge={subtitle.badge}
                label={subtitle.label}
              />
              <span className="text-muted-foreground">,</span>
            </div>
          ))}
        </div>

        <h1 className="text-3xl font-semibold text-center my-6">
          {/* Revolutionize Decision-Making with
          <br />
          Smarter, Secure, and Shareable Polls. */}
          {heading}
        </h1>
        <p className="text-xs text-muted-foreground text-center max-w-screen-sm mb-6">
          {description}
        </p>
      </div>

      <div className="-translate-x-3 z-10">
        <ShinyButton className="h-11" href="dashboard/new" onClick={cta.onClick}>
          {cta.label}
        </ShinyButton>
      </div>
    </div>
  );
}

function HeaderBadge({ badge, label }: Badge) {
  return (
    <>
      <div className="flex items-center">
        {badge}
        <span className="ml-2">{label}</span>
      </div>
    </>
  );
}
