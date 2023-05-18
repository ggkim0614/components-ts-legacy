import React, { FC, Fragment, useState } from 'react';
import { Box, Dialog as MuiDialog, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Add, CameraAltOutlined, Close, PostAdd } from '@material-ui/icons';
import {
	Avatar,
	Button,
	Chip,
	DatePicker,
	FilledInput,
	IconButton,
	OutlinedInput,
	Select,
	Textarea,
} from '..';

import { AutoComplete, Option } from '..';

import { Dialog } from './Dialog';

import { VerticalCenter } from '../../util';
import { AvatarGroup } from '@material-ui/lab';

export default {
	title: 'components|UI/Dialog', // 스토리북에서 보여질 그룹과 경로를 명시
	component: Dialog, // 어떤 컴포넌트를 문서화 할지 명시
	decorators: [], // 애드온 적용
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			maxWidth: 568,
			margin: 'auto',
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
	})
);

export const DefaultDialog = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Button color="primary" onClick={handleClickOpen}>
				CLICK ME
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<div>opened by car, rich car.</div>
			</Dialog>
		</Fragment>
	);
};

export const EditInfoDialog = () => {
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
				Edit Education
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
				<div>
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
					<Box mt={2} display="flex">
						<IconButton dashed flat square hasWhiteBackground={true}>
							<CameraAltOutlined />
						</IconButton>
						<Box ml={2} width="100%">
							<FilledInput
								fullWidth
								label="University of Illinois at Urbana Champaign"
								color="secondary"
							/>
						</Box>
					</Box>
					<Box mt={2} ml={7.5}>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<FilledInput fullWidth label="B.Sc." color="secondary" />
							</Grid>
							<Grid item xs={6}>
								<FilledInput fullWidth label="2012-2016" color="secondary" />
							</Grid>
							<Grid item xs={12}>
								<FilledInput
									fullWidth
									label="Magna Cum Laude"
									color="secondary"
								/>
							</Grid>
						</Grid>
					</Box>
					<Box mt={2} mb={1.5}>
						<Typography variant="h4">SPECIFICS</Typography>
					</Box>
					<Textarea />
					<Box mt={2} mb={1}>
						<Typography variant="h4">VERIFY CARD</Typography>
					</Box>
					<Typography variant="body1" color="textSecondary">
						Upload relevant documents (Diplomas, transcripts, etc.) to verify
						this card and gain more exposure. Please expect around 7 days for us
						to process your papers.
					</Typography>

					<Box mt={1} mb={2}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Button dashed fullWidth variant="outlined" color="default">
									<CameraAltOutlined />
								</Button>
							</Grid>
							<Grid item xs={6}>
								<Button fullWidth variant="outlined" color="primary">
									<Typography variant="h4">CANCEL</Typography>
								</Button>
							</Grid>
							<Grid item xs={6}>
								<Button fullWidth variant="contained" color="primary">
									<Typography variant="h4">SAVE</Typography>
								</Button>
							</Grid>
						</Grid>
					</Box>
				</div>
			</MuiDialog>
		</Fragment>
	);
};

