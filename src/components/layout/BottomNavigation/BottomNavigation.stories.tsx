import { BottomNavigation } from './BottomNavigation';

export default {
	title: 'components/Layout/BottomNavigation',
	component: BottomNavigation,
	tags: ['autodocs'],
};

export const DefaultBottomNavigation = () => {
	return <BottomNavigation />;
};

export const ActiveBottomNavigation = () => {
	return <BottomNavigation activeTab="/chat" />;
};
