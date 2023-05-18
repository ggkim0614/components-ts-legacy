import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
	FormControl,
	MenuItem,
	InputLabel,
	Select as MuiSelect,
	FilledInput,
} from '@material-ui/core';

type Option = {
	/** Text displayed for the menu */
	label: string;
	/** Value of the select menu */
	value: string;
};

type SelectProps = {
	/** Select placeholder when nothing is selected */
	label: string;
	/** Current item selected */
	value: string;
	/** Function invoked when a value is selected */
	onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
	/** Array of Select options that have `label` and `value` */
	options: Array<Option>;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: 12,
		},
		label: {
			lineHeight: 0,
		},
		labelNone: {
			display: 'none',
		},
		filledInput: {
			'& div': {
				borderRadius: 5,
			},
		},
	})
);

export const Select: FC<SelectProps> = ({
	label,
	value,
	onChange,
	options,
}: SelectProps) => {
	const classes = useStyles();

	return (
		<FormControl
			className={classes.filledInput}
			hiddenLabel
			variant="filled"
			fullWidth
		>
			<InputLabel
				classes={{
					root: classes.label,
					focused: classes.labelNone,
					shrink: classes.labelNone,
				}}
			>
				{label}
			</InputLabel>
			<MuiSelect
				classes={{ root: classes.root }}
				value={value}
				onChange={onChange}
				input={<FilledInput disableUnderline />}
			>
				<MenuItem value="">
					<em>Please Select A Value</em>
				</MenuItem>
				{options.map((option, key) => {
					return (
						<MenuItem key={key} value={option.value}>
							{option.label}
						</MenuItem>
					);
				})}
			</MuiSelect>
		</FormControl>
	);
};

Select.defaultProps = {
	options: [],
};
