import React, { FC } from 'react';
import Router, { useRouter } from 'next/router';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';
import { VerticalCenter } from '../../util';
import grey from '@material-ui/core/colors/grey';

import { Avatar, SendIcon } from '../../ui';

type ChatBubbleProps = {
	/** Image to be inserted into the avatar component */
	avatarImage?: string;
	/** Size of the avatar */
	avatarSize?: 'small' | 'medium' | 'large';
	/** Type that will dictate the avatar type */
	userType?: 'user' | 'company';
	/** Decided on which side(left/right) the chat will appear */
	fromWho?: 'me' | 'you';
	/** Content of the message */
	message?: string;
	/** Redirect to confirmation modal/page */
	confirmation?: string;
	/** The time stamp of when the message was sent */
	timeStamp?: string;
	/** Whether the message was read or not */
	read?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
		bubble: {
			backgroundColor: '#FFFFFF',
			color: '#6D6D6D',
			padding: '14px',
			borderRadius: 0,
		},
		fromYou: {
			borderRadius: '15px 15px 15px 0px',
		},
		fromMe: {
			borderRadius: '15px 15px 0px 15px',
		},
		myTimeStamp: {
			width: '100%',
			textAlign: 'right',
		},
		caption: {
			color: theme.palette.text.secondary,
		},
		read: {
			paddingRight: '6px',
			fontWeight: 900,
		},
	})
);

/**
 * Default Chat Bubble Layout Component
 */
export const ChatBubble: FC<ChatBubbleProps> = ({
	avatarImage,
	userType,
	avatarSize,
	fromWho,
	message,
	confirmation,
	timeStamp,
	read,
}: ChatBubbleProps) => {
	const classes = useStyles();

	return (
		<Box
			mb={1.75}
			display="flex"
			flexDirection="column"
			alignItems={fromWho == 'me' ? 'flex-end' : 'flex-start'}
		>
			<VerticalCenter align="flex-start">
				{fromWho === 'you' && (
					<Avatar
						avatarSize={avatarSize}
						userType={userType}
						avatarImage={avatarImage}
					/>
				)}

				<Box ml={1.5}>
					<Paper
						elevation={0}
						className={clsx(classes.bubble, {
							[classes.fromYou]: fromWho === 'you',
							[classes.fromMe]: fromWho === 'me',
						})}
					>
						<Typography variant="body1">{message}</Typography>
						<Typography
							variant="body1"
							color="primary"
							onClick={() =>
								document.referrer ? Router.back() : Router.push('/chatroom#')
							}
						>
							{confirmation}
						</Typography>
					</Paper>
					<div
						className={clsx(classes.caption, {
							[classes.myTimeStamp]: fromWho === 'me',
						})}
					>
						<Box pt={0.25} flexDirection="row-reverse">
							{read === true && (
								<Typography className={classes.read} variant="caption">
									Read
								</Typography>
							)}
							<Typography variant="caption">{timeStamp}</Typography>
						</Box>
					</div>
				</Box>
			</VerticalCenter>
		</Box>
	);
};

ChatBubble.defaultProps = {};
