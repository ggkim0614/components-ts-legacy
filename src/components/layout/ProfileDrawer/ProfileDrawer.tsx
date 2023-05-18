import React, { FC, useState } from 'react';
import { Avatar, Dialog, IconButton } from '../../ui';
import { Container } from '..';
import { Box, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ProfileEditForm from '../../../features/ProfileEditForm';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import ChatIcon from '@material-ui/icons/Chat';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import BookmarkIcon from '@material-ui/icons/Bookmark';

type ProfileDrawerProps = {
	/** Dictates which view of the component will be shown */
	isOwnProfile?: boolean;
	/** Image that will go in the background of the user's profile */
	backgroundImage?: string;
	/** Image that will fill up the user's avatar */
	profileImage?: string;
	/** Name of the user */
	username?: string;
	/** Status message of the user */
	statusMessage?: string;
	/** Handle close drawer */
	onClose?: () => any;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
		drawer: {
			height: '100vh',
		},
		profileBackground: {
			height: '100vh',
			display: 'flex',
		},
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.3)',
		},
		closeIcon: {
			color: 'white',
		},
		information: {
			padding: '30px 0',
		},
		username: {
			fontSize: 16,
		},
		statusMessage: {
			fontSize: 12,
			opacity: 0.7,
		},
	})
);

export const ProfileDrawer: FC<ProfileDrawerProps> = ({
	isOwnProfile,
	backgroundImage,
	profileImage,
	username,
	statusMessage,
	onClose,
}: ProfileDrawerProps) => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const onHandleClick = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Container backgroundColor="#F6F6F6" disableGutters>
			<Box className={classes.drawer}>
				<Box
					className={classes.profileBackground}
					style={{
						backgroundImage: `url(${backgroundImage})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<Box
						width="100%"
						height="100%"
						className={classes.overlay}
						p={2}
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
					>
						<Box textAlign="right">
							<CloseIcon
								fontSize="large"
								classes={{
									root: classes.closeIcon,
								}}
								onClick={onClose}
							/>
						</Box>

						<Paper className={classes.information}>
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								mt={-9.5}
							>
								<Box width="33.33%" display="flex" justifyContent="flex-start">
									{!isOwnProfile && (
										<Box mt={7.5} ml={2}>
											<PersonAddDisabledIcon
												onClick={() => alert('ban user clicked')}
												fontSize="small"
											/>
										</Box>
									)}
								</Box>
								<Box
									width="33.33%"
									display="flex"
									justifyContent="center"
									ml={2}
								>
									<Avatar avatarImage={profileImage} avatarSize="xLarge" />
								</Box>
								<Box
									width="33.33%"
									display="flex"
									justifyContent="flex-end"
									alignItems="flex-end"
									mt={7.5}
									mr={2}
								>
									{isOwnProfile ? (
										<>
											<EditIcon onClick={onHandleClick} fontSize="small" />
											<Dialog open={open} onClose={handleClose}>
												<ProfileEditForm
													bgImageLink="https://i.pinimg.com/originals/00/c6/2a/00c62a844381dbd8ae10cad3bf10e380.jpg"
													name="Lavid Dee"
													message="I am the CTO and I'm your boss"
												/>
											</Dialog>
										</>
									) : (
										<BookmarkIcon
											onClick={() => alert('bookmark clicked')}
											fontSize="small"
										/>
									)}
								</Box>
							</Box>
							<Box className={classes.username} textAlign="center" mt={2}>
								{username}
							</Box>
							<Box className={classes.statusMessage} textAlign="center" mt={2}>
								{statusMessage}
							</Box>
							<Box display="flex" justifyContent="center" mt={3}>
								<IconButton square color="default">
									<ChatIcon />
								</IconButton>
							</Box>
						</Paper>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};
