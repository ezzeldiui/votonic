"use client";

import { Logo } from "@components/common";
import { SigninButton, SignoutButton, SignupButton } from "@components/buttons";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { getNavItems } from "@constants/nav-items";
import Link from "next/link";
import { Button } from "@ui";
import { currentPollIdAtom } from "@atoms/pollId";
import { useAtomValue } from "jotai";

export function Navbar() {
  const pathname = usePathname();
  const isPollPage = pathname.includes("/poll");
  const pollId = useAtomValue(currentPollIdAtom);

  const navItems = isPollPage ? getNavItems({ pollId }) : [];

  return (
    <nav className="bg-white/50 backdrop-blur-sm shadow-lg border-b flex items-center justify-between p-4 divide-x-2 gap-4 sticky top-0 z-50">
      <section className="">
        <Logo />
      </section>
      <section className="justify-center flex flex-1">
        {isPollPage ? (
          <>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Button size="sm" variant="link">
                  {item.label}
                </Button>
              </Link>
            ))}
          </>
        ) : null}
      </section>
      <section className="pl-4 space-x-4">
        <SignedOut>
          <SigninButton />
          <SignupButton />
        </SignedOut>

        <SignedIn>
          <SignoutButton />
        </SignedIn>
      </section>
    </nav>
  );
}
