import React from 'react';
import { Box } from '@material-ui/core';
import { Skeleton as MuiSkeleton } from '@material-ui/lab';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			height: '281.59px',
			width: '100%',
			marginBottom: '16px',
		},
		header: {
			height: '17px',
			width: '110px',
			marginTop: '-16px',
		},
		card: {
			width: '76.66%',
			height: 200,
			marginTop: '-32px',
		},
		card_2: {
			height: 87,
			width: '76.66%',
		},
	})
);

/**
 * Default Skeleton Layout Component for User Profile
 */
export const ProfileSkeleton = () => {
	const classes = useStyles();
	return (
		<Box>
			<MuiSkeleton variant="rect" className={classes.root} />
			<Box p={2}>
				<MuiSkeleton className={classes.header} />
				<Box>
					<MuiSkeleton className={classes.card} />
				</Box>
				<MuiSkeleton className={classes.header} />
				<Box>
					<MuiSkeleton className={classes.card_2} />
				</Box>
				<MuiSkeleton className={classes.header} />
				<Box>
					<MuiSkeleton className={classes.card} />
				</Box>
				<MuiSkeleton className={classes.header} />
				<Box>
					<MuiSkeleton className={classes.card_2} />
				</Box>
				<MuiSkeleton className={classes.header} />
				<Box>
					<MuiSkeleton className={classes.card} />
				</Box>
			</Box>
		</Box>
	);
};
