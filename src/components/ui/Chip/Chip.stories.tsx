import { Chip } from './Chip';

export default {
	title: 'components/UI/Chip',
	component: Chip,
	tags: ['autodocs'],
};

export const DefaultChip = () => {
	return (
		<Chip
			variant="default"
			label="Chip"
			clickable={true}
			hasDeleteIcon={true}
		/>
	);
};
