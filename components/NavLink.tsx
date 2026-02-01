"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NavLinkCompatProps = Omit<
  React.ComponentProps<typeof Link>,
  "className" | "href"
> & {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  href?: React.ComponentProps<typeof Link>["href"];
  to?: React.ComponentProps<typeof Link>["href"];
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, href, to, ...props }, ref) => {
    const pathname = usePathname();
    const resolvedHref = href ?? to ?? "#";
    const isActive =
      typeof resolvedHref === "string" && pathname === resolvedHref;

    return (
      <Link
        ref={ref}
        href={resolvedHref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