type TeamsDialogProps = {
	/** Team Member's Name */
	memberName?: string;
	/** Team Member's profile image */
	avatarImage?: string;
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films: Array<Option> = [
	{ label: 'The Shawshank Redemption', year: 1994 },
	{ label: 'The Godfather', year: 1972 },
	{ label: 'The Godfather: Part II', year: 1974 },
	{ label: 'The Dark Knight', year: 2008 },
	{ label: '12 Angry Men', year: 1957 },
	{ label: "Schindler's List", year: 1993 },
	{ label: 'Pulp Fiction', year: 1994 },
	{ label: 'The Lord of the Rings: The Return of the King', year: 2003 },
	{ label: 'The Good, the Bad and the Ugly', year: 1966 },
	{ label: 'Fight Club', year: 1999 },
	{ label: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
	{ label: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
	{ label: 'Forrest Gump', year: 1994 },
	{ label: 'Inception', year: 2010 },
	{ label: 'The Lord of the Rings: The Two Towers', year: 2002 },
	{ label: "One Flew Over the Cuckoo's Nest", year: 1975 },
	{ label: 'Goodfellas', year: 1990 },
	{ label: 'The Matrix', year: 1999 },
	{ label: 'Seven Samurai', year: 1954 },
	{ label: 'Star Wars: Episode IV - A New Hope', year: 1977 },
	{ label: 'City of God', year: 2002 },
	{ label: 'Se7en', year: 1995 },
	{ label: 'The Silence of the Lambs', year: 1991 },
	{ label: "It's a Wonderful Life", year: 1946 },
	{ label: 'Life Is Beautiful', year: 1997 },
	{ label: 'The Usual Suspects', year: 1995 },
	{ label: 'Léon: The Professional', year: 1994 },
	{ label: 'Spirited Away', year: 2001 },
	{ label: 'Saving Private Ryan', year: 1998 },
	{ label: 'Once Upon a Time in the West', year: 1968 },
	{ label: 'American History X', year: 1998 },
	{ label: 'Interstellar', year: 2014 },
	{ label: 'Casablanca', year: 1942 },
	{ label: 'City Lights', year: 1931 },
	{ label: 'Psycho', year: 1960 },
	{ label: 'The Green Mile', year: 1999 },
	{ label: 'The Intouchables', year: 2011 },
	{ label: 'Modern Times', year: 1936 },
	{ label: 'Raiders of the Lost Ark', year: 1981 },
	{ label: 'Rear Window', year: 1954 },
	{ label: 'The Pianist', year: 2002 },
	{ label: 'The Departed', year: 2006 },
	{ label: 'Terminator 2: Judgment Day', year: 1991 },
	{ label: 'Back to the Future', year: 1985 },
	{ label: 'Whiplash', year: 2014 },
	{ label: 'Gladiator', year: 2000 },
	{ label: 'Memento', year: 2000 },
	{ label: 'The Prestige', year: 2006 },
	{ label: 'The Lion King', year: 1994 },
	{ label: 'Apocalypse Now', year: 1979 },
	{ label: 'Alien', year: 1979 },
	{ label: 'Sunset Boulevard', year: 1950 },
	{
		label:
			'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
		year: 1964,
	},
	{ label: 'The Great Dictator', year: 1940 },
	{ label: 'Cinema Paradiso', year: 1988 },
	{ label: 'The Lives of Others', year: 2006 },
	{ label: 'Grave of the Fireflies', year: 1988 },
	{ label: 'Paths of Glory', year: 1957 },
	{ label: 'Django Unchained', year: 2012 },
	{ label: 'The Shining', year: 1980 },
	{ label: 'WALL·E', year: 2008 },
	{ label: 'American Beauty', year: 1999 },
	{ label: 'The Dark Knight Rises', year: 2012 },
	{ label: 'Princess Mononoke', year: 1997 },
	{ label: 'Aliens', year: 1986 },
	{ label: 'Oldboy', year: 2003 },
	{ label: 'Once Upon a Time in America', year: 1984 },
	{ label: 'Witness for the Prosecution', year: 1957 },
	{ label: 'Das Boot', year: 1981 },
	{ label: 'Citizen Kane', year: 1941 },
	{ label: 'North by Northwest', year: 1959 },
	{ label: 'Vertigo', year: 1958 },
	{ label: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
	{ label: 'Reservoir Dogs', year: 1992 },
	{ label: 'Braveheart', year: 1995 },
	{ label: 'M', year: 1931 },
	{ label: 'Requiem for a Dream', year: 2000 },
	{ label: 'Amélie', year: 2001 },
	{ label: 'A Clockwork Orange', year: 1971 },
	{ label: 'Like Stars on Earth', year: 2007 },
	{ label: 'Taxi Driver', year: 1976 },
	{ label: 'Lawrence of Arabia', year: 1962 },
	{ label: 'Double Indemnity', year: 1944 },
	{ label: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
	{ label: 'Amadeus', year: 1984 },
	{ label: 'To Kill a Mockingbird', year: 1962 },
	{ label: 'Toy Story 3', year: 2010 },
	{ label: 'Logan', year: 2017 },
	{ label: 'Full Metal Jacket', year: 1987 },
	{ label: 'Dangal', year: 2016 },
	{ label: 'The Sting', year: 1973 },
	{ label: '2001: A Space Odyssey', year: 1968 },
	{ label: "Singin' in the Rain", year: 1952 },
	{ label: 'Toy Story', year: 1995 },
	{ label: 'Bicycle Thieves', year: 1948 },
	{ label: 'The Kid', year: 1921 },
	{ label: 'Inglourious Basterds', year: 2009 },
	{ label: 'Snatch', year: 2000 },
	{ label: '3 Idiots', year: 2009 },
	{ label: 'Monty Python and the Holy Grail', year: 1975 },
];

export const TeamsDialog: FC<TeamsDialogProps> = ({
	memberName,
	avatarImage,
}: TeamsDialogProps) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	//for autocomplete
	const [value, setValue] = useState<Array<Option>>([]);
	const handleChange = (event: React.ChangeEvent<{}>, value: Array<Option>) => {
		setValue(value);
	};

	return (
		<Fragment>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Edit Teams
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
				<div>
					<AutoComplete
						onChange={handleChange}
						options={top100Films}
						placeholder="Movies"
						value={value}
					/>
					<Box mt={2} mb={2}>
						<Box className={classes.teamMemberElement}>
							<Box display="flex" alignItems="center">
								<Avatar
									avatarSize="small"
									avatarImage="https://static.tvmaze.com/uploads/images/medium_portrait/222/556599.jpg"
								/>
								<Box ml={2}>
									<Typography variant="h4">Donald Jared Dunn</Typography>
								</Box>
							</Box>
							<IconButton flat size="small">
								<Close />
							</IconButton>
						</Box>
						<Box className={classes.teamMemberElement}>
							<Box display="flex" alignItems="center">
								<Avatar
									avatarSize="small"
									avatarImage="https://static.tvmaze.com/uploads/images/medium_portrait/222/556599.jpg"
								/>
								<Box ml={2}>
									<Typography variant="h4">Donald Jared Dunn</Typography>
								</Box>
							</Box>
							<IconButton flat size="small">
								<Close />
							</IconButton>
						</Box>
						<Box className={classes.teamMemberElement}>
							<Box>
								<Box display="flex" alignItems="center">
									<Avatar
										avatarSize="small"
										avatarImage="https://static.tvmaze.com/uploads/images/medium_portrait/222/556599.jpg"
									/>
									<Box ml={2}>
										<Typography variant="h4">Donald Jared Dunn</Typography>
									</Box>
								</Box>
							</Box>
							<Box
								display="flex"
								flexDirection="row-reverse"
								alignItems="center"
							>
								<IconButton flat size="small">
									<Close />
								</IconButton>
								{/** Display pending status chip if true */}
								{true ? (
									<Chip
										label="Pending"
										size="small"
										variant="outlined"
										color="primary"
									/>
								) : null}
							</Box>
						</Box>
					</Box>

					<Button fullWidth={true} variant="contained" color="primary">
						<Typography variant="h4">SAVE</Typography>
					</Button>
				</div>
			</MuiDialog>
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

export const PostJobDialog = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [age, setAge] = React.useState('');
	const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string);
	};

	//for autocomplete
	const [value, setValue] = useState<Array<Option>>([]);
	const handleChange = (event: React.ChangeEvent<{}>, value: Array<Option>) => {
		setValue(value);
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
						onChange={handleSelectChange}
						value={age}
					/>
				</Box>
				<Box mb={2}>
					<FilledInput fullWidth label="Job Position" color="secondary" />
				</Box>
				<Box mb={2}>
					<FilledInput
						fullWidth
						startAdornment={
							<Typography color="textSecondary" style={{ paddingRight: 8 }}>
								₹
							</Typography>
						}
						endAdornment={
							<Typography color="textSecondary" style={{ paddingRight: 8 }}>
								LPA
							</Typography>
						}
						label="6-12"
						color="secondary"
					/>
				</Box>
				<Box mb={2}>
					<FilledInput fullWidth label="Pune, Maharashtra" color="secondary" />
				</Box>
				<Box mb={2}>
					<DatePicker fullWidth />
				</Box>
				<Box mb={2}>
					<Typography variant="h4">JOB DESCRIPTION</Typography>
				</Box>
				<Box mb={2}>
					<Textarea />
				</Box>
				<Box mb={2}>
					<Typography variant="h4">REQUIREMENTS</Typography>
				</Box>
				<Box mb={2}>
					<FilledInput
						fullWidth
						endAdornment={
							<Typography color="textSecondary">yrs.of.exp.</Typography>
						}
						label="ex.6-12"
						color="secondary"
					/>
				</Box>
				<Box mb={1}>
					<AutoComplete
						onChange={handleChange}
						options={top100Films}
						placeholder="Movies"
						value={value}
					/>
				</Box>
				<Box mb={1} display="flex">
					<Chip
						label="Deletable Chip"
						color="primary"
						onDelete={() => alert('Deleted')}
					/>
					<Chip
						label="Deletable Chip"
						color="primary"
						onDelete={() => alert('Deleted')}
					/>
					<Chip
						label="Deletable Chip"
						color="primary"
						onDelete={() => alert('Deleted')}
					/>
				</Box>
				<Box mt={2} mb={2}>
					<Textarea />
				</Box>
				<Box mb={2}>
					<Typography variant="h4">RECRUITERS</Typography>
				</Box>
				<AutoComplete
					onChange={handleChange}
					options={top100Films}
					placeholder="Movies"
					value={value}
				/>
				<Box mt={4}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Button fullWidth color="primary" variant="outlined">
								<Typography variant="h4">Cancel</Typography>
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button fullWidth color="primary" variant="contained">
								<Typography variant="h4">Save</Typography>
							</Button>
						</Grid>
					</Grid>
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
				<Box display="flex" justifyContent="space-between">
					<Typography variant="h4">JOB POSITIONS</Typography>
					<Box mt={-1} mr={-1}>
						<IconButton flat size="small">
							<Close />
						</IconButton>
					</Box>
				</Box>
				<VerticalCenter
					mb={2}
					height={60}
					justify="space-between"
					align="flex-start"
					flexDirection="column"
				>
					<Typography variant="h4" color="textSecondary">
						Senior Cloud Engineer
					</Typography>
					<Typography variant="subtitle2">₹6-12 LPA D-12</Typography>
					<Typography variant="body1" color="textSecondary">
						Pune, Maharashtra
					</Typography>
				</VerticalCenter>
				<Box mb={1.5}>
					<Typography variant="h4">JOB DESCRIPTION</Typography>
				</Box>
				<Box mb={2}>
					<Typography variant="body1" color="textSecondary">
						This is the job description. Tell candidates about this amazing
						opportunity within your company.
					</Typography>
				</Box>
				<Box mb={1.5}>
					<Typography variant="h4">REQUIREMENTS</Typography>
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
					<Typography variant="h4">RECRUITERS</Typography>
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
						<Typography variant="h4">Apply</Typography>
					</Button>
				</Box>
			</MuiDialog>
		</Fragment>
	);
};
