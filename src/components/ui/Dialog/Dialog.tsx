import React, { FC, ReactNode } from "react";
import { Dialog as MuiDialog } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type DialogProps = {
  /**  Is the Dialog open? */
  open?: boolean;
  /**  Function that closes the dialog */
  onClose?: () => void;
  /** Content that will be inside the Dialog */
  children?: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: 568,
      margin: "auto"
    },
    paper: {
      [theme.breakpoints.down("xs")]: {
        margin: 16
      },
      margin: 0
    },
    paperWidthSm: {
      padding: 16,
      maxWidth: 568,
      width: "100%"
    }
  })
);

export const Dialog: FC<DialogProps> = ({
  open,
  onClose,
  children
}: DialogProps) => {
  const classes = useStyles();

  return (
    <MuiDialog
      classes={{
        container: classes.container,
        paper: classes.paper,
        paperWidthSm: classes.paperWidthSm
      }}
      open={open}
      onClose={onClose}
    >
      {children}
    </MuiDialog>
  );
};
