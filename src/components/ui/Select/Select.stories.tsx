import React from 'react';
import { Select } from './Select';

export default {
	title: 'components/UI/Select',
	component: Select,
	tags: ['autodocs'],
};

const options = [
	{
		label: 'India',
		value: 'india',
	},
	{
		label: 'South Korea',
		value: 'southKorea',
	},
];

export const DefaultSelect = () => {
	const [age, setAge] = React.useState('');
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string);
	};

	return (
		<Select
			label="Location"
			options={options}
			onChange={handleChange}
			value={age}
		/>
	);
};
