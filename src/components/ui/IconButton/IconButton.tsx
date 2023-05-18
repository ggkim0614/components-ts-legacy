import React, { FC, ReactNode, ElementType } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
	IconButton as MuiIconButton,
	ButtonProps as MuiButtonProps,
} from '@material-ui/core';

type IconButtonProps = {
	/** Icon to show */
	children?: ReactNode;
	/** ClassName string */
	className?: string;
	/** Set button disabled */
	disabled?: boolean;
	/** Show a border and background shadow if square  */
	square?: boolean;
	/** Set the button dimension to either 36, 44, or 50  */
	size?: 'tiny' | 'small' | 'medium' | 'large';
	/** Set the button background to white if `true`  */
	hasWhiteBackground?: boolean;
	/** Set the button background to grey if `true`  */
	hasGreyBackground?: boolean;
	/** Set the button background to be transparent */
	isTransparent?: boolean;
	/** Function to invoke when clicked */
	onClick?: () => void;
	/** Disables the button background shadow  */
	flat?: boolean;
	/** Make the border dashed */
	dashed?: boolean;
	/** Color in hexacde */
	color?: string;
	/** button element type */
	component?: ElementType;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			//@ts-ignore
			color: (props) => props.color,
		},
		square: {
			borderRadius: '10px',
		},
		shadow: {
			boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',
		},
		whiteButtonBackground: {
			backgroundColor: 'white',
			'&:hover': {
				backgroundColor: 'white',
			},
		},
		greyButtonBackground: {
			backgroundColor: '#F2F2F2',
			'&:hover': {
				backgroundColor: '#F2F2F2',
			},
		},
		transparent: {
			opacity: 0.75,
		},
		tiny: {
			padding: 6,
			borderRadius: '8px',
			width: 30,
			height: 30,
		},
		small: {
			padding: 6,
			width: 36,
			height: 36,
		},
		medium: {
			width: 44,
			height: 44,
		},
		large: {
			width: 50,
			height: 50,
		},
		dashed: {
			border: 'dashed 1px',
		},
	})
);

/** Default IconButton UI Component */
export const IconButton: FC<IconButtonProps> = ({
	children,
	className,
	color,
	component,
	dashed,
	disabled,
	flat,
	hasGreyBackground,
	hasWhiteBackground,
	isTransparent,
	onClick,
	square,
	size,
}: IconButtonProps) => {
	const classes = useStyles({ color });

	return (
		<MuiIconButton
			className={clsx(className, {
				[classes.root]: true,
				[classes.square]: square,
				[classes.shadow]: !flat,
				[classes.whiteButtonBackground]: hasWhiteBackground,
				[classes.greyButtonBackground]: hasGreyBackground,
				[classes.transparent]: isTransparent,
				[classes.tiny]: size === 'tiny',
				[classes.small]: size === 'small',
				[classes.medium]: size === 'medium',
				[classes.large]: size === 'large',
				[classes.dashed]: dashed,
			})}
			disabled={disabled}
			onClick={onClick}
			component={component}
		>
			{children}
		</MuiIconButton>
	);
};

IconButton.defaultProps = {
	square: false,
	flat: false,
	size: 'medium',
};
