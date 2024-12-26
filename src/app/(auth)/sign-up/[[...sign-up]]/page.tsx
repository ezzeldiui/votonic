"use client";

import { Button } from "@ui";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen w-full flex items-center justify-center">

      <div className="flex flex-col gap-4">
        <SignUp />

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
      </div>
    </div>
  );
}
