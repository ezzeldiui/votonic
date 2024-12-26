"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  withoutLabel?: boolean;
};

export function Logo({ withoutLabel = false }: LogoProps) {
  const { userId } = useAuth();
  const isLoggedIn = !!userId;

  return (
    <Link href={isLoggedIn ? "/dashboard" : "/"} className="flex gap-2">
      <LogoIcon />

      {!withoutLabel ? (
        <div className="font-bold">
          <span>Votonic</span>
        </div>
      ) : null}
    </Link>
  );
}

function LogoIcon({
  width = 25,
  height = 25,
}: {
  width?: number;
  height?: number;
}) {
  return <Image src="/logo3.svg" alt="Logo" width={width} height={height} />;
}
