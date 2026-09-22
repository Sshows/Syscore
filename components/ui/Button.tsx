import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const classes =
  "inline-flex items-center justify-center rounded-full bg-mint px-5 py-3 text-sm font-bold text-[#07100d] shadow-[0_0_28px_rgb(62_214_168_/_0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgb(62_214_168_/_0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/35 disabled:hover:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({ className = "", ...props }: ButtonLinkProps) {
  return <a className={`${classes} ${className}`.trim()} {...props} />;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = "", ...props }: ButtonProps) {
  return <button className={`${classes} ${className}`.trim()} {...props} />;
}
