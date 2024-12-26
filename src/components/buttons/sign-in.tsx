import { SignInButton } from "@clerk/nextjs";
import { Button } from "@ui";

export function SigninButton() {
  return (
    <SignInButton>
      <Button size="sm" variant="outline">
        Sign in
      </Button>
    </SignInButton>
  );
}
