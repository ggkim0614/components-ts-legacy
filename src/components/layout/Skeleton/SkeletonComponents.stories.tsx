import { ProfileSkeleton } from './ProfileSkeleton';
import { FeedCardSkeleton } from './FeedSkeleton';
import { ChatSkeleton } from './ChatSkeleton';

export default {
	title: 'components/Layout/Skeletons',
	component: ChatSkeleton,
	FeedCardSkeleton,
	ProfileSkeleton,
	tags: ['autodocs'],
};

export const DefaultFeedSkeleton = () => {
	return <FeedCardSkeleton />;
};

export const DefaultChatSkeleton = () => {
	return <ChatSkeleton />;
};

export const DefaultProfileSkeleton = () => {
	return <ProfileSkeleton />;
};
