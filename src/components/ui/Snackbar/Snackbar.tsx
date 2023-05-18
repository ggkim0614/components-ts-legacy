import React, {
  FC,
  useState,
  Fragment,
  MouseEvent,
  SyntheticEvent,
} from 'react';
import { Button, Snackbar as MuiSnackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

type snackbarProps = {
  /** Is the snackbar open? */
  open?: boolean;
  /** Function that closes the snackbar */
  onClose?: () => void;
  /** Text message that will be rendered in the snackbar */
  message: string;
};

export const Snackbar: FC<snackbarProps> = ({
  open,
  onClose,
  message,
}: snackbarProps) => {
  return (
    <div>
      <MuiSnackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        message={message}
        action={
          <Fragment>
            <Button color="secondary" size="small" onClick={onClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={onClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Fragment>
        }
      />
    </div>
  );
};
