import React from 'react';
import { ChatBubble } from './ChatBubble';

export default {
	title: 'components|UI/ChatBubble',
	component: ChatBubble,
};

export const DefaultUserSideChatBubble = () => {
	return (
		<div
			style={{
				backgroundColor: '#e8e8e8',
				padding: '16px',
				borderRadius: '8px',
			}}
		>
			<ChatBubble
				avatarImage="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
				avatarSize="medium"
				message="All the best!"
				userType="company"
				fromWho="you"
				timeStamp="1 min"
			/>
		</div>
	);
};
export const ChatBubblePair = () => {
	return (
		<div
			style={{
				backgroundColor: '#e8e8e8',
				padding: '16px',
				borderRadius: '8px',
			}}
		>
			<ChatBubble
				avatarImage="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
				avatarSize="medium"
				message="All the best!"
				userType="company"
				fromWho="you"
				timeStamp="1 min"
			/>
			<ChatBubble
				fromWho="me"
				message="Thank you so much!"
				userType="user"
				timeStamp="just now"
				read={true}
			/>
		</div>
	);
};
