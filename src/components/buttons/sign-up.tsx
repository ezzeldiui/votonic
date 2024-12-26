import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@ui";

export function SignupButton() {
  return (
    <SignUpButton>
      <Button size="sm" variant="outline">
        Register
      </Button>
    </SignUpButton>
  );
}
