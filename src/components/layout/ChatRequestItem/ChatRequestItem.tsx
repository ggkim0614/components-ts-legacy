import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Chip } from '../../ui';
import { VerticalCenter } from '../../util';

export type ChatRequestItemProps = {
	/** Function to fire when accepted */
	onAccept?: () => void;
	/** Function to fire when rejected */
	onReject?: () => void;
	/** Request date in string; will be converted into a moment object */
	requestDate?: string;
	/** Request date passed in string, will be converted into a moment object */
	requestPastDate?: string;
	userAvatar?: string;
	userName?: string;
	userPosition?: string;
	userType?: 'user' | 'company';
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		name: {
			fontSize: 20,
			fontWeight: 500,
			fontFamily: 'Helvetica Neue',
		},
	})
);

/** Default Chat Request Layout Component */
export const ChatRequestItem: FC<ChatRequestItemProps> = ({
	onAccept,
	onReject,
	userType,
	userAvatar,
	userName,
	requestDate,
	requestPastDate,
}: ChatRequestItemProps) => {
	const classes = useStyles();
	return (
		<VerticalCenter py={1.75} align="flex-start" justify="space-between">
			<Box display="flex" flexDirection="row">
				<Avatar avatarImage={userAvatar} userType={userType} />
				<Box
					ml={1.5}
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
					justifyContent="space-between"
				>
					<Box className={classes.name} component="span">
						{userName && userName.toUpperCase()}
					</Box>
					<Box display="flex" flexDirection="row">
						<Box mr={1}>
							<Chip
								label="Chat"
								size="small"
								variant="outlined"
								color="primary"
								onClick={onAccept}
							/>
						</Box>
						<Chip label="Reject" size="small" onClick={onReject} />
					</Box>
				</Box>
			</Box>
			<Box display="flex" flexDirection="column" alignItems="flex-end">
				<Typography variant="body2">{requestDate}</Typography>
				<Typography variant="body2">{requestPastDate}</Typography>
			</Box>
		</VerticalCenter>
	);
};
