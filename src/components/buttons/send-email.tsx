import { useUser } from "@clerk/nextjs";
import { Button } from "@ui";

export function SendEmailButton() {

    const user = useUser();

  return (
    <Button
        onClick={async () => {
          try {
            const response = await fetch("/api/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: user.user?.primaryEmailAddress?.emailAddress[0],
                firstName: user.user?.firstName,
              })
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
  );
}