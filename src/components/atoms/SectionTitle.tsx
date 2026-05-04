import type { PropsWithChildren } from "react";

type SectionTitleProps = PropsWithChildren<{
  level?: 1 | 2;
}>;

function SectionTitle({ children, level = 2 }: SectionTitleProps) {
  return level === 1 ? <h1>{children}</h1> : <h2>{children}</h2>;
}

export default SectionTitle;