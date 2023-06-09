import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar } from '../../ui';
import { VerticalCenter } from '../../util';
import { Bold } from 'react-feather';

export type ChatListItemProps = {
	userType?: 'user' | 'company';
	userAvatar?: string;
	userName?: string;
	userPosition?: string;
	/** Chat message; will be truncated if longer than flex */
	chatMessage?: string;
	/** Chat date in string; will be converted into a moment object */
	chatDate?: string;
	/** Number of messages unread; will not display if zero */
	chatUnreadCount: number;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		message: {
			maxWidth: 200,
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
		title: {
			fontSize: 18,
			fontWeight: 500,
			fontFamily: 'Helvetica Neue',
		},
		subtitle: {
			opacity: 0.6,
		},
		badge: {
			marginTop: '10px',
			color: 'white',
			height: '20px',
			display: 'flex',
			padding: '0 6.5px',
			fontSize: '0.75rem',
			boxSizing: 'border-box',
			alignItems: 'center',
			borderRadius: '10px',
			flexDirection: 'row',
			justifyContent: 'center',
			background: theme.palette.primary.main,
			lineHeight: 1,
		},
	})
);

/**
 * Default Chat Room List Layout Component
 */
export const ChatListItem: FC<ChatListItemProps> = ({
	userType,
	userAvatar,
	userName,
	userPosition,
	chatMessage,
	chatDate,
	chatUnreadCount,
}: ChatListItemProps) => {
	const classes = useStyles();
	return (
		<VerticalCenter py={1.75} align="flex-start" justify="space-between">
			<VerticalCenter align="center">
				<Avatar
					avatarSize="medium"
					avatarImage={userAvatar}
					userType={userType}
				/>
				<Box
					ml={1.5}
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
				>
					<Box className={classes.title}>
						{userName && userName.toUpperCase()}
					</Box>
					<Typography variant="subtitle2" className={classes.subtitle}>
						{userPosition}
					</Typography>
					<Box mt={0.25}>
						<Typography className={classes.message} variant="body1">
							{chatMessage}
						</Typography>
					</Box>
				</Box>
			</VerticalCenter>
			<Box display="flex" flexDirection="column" alignItems="flex-end">
				<Typography variant="body2">{chatDate}</Typography>
				{chatUnreadCount > 0 && (
					<Box className={classes.badge}>{chatUnreadCount}</Box>
				)}
			</Box>
		</VerticalCenter>
	);
};
