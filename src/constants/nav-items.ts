import { type NavItem } from "@type/nav-item";

type GetNavItemsProps = {
  pollId: string;
};

export function getNavItems({ pollId }: GetNavItemsProps): NavItem[] {
  const baseUrl = "/dashboard/poll";

  return [
    {
      label: "Create",
      href: `${baseUrl}/${pollId}/create`,
    },
    {
      label: "Logic",
      href: `${baseUrl}/${pollId}/logic`,
    },
    {
      label: "Connect",
      href: `${baseUrl}/${pollId}/connect`,
    },
    {
      label: "Share",
      href: `${baseUrl}/${pollId}/share`,
    },
    {
      label: "Results",
      href: `${baseUrl}/${pollId}/results`,
    },
  ];
}
