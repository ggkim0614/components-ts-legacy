import { Avatar } from './Avatar';
import { AvatarGroup } from '@material-ui/lab';
import { VerticalCenter } from '../../util/VerticalCenter/VerticalCenter';
import { Box } from '@material-ui/core';

export default {
	title: 'components/UI/Avatar',
	component: Avatar,
	tags: ['autodocs'],
};

export const DefaultAvatar = () => {
	return (
		<Avatar avatarImage="https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
	);
};

export const GroupedAvatar = () => {
	return (
		<AvatarGroup>
			<Avatar avatarImage="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
			<Avatar avatarImage="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
			<Avatar avatarImage="https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
		</AvatarGroup>
	);
};
