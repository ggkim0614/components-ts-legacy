import React, { FC, ReactNode, KeyboardEvent, MouseEvent } from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Drawer as MuiDrawer } from "@material-ui/core";

type DrawerProps = {
  /** Content to show in the drawer */
  children?: ReactNode;
  /** Defines where the drawer will pop from */
  anchor?: "top" | "left" | "bottom" | "right";
  /** Current status of the drawerOpen */
  isOpen: boolean;
  /** How do you want to close the drawer? */
  onClose: (
    event:
      | KeyboardEvent<Element>
      | MouseEvent<Element, MouseEvent<Element, MouseEvent>>
  ) => void;
  /** Custom styling of the drawer root */
  className?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

export const Drawer: FC<DrawerProps> = ({
  children,
  anchor,
  isOpen,
  onClose,
  className
}: DrawerProps) => {
  const classes = useStyles();

  return (
    <MuiDrawer
      anchor={anchor}
      className={className}
      open={isOpen}
      onClose={onClose}
      transitionDuration={400}
    >
      {children}
    </MuiDrawer>
  );
};

Drawer.defaultProps = {
  anchor: "right",
  isOpen: false
};
