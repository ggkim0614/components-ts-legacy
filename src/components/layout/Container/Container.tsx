import React, { FC, ReactNode } from "react";
import { Container as MuiContainer } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type ContainerProps = {
  /** Components to be contained for maxWidth of "sm"
   */
  children?: ReactNode;
  /** Set the background color of the container; pass in the hexcode */
  backgroundColor?: string;
  maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl";
  /** If `true`, the left and right padding is removed. */
  disableGutters?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
    },
  })
);

/** Use this component when you want the components to be contained within the mobile device width of `small` */
export const Container: FC<ContainerProps> = ({
  children,
  backgroundColor,
  maxWidth,
  disableGutters,
}: ContainerProps) => {
  const classes = useStyles();
  return (
    <MuiContainer
      style={{ backgroundColor: backgroundColor }}
      // className={classes.root}
      maxWidth={maxWidth}
      disableGutters={disableGutters}
    >
      {children}
    </MuiContainer>
  );
};

Container.defaultProps = {
  maxWidth: "sm",
  disableGutters: false,
  backgroundColor: "#FFFFFF",
};
