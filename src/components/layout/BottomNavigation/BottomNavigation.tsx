import React, { FC } from 'react';
import clsx from 'clsx';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import {
	Badge,
	BottomNavigation as MuiBottomNavigation,
	BottomNavigationAction,
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { BriefCaseIcon, ChatIcon, UserIcon } from '../../ui';

type BottomNavigationProps = {
	/**
	 * Is there any active tab?
	 */
	activeTab?: '/' | '/chat' | '/my';
	/**
	 * Is the viewing user a normal user or a business?
	 */
	userType?: 'user' | 'company';
};

const useStyles = makeStyles({
	container: {
		position: 'sticky',
		bottom: 0,
	},
	fullWidth: {
		marginLeft: -16,
		marginRight: -16,
	},
	icon: {
		color: grey[400],
		'&$selected': {
			// color: grey[700],
		},
	},
	selected: {},
});

/**
 * Default Bottom Navigation Layout Component
 */
export const BottomNavigation: FC<BottomNavigationProps> = ({
	activeTab = '/',
	userType,
}: BottomNavigationProps) => {
	const classes = useStyles();
	const currentTab = activeTab ? activeTab : '/';
	const [value, setValue] = React.useState(currentTab);

	return (
		<MuiBottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
				if (userType === 'company') {
					const route = newValue === '/' ? '' : newValue;
					Router.push(`/${userType}${route}`);
				} else {
					Router.push(newValue);
				}
			}}
			showLabels
			className={clsx(classes.container, {
				[classes.fullWidth]: activeTab == '/chat',
			})}
		>
			<BottomNavigationAction
				value="/"
				classes={{ root: classes.icon, selected: classes.selected }}
				icon={<BriefCaseIcon />}
			/>
			<BottomNavigationAction
				value="/chat"
				classes={{ root: classes.icon, selected: classes.selected }}
				icon={
					<Badge color="secondary" variant="dot">
						<ChatIcon />
					</Badge>
				}
			/>
			<BottomNavigationAction
				value="/my"
				classes={{ root: classes.icon, selected: classes.selected }}
				icon={<UserIcon />}
			/>
		</MuiBottomNavigation>
	);
};

BottomNavigation.defaultProps = {
	userType: 'user',
};
