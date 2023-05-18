import React, { FC, ReactNode, ElementType } from 'react';
import { Button as MuiButton, PropTypes } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type ButtonProps = {
	/** Child react component */
	children: ReactNode;
	/** Button color: "primary" for main blue color and secondary for  */
	color?: PropTypes.Color;
	/** button element type */
	component?: ElementType;
	/** Make the border dashed */
	dashed?: boolean;
	/** Make the button unclickable, set the background to grey, and remove shadow */
	disabled?: boolean;
	/** Disables the button background shadow  */
	flat?: boolean;
	/** Specifies what form to trigger submit action */
	form?: string;
	/** Set the button to take the full width of its container  */
	fullWidth?: boolean;
	/** Button html type */
	htmlType?: any;
	/** Function called when the button is clicked */
	onClick?: () => void;
	/** Button type */
	variant?: 'contained' | 'text' | 'outlined';
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			borderRadius: 8,
			height: 44,
			'&$disabled': {
				color: 'white',
			},
		},
		outlined: {
			color: 'grey',
			border: 'dashed 1px',
		},
		disabled: {},
	})
);

/** Default Button UI Component */
export const Button: FC<ButtonProps> = ({
	children,
	color,
	component,
	dashed,
	disabled,
	flat,
	form,
	fullWidth,
	htmlType,
	onClick,
	variant,
}: ButtonProps) => {
	const classes = useStyles();
	return (
		<MuiButton
			classes={{
				root: classes.root,
				disabled: classes.disabled,
				outlined: dashed ? classes.outlined : '',
			}}
			color={color}
			disableElevation={flat}
			disabled={disabled}
			fullWidth={fullWidth}
			type={htmlType}
			variant={variant}
			onClick={onClick}
			component={component}
			form={form}
		>
			{children}
		</MuiButton>
	);
};

Button.defaultProps = {
	color: 'primary',
	flat: false,
	fullWidth: false,
	disabled: false,
	variant: 'contained',
};
