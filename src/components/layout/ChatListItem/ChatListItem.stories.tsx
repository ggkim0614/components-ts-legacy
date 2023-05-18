import React from 'react';
import { ChatListItem } from './ChatListItem';

export default {
	title: 'components/Layout/ChatListItem',
	component: ChatListItem,
	tags: ['autodocs'],
};

export const DefaultChatListItem = () => {
	return (
		<ChatListItem
			userType="user"
			userName="George Kim"
			userAvatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
			userPosition="Frontend Developer"
			chatMessage="Please verify your email address to access all of our cool features."
			chatDate="10:51 pm"
			chatUnreadCount={0}
		/>
	);
};
