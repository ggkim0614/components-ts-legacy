import React from 'react';
import { Box } from '@material-ui/core';
import { Skeleton as MuiSkeleton } from '@material-ui/lab';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			borderRadius: 5,
		},
		line: {
			borderRadius: 5,
			marginBottom: 7,
		},
		card: {
			boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',
			width: '100%',
			borderRadius: 5,
		},
		card_bottom: {
			background: grey[100],
			borderBottomLeftRadius: 'inherit',
			borderBottomRightRadius: 'inherit',
		},
	})
);

/**
 * Skeleton for Card Components in Feed Page
 */
export const FeedCardSkeleton = () => {
	const classes = useStyles();
	return (
		<Box className={classes.card} mb={2}>
			<Box p={2} height={181}>
				<Box display="flex" justifyContent="space-between">
					<MuiSkeleton variant="circle" width={36} height={36} />
					<Box display="flex" justifyContent="space-between" width={80}>
						<MuiSkeleton
							variant="rect"
							width={20}
							height={20}
							className={classes.root}
						/>
						<MuiSkeleton
							variant="rect"
							width={20}
							height={20}
							className={classes.root}
						/>
						<MuiSkeleton
							variant="rect"
							width={20}
							height={20}
							className={classes.root}
						/>
					</Box>
				</Box>

				<Box mt={2}>
					<MuiSkeleton
						variant="rect"
						height={13}
						width={213}
						className={classes.line}
					/>
					<MuiSkeleton
						variant="rect"
						height={13}
						width={257}
						className={classes.line}
					/>
				</Box>
			</Box>
			<Box className={classes.card_bottom} height={45} p={2}>
				<MuiSkeleton
					variant="rect"
					height={13}
					width={'60%'}
					className={classes.root}
				/>
			</Box>
		</Box>
	);
};
