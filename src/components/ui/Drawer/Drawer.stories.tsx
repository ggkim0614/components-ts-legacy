import React, { Fragment, useState, KeyboardEvent, MouseEvent } from 'react';
import { Button } from '..';
import { Drawer } from './Drawer';
import { withKnobs } from '@storybook/addon-knobs';

export default {
	title: 'components/UI/Drawer',
	component: Drawer,
	decorators: [withKnobs],
	tags: ['autodocs'],
};

export const DefaultDrawerFromRight = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer =
		(open: boolean) =>
		(
			event:
				| KeyboardEvent<Element>
				| MouseEvent<Element, MouseEvent<Element, MouseEvent>>
		) => {
			if (
				event.type === 'keydown' &&
				((event as KeyboardEvent).key === 'Tab' ||
					(event as KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			setOpen(open);
		};

	return (
		<Fragment>
			<Button onClick={() => setOpen(true)}>Open Drawer</Button>
			<Drawer isOpen={open} onClose={toggleDrawer(false)}>
				Drawer Open
			</Drawer>
		</Fragment>
	);
};

export const DefaultDrawerFromTop = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer =
		(open: boolean) =>
		(
			event:
				| KeyboardEvent<Element>
				| MouseEvent<Element, MouseEvent<Element, MouseEvent>>
		) => {
			if (
				event.type === 'keydown' &&
				((event as KeyboardEvent).key === 'Tab' ||
					(event as KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			setOpen(open);
		};

	return (
		<Fragment>
			<Button onClick={() => setOpen(true)}>Open Drawer From Top</Button>
			<Drawer anchor="top" isOpen={open} onClose={toggleDrawer(false)}>
				Drawer Open
			</Drawer>
		</Fragment>
	);
};

export const DefaultDrawerFromBottom = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer =
		(open: boolean) =>
		(
			event:
				| KeyboardEvent<Element>
				| MouseEvent<Element, MouseEvent<Element, MouseEvent>>
		) => {
			if (
				event.type === 'keydown' &&
				((event as KeyboardEvent).key === 'Tab' ||
					(event as KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			setOpen(open);
		};

	return (
		<Fragment>
			<Button onClick={() => setOpen(true)}>Open Drawer From Bottom</Button>
			<Drawer anchor="bottom" isOpen={open} onClose={toggleDrawer(false)}>
				Drawer Open
			</Drawer>
		</Fragment>
	);
};
