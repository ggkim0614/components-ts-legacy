import React from 'react';
import { VerticalCenter } from './VerticalCenter';

export default {
	title: 'components/Util/VerticalCenter',
	component: VerticalCenter,
	decorators: [],
	tags: ['autodocs'],
};

export const DefaultExample = () => {
	return (
		<VerticalCenter justify="space-evenly">
			<h1>1</h1>
			<h1>2</h1>
			<h1>3</h1>
			<h1>4</h1>
		</VerticalCenter>
	);
};

export const SpaceBetweenWithTwoExample = () => {
	return (
		<VerticalCenter justify="space-between">
			<h1>1</h1>
			<h1>2</h1>
		</VerticalCenter>
	);
};

export const SpaceBetweenWithFourExample = () => {
	return (
		<VerticalCenter justify="space-between">
			<h1>1</h1>
			<h1>2</h1>
			<h1>3</h1>
			<h1>4</h1>
		</VerticalCenter>
	);
};

export const SpaceAroundWithFourExample = () => {
	return (
		<VerticalCenter justify="space-around">
			<h1>1</h1>
			<h1>2</h1>
			<h1>3</h1>
			<h1>4</h1>
		</VerticalCenter>
	);
};

export const SpaceEvenlyWithFourExample = () => {
	return (
		<VerticalCenter justify="space-evenly">
			<h1>1</h1>
			<h1>2</h1>
			<h1>3</h1>
			<h1>4</h1>
		</VerticalCenter>
	);
};
