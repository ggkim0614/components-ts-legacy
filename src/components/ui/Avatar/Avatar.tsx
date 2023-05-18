import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar as MuiAvatar } from '@material-ui/core';

type AvatarProps = {
  /**  */
  avatarImage?: string;
  /**  */
  userType?: 'user' | 'company';
  /**  */
  avatarSize?: 'small' | 'medium' | 'large' | 'xLarge';
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid #F0F0F0',
      width: '50px',
      height: '50px',
    },
    company: {
      borderRadius: '5px',
    },
    small: {
      width: '36px',
      height: '36px',
    },
    medium: {
      width: '44px',
      height: '44px',
    },
    large: {
      width: '58px',
      height: '58px',
    },
    xLarge: {
      width: 80,
      height: 80,
    },
  })
);

/**  */
export const Avatar: FC<AvatarProps> = ({
  avatarImage,
  userType,
  avatarSize,
  ...props
}: AvatarProps) => {
  const classes = useStyles();
  return (
    <MuiAvatar
      className={clsx(classes.root, {
        [classes.company]: userType === 'company',
        [classes.small]: avatarSize === 'small',
        [classes.medium]: avatarSize === 'medium',
        [classes.large]: avatarSize === 'large',
        [classes.xLarge]: avatarSize === 'xLarge',
      })}
      src={avatarImage}
      {...props}
    />
  );
};

Avatar.defaultProps = {
  userType: 'user',
};
