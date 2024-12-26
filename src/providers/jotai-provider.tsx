"use client";

import { Provider } from "jotai";
import { PollIdProvider } from "./poll-id-provider";

export function JotaiProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <PollIdProvider>{children}</PollIdProvider>
    </Provider>
  );
}
