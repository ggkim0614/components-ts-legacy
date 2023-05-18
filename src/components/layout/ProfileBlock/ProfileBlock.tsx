import React, { FC } from 'react';
import Router, { useRouter } from 'next/router';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';
import { VerticalCenter } from '../../util';
import grey from '@material-ui/core/colors/grey';

import { Avatar, SendIcon } from '../../ui';

type ProfileBlockProps = {
  /** Image to be inserted into the avatar component */
  avatarImage?: string;
  /** Type that will dictate the size of the whole block */
  isMine?: boolean;
  /** Name of the user */
  name?: string;
  /** User's custom status message */
  message?: string;
  /** Function called when the block is clicked */
  onClick?: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: 'pointer',
    },
    myProfile: {
      padding: '15px 0',
    },
    otherProfile: {
      padding: '10px 0',
    },
    myTimeStamp: {
      width: '100%',
      textAlign: 'right',
    },
    message: {
      color: theme.palette.text.secondary,
      fontSize: 12,
    },
  })
);

export const ProfileBlock: FC<ProfileBlockProps> = ({
  avatarImage,
  isMine,
  name = 'Tim Cook',
  message = 'I think that Black Lives Matter',
  onClick,
}: ProfileBlockProps) => {
  const classes = useStyles();

  return (
    <Box
      p={2}
      display="flex"
      alignItems="center"
      className={clsx([classes.root], {
        [classes.myProfile]: isMine === true,
        [classes.otherProfile]: isMine === false,
      })}
      onClick={onClick}
    >
      <Avatar
        avatarImage={avatarImage}
        avatarSize={isMine ? 'large' : 'medium'}
      />
      <Box ml={2}>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body1" className={classes.message}>
          {message}
        </Typography>
      </Box>
    </Box>
  );
};
