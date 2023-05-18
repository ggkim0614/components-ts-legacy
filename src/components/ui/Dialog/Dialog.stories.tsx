import React, { FC, Fragment, useState } from 'react';
import { Box, Dialog as MuiDialog, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Add, CameraAltOutlined, Close, PostAdd } from '@material-ui/icons';
import {
	Avatar,
	Button,
	Chip,
	FilledInput,
	IconButton,
	OutlinedInput,
	Select,
} from '..';

import { Dialog } from './Dialog';

import { VerticalCenter } from '../../util';
import { AvatarGroup } from '@material-ui/lab';

export default {
	title: 'components/UI/Dialog', // 스토리북에서 보여질 그룹과 경로를 명시
	component: Dialog, // 어떤 컴포넌트를 문서화 할지 명시
	decorators: [], // 애드온 적용
	tags: ['autodocs'],
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			fontFamily: 'Helvetica Neue',
			maxWidth: 568,
			margin: 'auto',
			padding: 12,
		},
		paper: {
			margin: 16,
		},
		paperWidthSm: {
			padding: 16,
			maxWidth: 568,
			width: '100%',
		},
		teamMemberElement: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: 12,
			marginBottom: 12,
		},
		point: {
			color: '#1B74FC',
		},
		title: {
			fontSize: 20,
			fontWeight: 600,
		},
	})
);

export const DefaultDialog = () => {
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Button color="primary" onClick={handleClickOpen}>
				Open Dialog
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<div>
					<Box mt={2} mb={1.5}>
						<Box className={classes.title}>JOB DESCRIPTION</Box>
					</Box>
					<Box mb={2}>
						<Typography variant="body1" color="textSecondary">
							This is the job description. Tell candidates about this amazing
							opportunity within your company.
						</Typography>
					</Box>
					<Box mb={1.5}>
						<Box className={classes.title}>REQUIREMENTS</Box>
					</Box>
					<Box mb={2}>
						<Typography variant="body1" color="textSecondary">
							- This position requires the following skillsets.
						</Typography>
						<Typography variant="body1" color="textSecondary">
							- This position requires some hardcore skillsets that some
							candidates may not have.
						</Typography>
						<Typography variant="body1" color="textSecondary">
							- This position requires some hardcore skillsets that some
							candidates may not have.
						</Typography>
					</Box>
					<Box mb={1.5}>
						<Box className={classes.title}>RECRUITERS</Box>
					</Box>
					<AvatarGroup max={5}>
						<Avatar
							avatarSize="small"
							avatarImage="https://i.pinimg.com/originals/34/b7/6e/34b76e3e6aa1b0613f37dcc70b76d13c.png"
						/>
						<Avatar
							avatarSize="small"
							avatarImage="https://i.pinimg.com/originals/59/5c/61/595c616ad216778203dce4bac756adc6.jpg"
						/>
						<Avatar
							avatarSize="small"
							avatarImage="https://i.pinimg.com/originals/c7/31/cf/c731cf04c31fb2c1132d392044a392fe.jpg"
						/>
					</AvatarGroup>
					<Box mt={4}>
						<Button fullWidth variant="contained" color="primary">
							Apply
						</Button>
					</Box>
				</div>
			</Dialog>
		</Fragment>
	);
};

export const CuztomizableCardDialog = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [age, setAge] = React.useState('');
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string);
	};

	return (
		<Fragment>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Edit Customizable
			</Button>
			<MuiDialog
				classes={{
					container: classes.container,
					paper: classes.paper,
					paperWidthSm: classes.paperWidthSm,
				}}
				open={open}
				onClose={handleClose}
			>
				<Box mb={2}>
					<Select
						options={[
							{
								label: 'placeholder',
								value: 'placeholder',
							},
							{
								label: 'placeholder',
								value: 'placeholder',
							},
							{
								label: 'placeholder',
								value: 'placeholder',
							},
						]}
						label="EDUCATION"
						onChange={handleChange}
						value={age}
					/>
				</Box>
				<Box mb={2}>
					<OutlinedInput label="Title" fullWidth color="primary" />
				</Box>
				<Typography variant="h4">SPECIFICS</Typography>
				<Box mt={2} mb={2}>
					<OutlinedInput label="Job Description" fullWidth color="primary" />
				</Box>
				<Box mb={2}>
					<Button dashed fullWidth variant="outlined" color="default">
						<CameraAltOutlined />
					</Button>
				</Box>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Button fullWidth variant="outlined" color="primary">
							<Typography variant="h4">cancel</Typography>
						</Button>
					</Grid>
					<Grid item xs={6}>
						<Button fullWidth variant="contained" color="primary">
							<Typography variant="h4">save</Typography>
						</Button>
					</Grid>
				</Grid>
			</MuiDialog>
		</Fragment>
	);
};

