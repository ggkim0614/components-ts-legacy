import React, { FC, ReactNode } from "react";
import { Box, Grid } from "@material-ui/core";
import { VerticalCenter } from "../../util";

type HeaderProps = {
  /** Custom class name applied */
  className?: string;
  /** Left most component on the header */
  leftFirst?: ReactNode;
  /** Second item from the left */
  leftSecond?: ReactNode;
  /** Second item from the right */
  rightFirst?: ReactNode;
  /** Right most component on the header  */
  rightSecond?: ReactNode;
};

/** Basic Header  */
export const Header: FC<HeaderProps> = ({
  className,
  leftFirst,
  leftSecond,
  rightFirst,
  rightSecond
}: HeaderProps) => {
  return (
    <Box pt={2} pb={2} className={className}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <VerticalCenter>
            <Box>{leftFirst}</Box>
            <Box ml={1.5}>{leftSecond}</Box>
          </VerticalCenter>
        </Grid>
        <Grid item>
          <VerticalCenter>
            <Box>{rightFirst}</Box>
            <Box ml={1.5}>{rightSecond}</Box>
          </VerticalCenter>
        </Grid>
      </Grid>
    </Box>
  );
};
