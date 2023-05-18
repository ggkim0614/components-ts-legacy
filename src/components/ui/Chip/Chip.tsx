import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Chip as MuiChip, PropTypes } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

type ChipProps = {
  /** Custom ClassName to override the default styling */
  className?: string;
  /** Chip type */
  variant?: 'default' | 'outlined';
  /** Chip color: "primary" for main blue color and secondary for  */
  color?: PropTypes.Color;
  /** Text to show within the chip  */
  label?: string;
  /** Set the chip size  */
  size?: 'small' | 'medium';
  /** Function called when the chip is clicked; if onClick function exists, the chip will become bold */
  onClick?: () => void;
  /** Function called when the delete icon is clicked */
  onDelete?: () => void;
  /** Make the Chip unclickable, set the background to grey, and remove shadow */
  disabled?: boolean;
  /** Make the Chip unclickable, set the background to grey, and remove shadow */
  clickable?: boolean;
  extraSmall?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // marginRight: 8,
      // marginBottom: 8,
    },
    buttonChip: {
      fontWeight: 'bold',
    },
    extraSmall: {
      fontSize: 12,
      height: 18,
    },
  })
);

/** The most basic Chip example */
export const Chip: FC<ChipProps> = ({
  className,
  variant,
  color,
  label,
  size,
  onClick,
  onDelete,
  clickable,
  disabled,
  extraSmall,
}: ChipProps) => {
  const classes = useStyles();

  return (
    <MuiChip
      className={clsx(classes.root, {
        [className]: className,
        [classes.buttonChip]: onClick,
        [classes.extraSmall]: extraSmall,
      })}
      color={color}
      label={label}
      size={size}
      onClick={onClick}
      onDelete={onDelete}
      variant={variant}
      clickable={clickable}
      disabled={disabled}
      deleteIcon={<CloseIcon />}
    />
  );
};

Chip.defaultProps = {
  variant: 'default',
  color: 'default',
  disabled: false,
  size: 'medium',
};
