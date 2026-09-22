import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const classes =
  "inline-flex items-center justify-center rounded-full bg-mint px-5 py-3 text-sm font-semibold text-graphite transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint disabled:cursor-not-allowed disabled:bg-graphite/15 disabled:text-graphite/40 disabled:hover:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({ className = "", ...props }: ButtonLinkProps) {
  return <a className={`${classes} ${className}`.trim()} {...props} />;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = "", ...props }: ButtonProps) {
  return <button className={`${classes} ${className}`.trim()} {...props} />;
}