export const VerifyBusinessDialog = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [age, setAge] = React.useState('');
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string);
	};
	return (
		<Fragment>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Verify Business
			</Button>
			<MuiDialog
				classes={{
					container: classes.container,
					paper: classes.paper,
					paperWidthSm: classes.paperWidthSm,
				}}
				open={open}
				onClose={handleClose}
			>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="h4">VERIFY YOUR BUSINESS</Typography>
					<Box mt={-1} mr={-1}>
						<IconButton flat size="small">
							<Close />
						</IconButton>
					</Box>
				</Box>
				<Box mt={2} mb={2}>
					<Typography variant="body1" color="textSecondary">
						<span className={classes.point}>
							Help us ensure the protection of our users.
						</span>
						&nbsp; Upload documents (COI, PAN, GST registration, etc.) to become
						verified and gain more exposure. Please expect around 7 days for us
						to process your papers.
					</Typography>
				</Box>
				<Box mb={2}>
					<Button dashed fullWidth variant="outlined" color="default">
						<PostAdd />
					</Button>
				</Box>
				<Typography variant="h4">COMPANY REPRESENTATIVE</Typography>
				<Box mt={1.5} mb={0.5}>
					<OutlinedInput fullWidth label="Name" color="primary" />
				</Box>
				<Box mt={0.5} mb={0.5}>
					<OutlinedInput fullWidth label="Name" color="primary" />
				</Box>
				<Box mt={0.5} mb={0.5}>
					<OutlinedInput fullWidth label="Phone No." color="primary" />
				</Box>
				<Box mt={0.5} mb={0.5}>
					<OutlinedInput fullWidth label="Email" color="primary" />
				</Box>
				<Box mt={2}>
					<Button fullWidth variant="contained" color="primary">
						<Typography variant="h4">Continue</Typography>
					</Button>
				</Box>
			</MuiDialog>
		</Fragment>
	);
};

export const EditCompanyProfileDialog = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [age, setAge] = React.useState('');
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string);
	};
	return (
		<Fragment>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Edit Company Profile
			</Button>
			<MuiDialog
				classes={{
					container: classes.container,
					paper: classes.paper,
					paperWidthSm: classes.paperWidthSm,
				}}
				open={open}
				onClose={handleClose}
			>
				<Box display="flex" justifyContent="space-between" mb={1}>
					<Typography variant="h4">YOUR BUSINESS</Typography>
					<Box mt={-1} mr={-1}>
						<IconButton flat size="small">
							<Close />
						</IconButton>
					</Box>
				</Box>
				<Box mb={1.5}>
					<OutlinedInput fullWidth label="Company name" color="primary" />
				</Box>
				<Box mb={1.5}>
					<OutlinedInput fullWidth label="Slogan" color="primary" />
				</Box>
				<Box mb={1.5}>
					<OutlinedInput
						fullWidth
						label="Head Office Address"
						color="primary"
					/>
				</Box>
				<Box mt={1.5}>
					<Button fullWidth variant="contained" color="primary">
						<Typography variant="h4">Continue</Typography>
					</Button>
				</Box>
			</MuiDialog>
		</Fragment>
	);
};

export const ApplyJobPostDialog = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open Job Post
			</Button>
			<MuiDialog
				classes={{
					container: classes.container,
					paper: classes.paper,
					paperWidthSm: classes.paperWidthSm,
				}}
				open={open}
				onClose={handleClose}
			>
				<VerticalCenter
					mb={2}
					height={60}
					justify="space-between"
					align="flex-start"
					flexDirection="column"
				>
					<VerticalCenter justify="space-between">
						<Box width={1} className={classes.title}>
							Senior Cloud Engineer
						</Box>
						<IconButton flat size="small">
							<Close />
						</IconButton>
					</VerticalCenter>
					<Typography variant="subtitle2">₹6-12 LPA D-12</Typography>
					<Box mb={2}>
						<Typography variant="body1" color="textSecondary">
							Pune, Maharashtra
						</Typography>
					</Box>
				</VerticalCenter>
				<Box mt={2} mb={1.5}>
					<Box className={classes.title}>JOB DESCRIPTION</Box>
				</Box>
				<Box mb={2}>
					<Typography variant="body1" color="textSecondary">
						This is the job description. Tell candidates about this amazing
						opportunity within your company.
					</Typography>
				</Box>
				<Box mb={1.5}>
					<Box className={classes.title}>REQUIREMENTS</Box>
				</Box>
				<Box mb={2}>
					<Typography variant="body1" color="textSecondary">
						- This position requires the following skillsets.
					</Typography>
					<Typography variant="body1" color="textSecondary">
						- This position requires some hardcore skillsets that some
						candidates may not have.
					</Typography>
					<Typography variant="body1" color="textSecondary">
						- This position requires some hardcore skillsets that some
						candidates may not have.
					</Typography>
				</Box>
				<Box mb={1.5}>
					<Box className={classes.title}>RECRUITERS</Box>
				</Box>
				<AvatarGroup max={5}>
					<Avatar
						avatarSize="small"
						avatarImage="https://i.pinimg.com/originals/34/b7/6e/34b76e3e6aa1b0613f37dcc70b76d13c.png"
					/>
					<Avatar
						avatarSize="small"
						avatarImage="https://i.pinimg.com/originals/59/5c/61/595c616ad216778203dce4bac756adc6.jpg"
					/>
					<Avatar
						avatarSize="small"
						avatarImage="https://i.pinimg.com/originals/c7/31/cf/c731cf04c31fb2c1132d392044a392fe.jpg"
					/>
				</AvatarGroup>
				<Box mt={4}>
					<Button fullWidth variant="contained" color="primary">
						Apply
					</Button>
				</Box>
			</MuiDialog>
		</Fragment>
	);
};
