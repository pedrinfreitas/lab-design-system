import { clsx } from "clsx";

export interface ITextProps {
  size?: "sm" | "md" | "lg";
  children: string;
}

export function Text({ size = "md", children }: ITextProps) {
  return (
    <span
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </span>
  );
}
