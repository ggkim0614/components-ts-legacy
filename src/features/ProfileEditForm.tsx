import React, { FC, useEffect, useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Button, IconButton } from '../components/ui';
import { CameraAltOutlined, DescriptionOutlined } from '@material-ui/icons';

type ProfileEditFormProps = {
	open: boolean;
	onClose: () => void;
	initialValues: any;
	handleSubmit: () => void;
	bgImageLink?: string;
	name?: string;
	message?: string;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			height: 350,
		},
		background: {
			height: 200,
		},
	})
);

const ProfileEditForm: FC<ProfileEditFormProps> = ({
	initialValues,
	bgImageLink,
	name,
	message,
}) => {
	const classes = useStyles();
	const [file, setFile] = useState(null);
	const [image, setImage] = useState(null);
	const [backgroundImage, setBackgroundImage] = useState(null);
	useEffect(() => {
		if (initialValues) {
			setImage(initialValues.profile_image);
			setFile(initialValues.verification_document);
			setBackgroundImage(initialValues.background_image);
		}
	}, [initialValues]);
	return (
		<form>
			<Box className={classes.root}>
				<Box
					className={classes.background}
					style={{
						backgroundImage: `url(${bgImageLink})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						margin: '-16px -16px',
					}}
				></Box>
				<Box display="flex" justifyContent="center">
					<Field
						name="profile_image"
						component={(props) => {
							const handleChange = (e) => {
								const image = e.target.files[0];
								const reader = new FileReader();
								reader.onload = function (e) {
									setImage(e.target.result);
								};
								reader.readAsDataURL(image);
								props.input.onChange(image);
							};
							return (
								<IconButton component="label" dashed square>
									{image ? (
										<Avatar
											userType="company"
											avatarSize="medium"
											avatarImage={image}
										/>
									) : (
										<CameraAltOutlined />
									)}
									<input
										{...props.input}
										accept="image/*"
										type="file"
										onChange={handleChange}
										value=""
										style={{ display: 'none' }}
									/>
								</IconButton>
							);
						}}
					/>
				</Box>
				<Box textAlign="center" mt={3}>
					<Typography variant="h1">{name}</Typography>
				</Box>
				<Box textAlign="center" mt={2}>
					<Typography variant="body2">{message}</Typography>
				</Box>
			</Box>
		</form>
	);
};

export default ProfileEditForm;
