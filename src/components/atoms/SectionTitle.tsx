import Typography from "@mui/material/Typography";
import type { PropsWithChildren } from "react";

type SectionTitleProps = PropsWithChildren<{
  level?: 1 | 2;
}>;

function SectionTitle({ children, level = 2 }: SectionTitleProps) {
  return (
    <Typography variant={level === 1 ? "h4" : "h5"} component={level === 1 ? "h1" : "h2"} gutterBottom>
      {children}
    </Typography>
  );
}

export default SectionTitle;