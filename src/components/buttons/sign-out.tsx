import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@ui";

export function SignoutButton() {
  return (
    <SignOutButton>
      <Button size="sm" variant="ghost">
        Log out
      </Button>
    </SignOutButton>
  );
}
