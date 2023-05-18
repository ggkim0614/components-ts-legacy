import React from 'react';
import { OutlinedInput } from './OutlinedInput';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
	title: 'components/UI/Outlined Input',
	component: OutlinedInput,
	decorators: [withKnobs],
	tags: ['autodocs'],
};

export const DefaultOutlinedInput = () => {
	return <OutlinedInput label="test" color="primary" />;
};

export const FullWidthOutlinedInput = () => {
	return <OutlinedInput fullWidth label="test" color="secondary" />;
};

export const DecoratedOutlinedInput = () => {
	return (
		<OutlinedInput
			startAdornment={<div style={{ paddingRight: 8 }}>$</div>}
			endAdornment={<div style={{ paddingRight: 8 }}>$</div>}
			label="test"
			color="secondary"
		/>
	);
};
