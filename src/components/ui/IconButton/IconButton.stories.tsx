import React, { ButtonHTMLAttributes } from 'react';
import { Box, IconButton as MuiIconButton, Paper } from '@material-ui/core';
import { MenuOutlined, CameraAltOutlined, Camera } from '@material-ui/icons';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {
	Avatar,
	IconButton,
	FacebookIcon,
	TwitterIcon,
	InstagramIcon,
	YoutubeIcon,
	LinkIcon,
	SendIcon,
} from '..';

export default {
	title: 'components|UI/IconButton', // 스토리북에서 보여질 그룹과 경로를 명시
	component: IconButton, // 어떤 컴포넌트를 문서화 할지 명시
	decorators: [withKnobs], // 애드온 적용
};

export const DefaultIconButton = () => {
	return (
		<IconButton>
			<SendIcon />
		</IconButton>
	);
};

export const DefaultSquareIconButton = () => {
	return (
		<IconButton square>
			<SendIcon />
		</IconButton>
	);
};

export const FlatIconButton = () => {
	return (
		<IconButton flat>
			<MenuOutlined />
		</IconButton>
	);
};

export const TinyLinkIconButton = () => {
	return (
		<Box
			p={4}
			display="flex"
			alignItems="center"
			style={{
				backgroundImage:
					'url(https://enqwest.com/wp-content/uploads/2015/02/blurred-city-lights-photography-hd-wallpaper-1920x1080-9111.jpg)',
				backgroundPosition: 'center',
				width: 360,
				borderRadius: 20,
			}}
		>
			<Box width={160} display="flex" justifyContent="space-between">
				<IconButton size="tiny" hasWhiteBackground isTransparent={true} flat>
					<FacebookIcon
						style={{
							//styles to be used for the inner icon
							color: 'black',
							width: '18px',
							height: '18px',
							opacity: 0.7,
						}}
					/>
				</IconButton>
				<IconButton size="tiny" hasWhiteBackground isTransparent={true} flat>
					<TwitterIcon
						style={{
							color: 'black',
							width: '18px',
							height: '18px',
							opacity: 0.7,
						}}
					/>
				</IconButton>
				<IconButton size="tiny" hasWhiteBackground isTransparent={true} flat>
					<InstagramIcon
						style={{
							color: 'black',
							width: '18px',
							height: '18px',
							opacity: 0.7,
						}}
					/>
				</IconButton>
				<IconButton size="tiny" hasWhiteBackground isTransparent={true} flat>
					<YoutubeIcon
						style={{
							color: 'black',
							width: '18px',
							height: '18px',
							opacity: 0.7,
						}}
					/>
				</IconButton>
			</Box>
			<Box
				style={{
					background: 'white',
					opacity: 0.7,
					borderRadius: 3,
				}}
				width={6}
				height={6}
				ml={1.25}
				mr={1.25}
			/>
			<IconButton size="tiny" hasWhiteBackground isTransparent={true} flat>
				<LinkIcon
					style={{
						color: 'black',
						width: '18px',
						height: '18px',
						opacity: 0.7,
					}}
				/>
			</IconButton>
		</Box>
	);
};

export const DashedIconButton = () => {
	return (
		<IconButton dashed>
			<MenuOutlined />
		</IconButton>
	);
};

export const ColoredIconButton = () => {
	return (
		<IconButton dashed color="pink">
			<MenuOutlined />
		</IconButton>
	);
};

export const TextIconButton = () => {
	return <IconButton dashed color="pink"></IconButton>;
};

export const ImageUploadButton = () => {
	const [file, setFile] = React.useState(null);

	const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const reader = new FileReader();
		reader.onload = function (e) {
			setFile(e.target.result);
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	return (
		<div>
			<input
				accept="image/*"
				onChange={handleImageSelect}
				id="icon-button-file"
				type="file"
				style={{ display: 'none' }}
			/>
			<label htmlFor="icon-button-file">
				<IconButton dashed square color="primary" component="span">
					{file ? (
						<Avatar userType="company" avatarSize="medium" avatarImage={file} />
					) : (
						<CameraAltOutlined />
					)}
				</IconButton>
			</label>
		</div>
	);
};
