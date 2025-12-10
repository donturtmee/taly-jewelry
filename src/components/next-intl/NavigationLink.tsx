"use client";

import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

type NavigationLinkProps = ComponentProps<typeof Link> & {
  className?: string;
};

export default function NavigationLink({
  href,
  className,
  ...rest
}: NavigationLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      className={clsx(
        "inline-block transition-colors",
        isActive ? "text-white" : "text-gray-400 hover:text-gray-200",
        className
      )}
      {...rest}
    />
  );
}
