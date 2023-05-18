import React, { Fragment, useState, KeyboardEvent, MouseEvent } from 'react';
import { Button } from '..';
import { Drawer } from './Drawer';
import { withKnobs } from '@storybook/addon-knobs';

export default {
	title: 'components|UI/Drawer', // 스토리북에서 보여질 그룹과 경로를 명시
	component: Drawer, // 어떤 컴포넌트를 문서화 할지 명시
	decorators: [withKnobs], // 애드온 적용
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
