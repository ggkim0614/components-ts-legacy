import React from 'react';
import { ChatRequestItem } from './ChatRequestItem';

export default {
	title: 'components/Layout/ChatRequestItem',
	component: ChatRequestItem,
	tags: ['autodocs'],
};

export const DefaultRequestListItem = () => {
	return (
		<ChatRequestItem
			userType="user"
			userName="Gilbert Hughes"
			userAvatar="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
			requestDate="May 8"
			requestPastDate="D-4382"
		/>
	);
};
